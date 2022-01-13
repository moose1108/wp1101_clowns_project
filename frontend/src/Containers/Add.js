import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Tabs, Button, Space, Input, Typography } from 'antd';
import '../Css/Add.css';

const { TabPane } = Tabs;
const { Search } = Input;
const { Title } = Typography;

const Add = () => {
    const [Textfield, setTextfield] = useState(0);
    const [Textmessage, setTextmessage] = useState('');
    const [Category, setCategory] = useState("");
    let navigate = useNavigate();


    const handleMoney = (value) => {
        console.log(value);
        navigate("/calendar");
    }
    const handleTextfield = (event) => {
        setTextfield(1);
        console.log(event.target.innerText);
        setCategory(event.target.innerText);
    }
    
    const outcome = ["飲�??", "交�??", "??�常??��??", "???�?", "??�話網路", "水�?��?��??", "�?�?", "??????", "�????", "�????"]
    const income = ["工�??", "??????", "??�票", "彩�??"]

    return (
        <Tabs defaultActiveKey="1" centered onTabClick={() => setTextfield(0)}>
            <TabPane tab="??��??" key="1" >
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
                        <Title style={{ marginBottom: '10px' }}>{Category}</Title>
                        <Input placeholder="???�?"
                            allowClear
                            size="large"
                            style={{ width: '60%', marginTop: '20px' }}
                            value={Textmessage}
                            onChange={(e) => setTextmessage(e.target.value)}
                        />
                        <Search
                            placeholder="�?輸�?��??�?"
                            allowClear
                            enterButton="確�??"
                            size="large"
                            style={{ width: '50%', marginTop: '20px' }}
                            onSearch={handleMoney}
                        />
                    </>) : (<></>)
                    }
                </div>
            </TabPane>
            <TabPane tab="??��??" key="2" align='center'>
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
                        <Title >{Category}</Title>
                        <Input placeholder="???�?"
                            allowClear
                            size="large"
                            style={{ width: '60%', marginTop: '20px' }}
                            value={Textmessage}
                            onChange={(e) => setTextmessage(e.target.value)}
                        />
                        <Search
                            placeholder="�?輸�?��??�?"
                            allowClear
                            enterButton="確�??"
                            size="large"
                            style={{ width: '50%', marginTop: '20px' }}
                            onSearch={handleMoney}
                        />
                    </>) : (<></>)
                    }
                </div>
            </TabPane>
        </Tabs>
    )
};

export default Add;