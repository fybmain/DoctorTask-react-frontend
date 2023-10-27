// src/reducers/userReducer.js
const initialState = {
  login: {},
  users: [],
  patientRegistrationData: [], // New state to store patient registration data
};

const userReducer = (state = initialState, action) => {
  console.log("action: ", action);
  switch (action.type) {
    case 'USER_LOGIN':
      console.log("action: ", action);
      console.log("updated: ", { ...state, login: action.payload, users: ["1"] });
      return { ...state, login: action.payload };
    case 'FETCH_USERS':
      return { ...state, users: action.payload };
    case 'FETCH_PATIENT_REGISTRATION_SUCCESS':
      return { ...state, patientRegistrationData: action.payload };
    case 'FETCH_PATIENT_REGISTRATION_FAILURE':
      return { ...state, patientRegistrationData: [] }; // Handle failure by clearing the data
    default:
      return state;
  }
};

export default userReducer;
