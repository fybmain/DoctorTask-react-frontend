import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Header from '../components/Header';
import '../styles/screens/LandingPage.css';
import reactLogo from "./main-image.jpg";
import { doctorLogin } from '../redux/actions/userActions';
import { useStore } from 'react-redux';
import axios from 'axios';
import { BASE_URL } from '../api';

const AvailableTimeSegments = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const store = useStore();

  const current = new Date();
  let start = new Date(current.getTime() - 7 * 24 * 60 * 60 * 1000);
  let end = new Date(current.getTime() + 7 * 24 * 60 * 60 * 1000);
  let data = [];

  const refreshData = async () => {
    console.log(store.getState());
    const response = await axios.get(`${BASE_URL}/api/appointments/doctor/available_time_segments`, { data: {
        token: store.getState().user.login.token,
        Start: start.toISOString(),
        End: end.toISOString()
    }});
    console.log(response);
    data = response.data.result;
  }
  
  refreshData();
  return (<div>
    {
        data.forEach(obj => {
            return <div>{{obj}}</div>
        })
    }
  </div>);
};

export default AvailableTimeSegments;
