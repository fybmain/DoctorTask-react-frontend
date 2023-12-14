import React, { useState } from 'react';
import { Select } from 'antd';
import { readLoginData } from '../../loginData';
import { getPatients } from '../../api/calendar';

const PatientSelector = (props) => {
  const loginData = readLoginData();

  const onChange = (value) => {
    console.log(`selected ${value}`);
    props.onChange(value);
  };

  const onSearch = (value) => {
    //console.log('search:', value);
  };

  const filterOption = (input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  const [ needLoad, setNeedLoad ] = useState(true);
  const [ loading, setLoading ] = useState(true);
  const [ data, setData ] = useState([]);

  const loadData = async () => {
    const result = await getPatients(loginData);
    setData(result.map(record => ({ value: record.id, label: record.name })));
    setLoading(false);
  };

  if(needLoad){
    setNeedLoad(false);
    loadData();
  }

  return (
    <Select
      showSearch
      placeholder="Select a patient"
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
      filterOption={filterOption}
      options={data}
      loading={loading}
      value={props.value}
      status={((!props.value) ? 'error' : undefined)}
    />
  );
};

export default PatientSelector;
