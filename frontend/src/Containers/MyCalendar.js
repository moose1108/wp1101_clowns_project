import React, { useEffect, useState } from "react";
import { Button, Modal, Calendar, Badge, Typography, Tabs } from "antd";
import axios from '../axios.js'
import moment from "moment";
import "../Css/MyCalendar.css";

const { Title, Text } = Typography;
const { TabPane } = Tabs;

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
  useEffect(() => {
    Get_data();
  }, []);
  function onPanelChange(value, mode) {
    console.log(mode);
    if (mode === "year")
      setGridMode("year");
    else
      setGridMode("month");
  }

  const showModal = (value) => {
    if (GridMode === "month") {
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
        <Text type="danger" strong={true}>
          {curRecord.filter((x) => { return x.date === eachDate }).length === 0 ? '' : "支出: "}
        </Text>
        <Text type="danger" strong={true}>
          {curRecord.filter((x) => { return x.date === eachDate }).length === 0 ?
            '' : curRecord.filter((x) => { return (x.date === eachDate && x.status === "支出") }).reduce((sum, item) =>
              sum + item.cost, 0)
          }
        </Text>
        <br></br>
        <Text type="success" strong={true}>
          {curRecord.filter((x) => { return x.date === eachDate }).length === 0 ? '' : "收入: "}
        </Text>
        <Text type="success" strong={true}>
          {curRecord.filter((x) => { return x.date === eachDate }).length === 0 ?
            '' : curRecord.filter((x) => { return (x.date === eachDate && x.status === "收入") }).reduce((sum, item) =>
              sum + item.cost, 0)
          }
        </Text>
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
          <Tabs defaultActiveKey="支出" centered >
            <TabPane tab="支出" key="支出">
              {/* {curRecord.filter((x) => { return x.date === SelectDate && x.status === "支出" }).length === 0 ? '' : "支出: "
              } */}
              {curRecord.filter((x) => { return x.date === SelectDate && x.status === "支出" }).length === 0 ?
                '' :
                curRecord.filter((x) => { return x.date === SelectDate && x.status === "支出" }).map(item => (
                  <li>
                    <Badge status={"warning"} text={item.type + " : " + item.content + " : " + item.cost + "元"} />
                  </li>
                ))
              }
            </TabPane>
            <TabPane tab="收入" key="收入">
              {/* {curRecord.filter((x) => { return x.date === SelectDate && x.status === "收入" }).length === 0 ? '' : "收入: "
              } */}
              {curRecord.filter((x) => { return x.date === SelectDate && x.status === "收入" }).length === 0 ?
                '' :
                curRecord.filter((x) => { return x.date === SelectDate && x.status === "收入" }).map(item => (
                  <li>
                    <Badge status={"success"} text={item.type + " : " + item.content + " : " + item.cost + "元"} />
                  </li>
                ))
              }
            </TabPane>
          </Tabs>
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
      {ModalVisible ? Model() : ''}
    </>

  );
}
export default MyCalendar;
