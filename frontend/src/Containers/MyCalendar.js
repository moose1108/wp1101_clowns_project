import React, { useEffect, useState } from "react";
import { Button, Modal, Calendar, Badge } from "antd";
import axios from '../axios.js'
import { set } from "date-fns";
import moment from "moment";
import "../Css/MyCalendar.css";

const MyCalendar = ({ username }) => {
  const [ModalVisible, setModalVisible] = useState(false);
  const [SelectDate, setSelectDate] = useState("");
  const [curRecord, setCurrentRecord] = useState([]);
  const [GridMode, setGridMode] = useState("month");
  const Get_data = async () => {
    const { data: { records } } = await axios.get('/api/GetUserInformation', {
        params: {
          username,
      },
    });
    setCurrentRecord(records);
    console.log(records);
  }
  useEffect(()=>{
    Get_data();
  },[]);
  function onPanelChange(value, mode) {
    console.log(mode);
    if (mode === "year")
      setGridMode("year");
    else
      setGridMode("month");
  }
 
  const showModal = (value) => {
    if (GridMode === "month"){
      const DATE = value.format('YYYY-MM-DD');
      setSelectDate(DATE);
      console.log(SelectDate);
      setModalVisible(true);
    }
  };

  const handleOk = () => {
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  const dateCellRender = (value) => {
    const eachDate = value.format('YYYY-MM-DD');
    return (
      <>
        {curRecord.filter((x) => 
        { return x.date === eachDate }).length === 0 ? 
        '' : 
        curRecord.filter((x) => 
        { return x.date === eachDate }).reduce((sum, item) => sum + item.cost, 0)
        }
      </>
    )
  };
  
  const Model = () => {
    return(
      <>
        <Modal 
          title={SelectDate} 
          visible={ModalVisible} 
          onOk={handleOk} 
          onCancel={handleCancel}
        >
          {curRecord.filter((x) => 
          { return x.date === SelectDate }).length === 0 ? 
          '' : 
          curRecord.filter((x) => { return x.date === SelectDate }).map(item => (
            <li>
                <Badge status={item.status} text={item.content + " : " + item.cost + "元"} />
            </li>
          ))
          }
        </Modal>
      </>
    )
  } 

  return (
    <>
      <Calendar
        onPanelChange={onPanelChange}
        dateCellRender={dateCellRender}
        onSelect={showModal}
      />
      <Model />
      {/* {ModalVisible ? Model() : ''} */}
    </>

  );
}
export default MyCalendar;
