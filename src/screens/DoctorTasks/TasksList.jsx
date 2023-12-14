import React, { Component, useState } from "react";
import axios from "axios";
import moment from "moment";
import { Avatar, List, Space, Button, Select, Modal } from 'antd';
import { Link } from 'react-router-dom';
import { BASE_URL } from "../../constants";
import { readLoginData } from "../../loginData";
import AddTask, { createTask } from "./AddTask";

const { Option } = Select;

const dateFormat = 'YYYY-MM-DD HH:mm:ss';

const AddTaskDialog = (props) => {
  const loginData = readLoginData();
  const [ formContent, setFormContent ] = useState({
    patient: undefined,
    start: moment(props.start).format(dateFormat),
    end: moment(props.end).format(dateFormat),
    description: "",
  });

  const [valid, setValid] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleFormChange = (change) => {
    const newState = {...formContent, ...change};
    setFormContent(newState);
    setValid((newState.patient) && (moment(newState.start).isValid()) && (moment(newState.end).isValid()));
  }

  const handleOk = () => {
    setConfirmLoading(true);
    (async () => {
      await createTask(
        loginData.id,
        formContent);
      props.onOk();
    })();
  };

  return (
    <Modal
      title="Add A Task"
      open={true}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={props.onCancel}
      okButtonProps={{ disabled: !valid }}
    >
      <AddTask
        doctor={loginData.name}
        {...formContent}
        onChange={handleFormChange}/>
    </Modal>
  );
}

class TasksList extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [],
            filter: 'all', // Default filter option
            positionOptions: 'bottom',
            alignOptions: 'center',
            dialogOpen: false,
        };
    }

    componentDidMount() {
        this.fetchAllTasks();
    }

    fetchAllTasks = async () => {
      try{
        const response = await axios.get(`${BASE_URL}/api/users/tasks?filter=${this.state.filter}`);
        this.setState({
          tasks: response.data,
        });
      }catch(error){
        console.error(error);
      };
    };

    // Function to handle filter change
    handleFilterChange = (value) => {
        this.setState(
            { filter: value },
            () => this.fetchAllTasks() // Fetch tasks after updating the filter
        );
    };

    handleOk = async () => {
      await this.fetchAllTasks();
      this.setState({ dialogOpen: false });
    }

    handleCancel = () => {
      this.setState({ dialogOpen: false });
    }

    render() {
        return (
            <>
                <Space
                    direction="vertical"
                    style={{
                        marginBottom: '20px',
                    }}
                    size="middle"
                >
                    <Space
                        direction="horizontal"
                        style={{
                            justifyContent: 'flex-end',
                            marginRight: '20px',
                        }}
                    >
                        <Select
                            style={{ width: 200 }}
                            value={this.state.filter}
                            onChange={this.handleFilterChange}
                        >
                            <Option value="all">All</Option>
                            <Option value="today">Today</Option>
                            <Option value="week">One Week</Option>
                        </Select>
                        <Button type="primary" onClick={() => this.setState({ dialogOpen: true })}>Add Task</Button>
                    </Space>
                </Space>
                <List
                    itemLayout="horizontal"
                    pagination={{
                        position: this.state.positionOptions,
                        align: this.state.alignOptions,
                        pageSize: 7, // Set the number of tasks per page
                    }}
                    dataSource={this.state.tasks}
                    renderItem={(item, index) => (
                        <List.Item style={{  padding: '20px', fontSize: '20px' }}>
                            <List.Item.Meta
                                avatar={
                                    <Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />
                                }
                                title={<Link to={`/tasks/${item.id}`}>{item.PatientName}</Link>}
                                description={`Date:${moment(item.Start).format("YYYY/M/D")}`}
                            />
                        </List.Item>
                    )}
                />
                { this.state.dialogOpen ? <AddTaskDialog start={moment()} end={moment().add(1, 'hour')} onOk={this.handleOk} onCancel={this.handleCancel}/> : null }
            </>
        );
    }
}

export default TasksList;
