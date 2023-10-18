import React from 'react';
import Header from '../components/Header';
import '../styles/screens/LandingPage.css';
import reactLogo from "./main-image.jpg";

const Login = () => {
    return <div>
    <ul>
        <li><a href="/login/doctor">I'm doctor</a></li>
        <li><a href="/login/patient">I'm patient</a></li>
    </ul>
    </div>;
  };

export default Login;
