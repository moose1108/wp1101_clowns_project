import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Tabs, Button, Space, Input, Typography, message } from 'antd';
import '../Css/Add.css';
import axios from '../axios.js'

const { TabPane } = Tabs;
const { Search } = Input;
const { Title } = Typography;

const Add = () => {
    const [Textfield, setTextfield] = useState(0);
    const [Content, setContent] = useState('');
    const [Type, setType] = useState("");
    const [Status, setStatus] = useState("支出");
    let navigate = useNavigate();


    const handleTab = (key) => {
        setTextfield(0);
        setStatus(key);
    }

    const handleCost = async (cost) => {
        // console.log(value);
        var r = /^[0-9]*[1-9][0-9]*$/;
        if (cost == "") {
            message.error({
                content: "請輸入數字"
            })
        }
        else if (r.test(cost)) {
            navigate("/calendar");
        }
        else {
            message.error({
                content: "請輸入數字"
            })
        }
    }
    const handleTextfield = (event) => {
        setTextfield(1);
        // console.log(event.target.innerText);
        setType(event.target.innerText);
    }

    const outcome = ["飲食", "交通", "日常用品", "服飾", "電話網路", "水電瓦斯", "娛樂", "教育", "保險", "稅金"]
    const income = ["工資", "獎金", "股票", "彩券"]

    return (
        <Tabs defaultActiveKey="支出" centered onTabClick={(key) => handleTab(key)}>
            <TabPane tab="支出" key="支出">
                <Space size={[20, 20]} wrap align='center'>
                    {new Array(10).fill(null).map((_, index) => (
                        <Button shape='round' key={index} style={{ height: '75px', width: '75px', padding: '4px 4px' }}
                            onClick={(event) => handleTextfield(event)}
                        >{outcome[index]}
                        </Button>
                    ))}
                </Space>
                <div style={{ margin: "5%" }}>
                    {Textfield ? (<>
                        <Title >2077/8/7</Title>
                        <Title style={{ marginBottom: '10px' }}>{Type}</Title>
                        <Input placeholder="備註"
                            allowClear
                            size="large"
                            style={{ width: '60%', marginTop: '20px' }}
                            value={Content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                        <Search
                            placeholder="�?輸�?��??�?"
                            allowClear
                            enterButton="確�??"
                            size="large"
                            style={{ width: '50%', marginTop: '20px' }}
                            onSearch={handleCost}
                        />
                    </>) : (<></>)
                    }
                </div>
            </TabPane>
            <TabPane tab="收入" key="收入">
                <Space size={[20, 20]} wrap align='center'>
                    {new Array(4).fill(null).map((_, index) => (
                        <Button shape='round' key={index} style={{ height: '75px', width: '75px', padding: '4px 4px' }}
                            onClick={(event) => handleTextfield(event)}
                        >{income[index]}
                        </Button>
                    ))}
                </Space>
                <div style={{ margin: "5%" }}>
                    {Textfield ? (<>
                        <Title >2077/8/7</Title>
                        <Title >{Type}</Title>
                        <Input placeholder="備註"
                            allowClear
                            size="large"
                            style={{ width: '60%', marginTop: '20px' }}
                            value={Content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                        <Search
                            placeholder="�?輸�?��??�?"
                            allowClear
                            enterButton="確�??"
                            size="large"
                            style={{ width: '50%', marginTop: '20px' }}
                            onSearch={handleCost}
                        />
                    </>) : (<></>)
                    }
                </div>
            </TabPane>
        </Tabs>
    )
};

export default Add;