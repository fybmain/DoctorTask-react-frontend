import moment from 'moment';
import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Radio, Spin } from 'antd';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { doctorCreateAvailableTimeSegment, doctorGetCalendar } from '../../api/calendar';
import { readLoginData } from '../../loginData';
import CreateAvailableTimeSegments from './CreateAvailableTimeSegments';
import AddTask, { createTask } from '../DoctorTasks/AddTask';

const dateFormat = 'YYYY-MM-DD HH:mm:ss';

const getBackgroundColorFromStatus = (type, status) => {
  if(type === 1){ return 'MediumSlateBlue' }
  if(status > 0){
    return 'DarkOrange';
  }else if(status < 0){
    return 'DodgerBlue';
  }else{
    return 'Chartreuse';
  }
}

const getColorFromStatus = (type, status) => {
  if(type === 1){ return 'white' }
  if(status > 0){
    return 'black';
  }else if(status < 0){
    return 'white';
  }else{
    return 'black';
  }
}

const TimeSegmentsView = (props) => {
  const localizer = momentLocalizer(moment);
  console.log("Data", props.data);
  const eventsList = props.data.map(e => ({
    id: e.id,
    type: e.type,
    title: e.description,
    start: moment(e.start).toDate(),
    end: moment(e.end).toDate(),
    status: e.status,
  }));
  const eventStyleGetter = (event, start, end, isSelected) => {
    console.log("event", event);
    return {
      style: {
        backgroundColor: getBackgroundColorFromStatus(event.type, event.status),
        borderRadius: '0px',
        opacity: 0.8,
        color: getColorFromStatus(event.type, event.status),
        border: '0px',
        display: 'block',
      }
    };
  }

  return (
    <>
      <Calendar
        selectable
        defaultView={Views.WEEK}
        localizer={localizer}
        events={eventsList}
        onRangeChange={props.onRangeChange}
        onSelectSlot={props.onSelectSlot}
        onSelectEvent={props.onSelectEvent}
        eventPropGetter={eventStyleGetter}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </>
  );
}

const DialogSelector = (props) => {
  console.log("DialogSelector", props);
  return (props.type === 1 ? <AddTask {...props}/> : <CreateAvailableTimeSegments {...props}/>);
}

const CreateDoctorTask = (props) => {
  const loginData = readLoginData();
  const [ type, setType ] = useState(2);
  const [ formContent, setFormContent ] = useState({
    patient: undefined,
    start: moment(props.start).format(dateFormat),
    end: moment(props.end).format(dateFormat),
    description: "",
  });

  const [valid, setValid] = useState(true);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleFormChange = (change) => {
    const newState = {...formContent, ...change};
    setFormContent(newState);
    updateValid(type, newState);
  }

  const updateValid = (newType, newState) => {
    if(newType === 1){
      setValid((newState.patient) && (moment(newState.start).isValid()) && (moment(newState.end).isValid()));
    }else{
      setValid((moment(newState.start).isValid()) && (moment(newState.end).isValid()));
    }
  }

  const handleType = (type) => {
    setType(type);
    updateValid(type, formContent);
  }

  const handleOk = () => {
    setConfirmLoading(true);
    (async () => {
      if(type === 1){
        await createTask(
          loginData.id,
          formContent);
      }else if(type === 2){
        await doctorCreateAvailableTimeSegment(
          loginData,
          moment(formContent.start).toDate(),
          moment(formContent.end).toDate(),
          formContent.description);
      }
      props.onOk();
    })();
  };

  return (
    <Modal
      title={ type === 1 ? "Add A Task" : "Add An Available Time Segment" }
      open={true}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={props.onCancel}
      okButtonProps={{ disabled: !valid }}
    >
      <Radio.Group onChange={(e) => handleType(e.target.value)} defaultValue={type}>
        <Radio.Button value={1}>Doctor Task</Radio.Button>
        <Radio.Button value={2}>Time Segment</Radio.Button>
      </Radio.Group>
      <DialogSelector
        type={type}
        doctor={loginData.name}
        {...formContent}
        onChange={handleFormChange}/>
    </Modal>
  );
}

const DoctorCalendar = (props) => {
  const navigate = useNavigate();

  const loginData = readLoginData();
  let [ needLoad, setNeedLoad ] = useState(true);
  let [ loading, setLoading] = useState(true);
  let [ data, setData ] = useState([]);
  let [ currentStart, setCurrentStart ] = useState(moment().startOf('week'));
  let [ currentEnd, setCurrentEnd ] = useState(moment().endOf('week'));

  const setCurrentRange = (start, end) => {
    setCurrentStart(start);
    setCurrentEnd(end);
  }

  const fetchData = async () => {
    setLoading(true);
    setData([]);
    const response = await doctorGetCalendar(loginData, currentStart.toDate(), currentEnd.toDate());
    setData(response);
    setLoading(false);
  };

  const handleRangeChange = useCallback((range) => {
    if(!range){
      throw new Error('Unknown range type');
    }

    if(!Array.isArray(range)){
      setCurrentRange(range.start, range.end);
      return;
    }

    if(range.length === 1){
      setCurrentRange(moment(range[0]).startOf('day'), moment(range[0]).endOf('day'));
      return;
    }

    setCurrentRange(moment(range[0]).startOf('week'), moment(range[6]).endOf('week'));
    setNeedLoad(true);
  }, [])

  if(needLoad){
    setNeedLoad(false);
    fetchData();
  }

  // states for the modal
  const [ open, setOpen ] = useState(false);
  const [ start, setStart] = useState(moment().toDate());
  const [ end, setEnd ] = useState(moment().add(1, 'hour').toDate());

  const handleSelectEvent = (event) => {
    console.log(event);
    if(event.type === 1){
      navigate(`/Tasks/${event.id}`)
    }else if(event.type === 2){
      navigate(`/calendar/timesegment/${event.id}`)
    }
  };
  
  const handleSelectSlot = (range) => {
    if(range.action==='select'){
      const start = moment(range.start);
      const end = moment(range.end);
      if(start.clone().add(24, 'hour').isAfter(end)){
        setStart(start.toDate());
        setEnd(end.toDate());
        setOpen(true);
      }
    }
  };

  const handleOk = () => {
    setOpen(false);
    setNeedLoad(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return <>
      <Spin spinning={loading}>
        <TimeSegmentsView data={data} onRangeChange={handleRangeChange} onSelectSlot={handleSelectSlot} onSelectEvent={handleSelectEvent}/>
      </Spin>
      { open ? <CreateDoctorTask start={start} end={end} onOk={handleOk} onCancel={handleCancel}/> : null }
    </>;
}

export default DoctorCalendar;
