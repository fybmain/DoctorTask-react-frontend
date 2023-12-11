import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './profile.css';
import { readLoginData } from '../loginData';

const ProfilePage = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loginData = readLoginData();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://e-react-node-backend-22ed6864d5f3.herokuapp.com/patientsRegistration');
        setUserData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [loginData.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const filteredUserData = userData.filter((user) => user.id === loginData.id);

  const renderUserInfo = (label, value) => (
    <div key={label} className="user-info-item">
      <strong>{label}:</strong> {value}
    </div>
  );

  return (
    <div className="profile-page">
      <h2>Patient Profile Details</h2>
      <div className="user-info-container">
        {filteredUserData.map((user) => (
          <div key={user.id} className="user-info">
            <div className="column">
              <h3>Personal Information</h3>
              {renderUserInfo('First Name', user.FName)}
              {renderUserInfo('Middle Name', user.MName)}
              {renderUserInfo('Last Name', user.LName)}
              {renderUserInfo('Address', user.Address)}
              {renderUserInfo('Phone', user.MobileNumber)}
              {renderUserInfo('Email', user.EmailId)}
            </div>
            <div className="column">
              <h3>Demographics</h3>
              {renderUserInfo('Age', user.Age)}
              {renderUserInfo('Gender', user.Gender)}
              {renderUserInfo('Blood Type', user.BloodGroup)}
              {renderUserInfo('Height', `${user.height} cm`)}
              {renderUserInfo('Weight', `${user.weight} kg`)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
