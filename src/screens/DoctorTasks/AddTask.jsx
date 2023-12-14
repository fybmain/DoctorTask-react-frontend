import React, { useState } from "react";
import axios from "axios";
import { Input, Modal, Radio } from "antd";
import moment from 'moment';
import { BASE_URL } from '../../constants';
import PatientSelector from "./PatientSelector";

const dateFormat = 'YYYY-MM-DD HH:mm:ss';

export const createTask = (doctor, state) => {
  axios
    .post(`${BASE_URL}/api/users/tasks/add`, {
      Doctor: doctor,
      Patient: state.patient,
      Start: new Date(state.start).toISOString(),
      End: new Date(state.end).toISOString(),
      Description: state.description,
    })
    .then((response) => {
      Modal.success({ content: "Task added successfully!" });
    })
    .catch((error) => {
      console.error(error);
    });
};

const AddTask = (props) => {
  const onStart = (e) => {
    props.onChange({ start: e.target.value });
  };
  const onEnd = (e) => {
    props.onChange({ end: e.target.value });
  };
  const onPatient = (e) => {
    props.onChange({ patient: e });
  };
  const onDescription = (e) => {
    props.onChange({ description: e.target.value });
  };

  return <>
    <form>
      <label for="doctor">Doctor:</label><br/>
      <input type="text" id="doctor" name="doctor" value={props.doctor} disabled/><br/>
      <label for="patient">Patient:</label><br/>
      <PatientSelector value={props.patient} onChange={onPatient}/><br/>
      <label for="start">Start:</label><br/>
      <input type="text" id="start" name="start" value={props.start} onChange={onStart}/><br/>
      <label for="end">End:</label><br/>
      <input type="text" id="end" name="end" value={props.end} onChange={onEnd}/><br/>
      <label for="description">Descrption:</label><br/>
      <Input.TextArea
        id="description"
        name="description"
        placeholder="Description"
        value={props.description}
        onChange={onDescription}
        autoSize={{ minRows: 3 }}
      /><br/>
    </form>
  </>;
};

export default AddTask;
