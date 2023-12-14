import moment from 'moment';
import React, { useState } from 'react';

const dateFormat = 'YYYY-MM-DD HH:mm:ss';

const CreateAvailableTimeSegments = (props) => {
  const onStart = (e) => {
    props.onChange({ start: e.target.value });
  };
  const onEnd = (e) => {
    props.onChange({ end: e.target.value });
  };
  const onDescription = (e) => {
    props.onChange({ description: e.target.value });
  };
  
  return <>
    <form>
      <label for="doctor">Doctor:</label><br/>
      <input type="text" id="doctor" name="doctor" value={props.doctor} disabled/><br/>
      <label for="start">Start:</label><br/>
      <input type="text" id="start" name="start" value={props.start} onChange={onStart}/><br/>
      <label for="end">End:</label><br/>
      <input type="text" id="end" name="end" value={props.end} onChange={onEnd}/><br/>
      <label for="description">Descrption:</label><br/>
      <input type="text" id="description" name="description" value={props.description} onChange={onDescription}/><br/>
    </form>
  </>;
};

export default CreateAvailableTimeSegments;
