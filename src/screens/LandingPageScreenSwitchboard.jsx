import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPageHome from '../components/LandingPageHome/LandingPageHome';
import LandingPageModalFour from '../components/common/LandingPageModal-Four/LandingPageModalFour';

const ScreenSwitchboard = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPageHome/>} />
      {/* <Route path="/LandingPageHome" element={<LandingPageHome/>} /> */}
    </Routes>
  );
};

export default ScreenSwitchboard;
