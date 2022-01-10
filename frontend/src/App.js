import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, Navigate, NavLink } from "react-router-dom";
import MyCalendar from './Containers/MyCalendar';
import Add from './Containers/Add';
import { Layout, Menu } from 'antd';
import {
  BarChartOutlined,
  SettingOutlined,
  EnvironmentOutlined,
  InsertRowAboveOutlined,
  DollarOutlined,
  ScheduleOutlined
} from '@ant-design/icons';
import "./Css/Menu.css"
const { Header, Content, Footer, Sider } = Layout;


function App() {
  // const [login, setLogin] = useState(false);

  // if (login) 
  // {
  return (
    <div>
      <Layout>
        <Sider style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }}>
          <Menu theme="dark" mode="inline">
            <Menu.Item key='1' style={{ height: '100px', fontSize: '40px', margin: '0px', background: '#971d1d' }}>
              <NavLink to="/add" />
              +
            </Menu.Item>
            <Menu.Item key='2' style={{ height: '60px', fontSize: '20px', marginTop: '0px' }} icon={<InsertRowAboveOutlined style={{ fontSize: '110%' }} />}>
              <NavLink to="/calendar" />
              行事曆
            </Menu.Item>
            <Menu.Item key='3' style={{ height: '60px', fontSize: '20px' }} icon={<BarChartOutlined style={{ fontSize: '110%' }} />}>
              <NavLink to="/graph" />
              圖表
            </Menu.Item>
            <Menu.Item key='4' style={{ height: '60px', fontSize: '20px' }} icon={<DollarOutlined style={{ fontSize: '110%' }} />}>
              <NavLink to="/property" />
              資產
            </Menu.Item>
            <Menu.Item key='5' style={{ height: '60px', fontSize: '20px' }} icon={<EnvironmentOutlined style={{ fontSize: '110%' }} />}>
              <NavLink to="/map" />
              地圖
            </Menu.Item>
            <Menu.Item key='6' style={{ height: '60px', fontSize: '20px' }} icon={<ScheduleOutlined style={{ fontSize: '110%' }} />}>
              <NavLink to="/budget" />
              預算
            </Menu.Item>
            <Menu.Item key='7' style={{ height: '60px', fontSize: '20px' }} icon={<SettingOutlined style={{ fontSize: '110%' }} />}>
              <NavLink to="/setting" />
              設定
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ marginLeft: 200 }}>
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <Routes>
              <Route exact path="/calendar" element={<MyCalendar />} />
              <Route exact path="/add" element={<Add />} />
              <Route path="/" element={<Navigate replace to="/calendar" />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </div>
  )
  // }
  // else{
  //   return(

  //   )
  // }
}

export default App;
