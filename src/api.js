import axios from 'axios';

export const BASE_URL = 'http://localhost:8080'; // Update with your Heroku app URL

export const doctorLogin = async (username, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/users/doctor/login`, {
      Username: username,
      Password: password,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const patientLogin = async (username, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/users/patient/login`, {
      Username: username,
      Password: password,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const doctorGetAvailableTimeSegments = async (token, start, end) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/appointments/doctor/get_available_time_segments`, {
      token: token,
      Start: start.toISOString(),
      End: end.toISOString(),
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
