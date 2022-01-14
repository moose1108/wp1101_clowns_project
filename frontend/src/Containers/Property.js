import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Tabs, Button, Space, Input, Typography, message, DatePicker, Modal } from 'antd';
import axios from '../axios.js'
import moment from "moment";

const { Title, Text } = Typography;

const Property = ({ username }) => {

    const [TotalIncome, setTotalIncome] = useState(0);
    const [TotalOutcome, setTotalOutcome] = useState(0);
    const [Test, setTest] = useState([]);
    const Date = moment();
    const date = Date.format('YYYY-MM');

    const getData = async () => {
        const { data: { records } } = await axios.get('/api/GetUserInformation', { // get backend
            params: {
                username, // give backend
            },
        });
        setTest(records);
    }
    useEffect(() => {
        getData();
    }, [])
    console.log(Test);

    
    return (
        <>
            <div style={{ marginTop: '15%' }}></div>
            <Title>$</Title>
            <Title >淨資產</Title>
            <Space size={[100, 20]} wrap align='center'>
                <div>
                    <div>
                        <Title level={2}>$</Title>
                    </div>
                    <Title level={2}>總支出</Title>
                </div>
                <div>
                    <div>
                        <Title level={2}>$</Title>
                    </div>
                    <Title level={2}>總收入</Title>
                </div>
                <div>
                    <div>
                        <Title level={2}>$</Title>
                    </div>
                    <Title level={2}>月收支</Title>
                </div>
            </Space>
        </>
    )
}

export default Property;