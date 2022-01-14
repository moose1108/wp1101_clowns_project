import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, Navigate, NavLink, useNavigate } from "react-router-dom";
import MyCalendar from './Containers/MyCalendar';
import Add from './Containers/Add';
import Signin from './Containers/Sign_in';
import Graph from './Containers/PieChart';
import { Layout, Menu } from 'antd';
import {
  BarChartOutlined,
  SettingOutlined,
  EnvironmentOutlined,
  InsertRowAboveOutlined,
  DollarOutlined,
  ScheduleOutlined,
  ImportOutlined
} from '@ant-design/icons';
import "./Css/Menu.css"
import { set } from 'date-fns';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const LOCALSTORAGE_KEY = "";
const LOCALSTORAGE_KEY2 = false;
function App() {
  const savedUsername = localStorage.getItem(LOCALSTORAGE_KEY);
  const savedLogin = localStorage.getItem(LOCALSTORAGE_KEY2);
  const [login, setLogin] = useState(false);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState(savedUsername || "");
  const [confirmpassword, setConfirmpassword] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    if (login) {
      localStorage.setItem(LOCALSTORAGE_KEY, username);
      localStorage.setItem(LOCALSTORAGE_KEY2, login);
    }
    navigate("/");
  }, [login, username]);

  // useEffect(() => {
  //   // console.log(login);
  //   // console.log(savedLogin);
  //   if (login === false)
  //     navigate("/signin");
  //   else
  //     navigate("/calendar")
  // }, [login]);

  const handleLogout = () => {
    localStorage.setItem(LOCALSTORAGE_KEY, "");
    localStorage.setItem(LOCALSTORAGE_KEY2, false)
    setUsername("");
    setPassword("");
    setConfirmpassword("");
    setLogin(false);
  }
  if (login) {
    return (
      <div>
        <Layout>
          <Sider style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
          }}>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['2']}>
              <Menu.Item key='1' style={{ height: '100px', fontSize: '40px', margin: '0px', background: '#971d1d' }}>
                <NavLink to="/add" />
                +
              </Menu.Item>
              <Menu.Item key='2' style={{ height: '60px', fontSize: '20px', marginTop: '0px' }} icon={<InsertRowAboveOutlined style={{ fontSize: '110%' }} />}>
                <NavLink to="/" />
                日曆
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
              <SubMenu key="sub1" title="登出" style={{ height: '60px', fontSize: '20px' }} icon={<ImportOutlined style={{ fontSize: '110%' }} />}>
                <Menu.Item key="登出" onClick={() => handleLogout()}>確認</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ marginLeft: 200 }}>
            <Content style={{ margin: '24px 16px 0', overflow: 'initial', textAlign: 'center' }}>
              <Routes>
                <Route exact path="/" element={<MyCalendar username={username} />} />
                <Route exact path="/add" element={<Add username={username} />} />
                <Route exact path="/graph" element={<Graph />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
  else {
    return (
      <div>
        <Routes>
          <Route exact path="/" element={<Signin Login={setLogin} password={password} username={username} confirmpassword={confirmpassword} setPassword={setPassword} setConfirmpassword={setConfirmpassword} setUsername={setUsername} />} />
        </Routes>
      </div>
    );
  }
}

export default App;
