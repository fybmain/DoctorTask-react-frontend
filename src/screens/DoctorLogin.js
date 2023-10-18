import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Header from '../components/Header';
import '../styles/screens/LandingPage.css';
import reactLogo from "./main-image.jpg";
import { doctorLogin } from '../redux/actions/userActions';

const DoctorLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let username="DOC-001", password="DOC-001";
  const onUsername = (e) => {
    username = e.target.value;
  };
  const onPassword = (e) => {
    password = e.target.value;
  };
  const onLogin = async (e) => {
    dispatch(await doctorLogin(username, password));
    e.preventDefault();
    //navigate("/");
  };
  
  return <div>
    <form onSubmit={onLogin}>
      <label for="username">Username:</label><br/>
      <input type="text" id="username" name="username" value={username} onChange={onUsername}/><br/>
      <label for="password">Password:</label><br/>
      <input type="password" id="password" name="password" value={password} onChange={onPassword}/><br/><br/>

      <input type="submit" value="Login" />
    </form>
  </div>;
};

export default DoctorLogin;
