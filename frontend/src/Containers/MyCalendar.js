import React, { useEffect, useState } from "react";
import { Button, Modal, Calendar, Badge, Typography, Tabs, Table } from "antd";
import axios from '../axios.js'
import moment from "moment";
import "../Css/MyCalendar.css";
import { css } from "@emotion/react";
import RingLoader from 'react-spinners/RingLoader'
const { Title, Text } = Typography;
const { TabPane } = Tabs;

const columns = [
    {
      title: '類別',
      dataIndex: 'type',
    },{
      title: '金額',
      dataIndex: 'cost',
    },{
      title: '備註',
      dataIndex: 'content',
    },
    {
      title: '',
      dataIndex: '',
      key: 'x',
      render: () => <Button size="small">delete</Button>,
    },
];
const override = css`
  display: flex;
  border-color: green;
`;
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

  const column = () => {
    let position = {};
    let templabels = [];
    for (let i = 0;i < curRecord.length;i++){
        let Type = curRecord[i].type
        if(templabels.indexOf(Type) === -1){
          templabels.push(Type);
          position.Type = templabels.size - 1;
        }
    }
    return templabels;
  };
  
  function createTable(status){
    let arr = curRecord.filter((x) => 
        { return x.date === SelectDate && x.status === status }).length === 0 ? 
        '' : 
        curRecord.filter((x) => 
          { return x.date === SelectDate && x.status === status });
    console.log(arr);
    return arr;
  }

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
              <Table dataSource={createTable("支出")} columns={columns}/>
            </TabPane>
            <TabPane tab="收入" key="收入">
            <Table dataSource={createTable("收入")} columns={columns}/>
            </TabPane>
          </Tabs>
        </Modal>
      </>
    )
  }
  const [loading, setLoading] = useState(true)
    useEffect(()=>{
        const loadData = async () => {
          await new Promise((r) => setTimeout(r, 1000))
          setLoading((loading) => !loading)
        }
        loadData()
  }, [])
  return loading?(
    <div style={{position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
    <RingLoader color="green" css={override} size={100}/>
    </div>) :(
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
