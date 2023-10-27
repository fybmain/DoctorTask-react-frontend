import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/screens/LandingPage.css';
import reactLogo from "./main-image.jpg";
import { doctorLogin } from '../redux/actions/userActions';
import { doctorGetAvailableTimeSegments } from '../api';
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    userToken: state.user.login.token,
  };
};

const AvailableTimeSegmentsView = (props) => {
  console.log("data", props.data);
  return (
    <div>
      !!!!
      {
        props.data.forEach(obj => 
            <div>{JSON.stringify(obj)}</div>
        )
      }
    </div>
  );
}

class AvailableTimeSegments extends React.Component {
  constructor(props) {
    super(props);
    const currentDate = new Date();
    this.state = {
      start: new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000),
      end: new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000),
      data: [],
    };
  }

  componentDidMount(){
    this.refreshData();
  }

  async refreshData() {
    /*
    const response = await doctorGetAvailableTimeSegments(this.props.userToken,this.state.start,this.state.end);
    console.log(response);
    this.setState({ data: response.data.result });
    */
    this.setState({ data: [ {'test':'test!!'} ] });
  }

  render(){
    return <AvailableTimeSegmentsView data={this.state.data}/>
  }
};

export default connect(mapStateToProps)(AvailableTimeSegments);
