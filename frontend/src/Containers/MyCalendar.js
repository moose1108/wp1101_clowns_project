import React, { useState } from "react";
import { Button, Modal, Calendar, Badge, List, DatePicker } from "antd";
import moment from "moment";
import { tr } from "date-fns/locale";


const listData = [
  {
    date: "2022-01-07", data: [
      { status: 'success', type: '飲食', content: '國瀚咖哩', cost: 150 },
      { status: 'success', type: '交通', content: '腳踏車拖吊', cost: 50 },
    ]
  },
  {
    date: "2022-01-09", data: [
      { status: 'success', type: '教育', content: 'SP課本', cost: 1300 },
      { status: 'success', type: '日常用品', content: '學生證不見', cost: 100 },
    ]
  }
];




const MyCalendar = () => {

  const [currDate, setCurrDate] = useState(moment());
  const [month, setMonth] = useState(moment().month() + 1);
  const [ModalVisible, setModalVisible] = useState(false);
  const [SelectDate, setSelectDate] = useState("");
  const [AllData, setAllData] = useState(listData);
  const [listOfRefsByDate, setListOfRefsByDate] = useState({});

  function calculate() {
    let cost = 0;
    for (let i = 0; i < listData.length; i++)
      cost += listData[i].cost;
    return cost;
  }

  function onPanelChange(value, mode) {
    const DATE = value.format('YYYY-MM-DD');
    setSelectDate(DATE);
    console.log(DATE);
  }

  const showModal = () => {
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
        {listData.filter((x) => { return x.date === eachDate }).length === 0 ?
          '' : listData.filter((x) => { return x.date === eachDate })[0].data.map(item => item.cost).reduce((prev, curr) => prev + curr, 0)
        }</>
    )
  }
  return (
    <>
      <Calendar
        defaultDate={moment().toDate()}
        onChange={onPanelChange}
        dateCellRender={dateCellRender}
        onSelect={showModal}
      />
      <Modal title={SelectDate} visible={ModalVisible} onOk={handleOk} onCancel={handleCancel}>

        {(listData.filter((x) => { return x.date === SelectDate }).length === 0 ?
          '' : listData.filter((x) => { return x.date === SelectDate })[0].data.map(item => (
            <li>
              <Badge status={item.status} text={item.content + " : " + item.cost + "元"} />
            </li>
          )))

        }

      </Modal>
    </>

  );
}
export default MyCalendar;