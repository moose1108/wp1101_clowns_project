import React from 'react';
import { Tabs } from 'antd';
import '../Css/Add.css';
const { TabPane } = Tabs;


const Add = () => {
    return (
        <Tabs defaultActiveKey="1" centered>
            <TabPane tab="支出" key="1">
                Content of Tab Pane 1
            </TabPane>
            <TabPane tab="收入" key="2">
                Content of Tab Pane 2
            </TabPane>
        </Tabs>
    )
};

export default Add;