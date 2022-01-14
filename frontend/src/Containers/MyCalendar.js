import React, { useEffect, useState } from "react";
import { Button, Modal, Calendar, Badge } from "antd";
import axios from '../axios.js'
import { set } from "date-fns";
import moment from "moment";
import "../Css/MyCalendar.css";


const MyCalendar = ({username}) => {

  const [ModalVisible, setModalVisible] = useState(false);
  const [SelectDate, setSelectDate] = useState("");
  const [curRecord, setCurrentRecord] = useState([]);
  const [GridMode, setGridMode] = useState("month");


  const getData = async () => {
    const { data: { records } } = await axios.get('/api/GetUserInformation', {
      params: {
        username,
      },
    });
    setCurrentRecord(records);
    //console.log(curRecord);
  }

  useEffect(()=>{
    getData()
  },[])
  function onPanelChange(mode) {
    if (mode === "year")
      setGridMode("year");
    else
      setGridMode("month");
    console.log(curRecord);
  }


  function onChange(value) {
    const DATE = value.format('YYYY-MM-DD');
    setSelectDate(DATE);

  }

  const showModal = () => {
    if (GridMode === "month")
      setModalVisible(true);
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
        {curRecord.filter((x) => { return x.date === eachDate }).length === 0 ?
          '' :
          curRecord.filter((x) => { return x.date === eachDate }).reduce((sum, item) => sum + item.cost, 0)
        }
      </>
    )
  };

  const Model = () => {
    return (
      <>
        <Modal
          title={SelectDate}
          visible={ModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          {curRecord.filter((x) => { return x.date === SelectDate }).length === 0 ?
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

  useEffect(() => {

  })

  return (
    <>
      <Calendar
        onPanelChange={onPanelChange}
        dateCellRender={dateCellRender}
        onSelect={showModal}
        onChange={onChange}
      />

      {ModalVisible ? Model() : ''}
    </>

  );
}
export default MyCalendar;