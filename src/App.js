import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './screens/LandingPage';
import DBConnection from './screens/DBConnection';
import Contact from './screens/Contact';
import Login from './screens/Login';
import DoctorLogin from './screens/DoctorLogin';
import PatientLogin from './screens/PatientLogin';
import Header from './components/Header-new';
import Footer from './components/footer-new';
import AvailableTimeSegments from './screens/AvailableTimeSegments';
import { useStore } from 'react-redux';

function App() {
  let store = useStore();
  return (
    <BrowserRouter>
      <Header />
      <div>User Info: { JSON.stringify(store.getState()) }</div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/DBConnection" element={<DBConnection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/doctor" element={<DoctorLogin />} />
        <Route path="/login/patient" element={<PatientLogin />} />
        <Route path="/services/available_time_segments" element={<AvailableTimeSegments />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;


