
//src/redux/actions/userActions.js
// import axios from 'axios';

// export const fetchUsers = () => async (dispatch) => {
//   try {
//     const response = await axios.get('http://localhost:8080/api/users'); // Replace with your API endpoint
//     dispatch({ type: 'FETCH_USERS', payload: response.data });
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// };


// export const fetchPatientRegistration = () => async (dispatch) => {
//   try {
//     const response = await axios.get('http://localhost:8080/api/users/patients'); // Replace with your actual backend API endpoint
//     dispatch({ type: 'FETCH_PATIENT_REGISTRATION_SUCCESS', payload: response.data });
//   } catch (error) {
//     console.error('Error fetching patient registration:', error);
//     dispatch({ type: 'FETCH_PATIENT_REGISTRATION_FAILURE' });
//   }
// };



// src/redux/actions/userActions.js
import axios from 'axios';
import { BASE_URL } from '../../api';

export const fetchUsers = () => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/users`);
    dispatch({ type: 'FETCH_USERS', payload: response.data });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const fetchPatientRegistration = () => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/users/patients`);
    dispatch({ type: 'FETCH_PATIENT_REGISTRATION_SUCCESS', payload: response.data });
  } catch (error) {
    console.error('Error fetching patient registration:', error);
    dispatch({ type: 'FETCH_PATIENT_REGISTRATION_FAILURE' });
  }
};

export const doctorLogin = (username, password) => async (dispatch) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/users/doctor/login`, {
      Username: username,
      Password: password,
    });
    console.log("res",response);
    dispatch({ type: 'USER_LOGIN', payload: response.data });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const patientLogin = (username, password) => async (dispatch) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/users/patient/login`, {
      Username: username,
      Password: password,
    });
    console.log("res",response);
    dispatch({ type: 'USER_LOGIN', payload: response.data });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
