import styled from "styled-components";
import { Layout, Menu } from 'antd';
import {
    BarChartOutlined,
    SettingOutlined,
    EnvironmentOutlined,
    InsertRowAboveOutlined,
    DollarOutlined,
    ScheduleOutlined
} from '@ant-design/icons';
import MyCalendar from "./MyCalendar";

const { Header, Content, Footer, Sider } = Layout;


const Home = () => {
    return (
        <Layout>
            <Sider style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
            }}>
                <Menu theme="dark" mode="inline">
                    <Menu.Item style={{ height: '100px', fontSize: '40px', margin: '0px', background: '#FFB326' }}>
                        +
                    </Menu.Item>
                    <Menu.Item style={{ height: '60px', fontSize: '20px', marginTop: '0px' }} icon={<InsertRowAboveOutlined style={{ fontSize: '110%' }} />}>
                        行事曆
                    </Menu.Item>
                    <Menu.Item style={{ height: '60px', fontSize: '20px' }} icon={<BarChartOutlined style={{ fontSize: '110%' }} />}>
                        圖表
                    </Menu.Item>
                    <Menu.Item style={{ height: '60px', fontSize: '20px' }} icon={<DollarOutlined style={{ fontSize: '110%' }} />}>
                        資產
                    </Menu.Item>
                    <Menu.Item style={{ height: '60px', fontSize: '20px' }} icon={<EnvironmentOutlined style={{ fontSize: '110%' }} />}>
                        地圖
                    </Menu.Item>
                    <Menu.Item style={{ height: '60px', fontSize: '20px' }} icon={<ScheduleOutlined style={{ fontSize: '110%' }} />}>
                        預算
                    </Menu.Item>
                    <Menu.Item style={{ height: '60px', fontSize: '20px' }} icon={<SettingOutlined style={{ fontSize: '110%' }} />}>
                        設定
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout >
                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                    <MyCalendar />
                </Content>
            </Layout>
        </Layout >
    )
}

export default Home;