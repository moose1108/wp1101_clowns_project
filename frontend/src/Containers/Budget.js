import React, { useState, useEffect } from 'react';
import { DatePicker } from 'antd';
import moment from "moment";

const Budget = ({ username }) => {

  const [Date, setDate] = useState(moment());

  return (
      <>
        <DatePicker 
          size="large" 
          defaultValue={Date} 
          picker="month" 
          onChange={(date)=>
            {setDate(date)}} 
          allowClear={false}
        />
      </>
  )
  ;
};

export default Budget;
