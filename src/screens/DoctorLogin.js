import React from 'react';
import { useSelector, useDispatch, useStore } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Header from '../components/Header';
import '../styles/screens/LandingPage.css';
import reactLogo from "./main-image.jpg";
import { doctorLogin } from '../api';

const DoctorLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const store = useStore();
  let username="DOC-001", password="DOC-001";
  const onUsername = (e) => {
    username = e.target.value;
  };
  const onPassword = (e) => {
    password = e.target.value;
  };
  const onLogin = async (e) => {
    e.preventDefault();
    const result = await doctorLogin(username, password);
    dispatch({ type: 'USER_LOGIN', payload: result });
    //navigate("/");
  };
  
  return <div>
    <form onSubmit={onLogin}>
      <label for="username">Username:</label><br/>
      <input type="text" id="username" name="username" value={username} onChange={onUsername}/><br/>
      <label for="password">Password:</label><br/>
      <input type="password" id="password" name="password" value={password} onChange={onPassword}/><br/><br/>

      <input type="submit" value="Login"/>
    </form>
  </div>;
};

export default DoctorLogin;
