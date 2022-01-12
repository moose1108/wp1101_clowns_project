import React, { useState, useEffect, useRef } from 'react';
import { Tabs, Button, Space } from 'antd';
import '../Css/Add.css';
const { TabPane } = Tabs;


const Add = () => {

    const [Textfield, setTextfield] = useState(0);
    const outcome = ["飲食", "交通", "日常用品", "服飾", "電話網路", "水電瓦斯", "娛樂", "教育", "保險", "稅金"]
    const income = ["工資", "獎金", "股票", "彩券"]
    useEffect(() => {
        console.log(Textfield);
    }, [Textfield]);
    return (
        <Tabs defaultActiveKey="1" centered onTabClick={() => setTextfield(0)}>
            <TabPane tab="支出" key="1" >
                <Space size={[20, 20]} wrap align='center'>
                    {new Array(10).fill(null).map((_, index) => (
                        <Button shape='round' key={index} style={{ height: '75px', width: '75px', padding: '4px 4px' }}
                            onClick={() => setTextfield(1)}
                        >{outcome[index]}
                        </Button>
                    ))}
                </Space>
                
            </TabPane>
            <TabPane tab="收入" key="2" align='center'>
                <Space size={[20, 20]} wrap align='center'>
                    {new Array(4).fill(null).map((_, index) => (
                        <Button shape='round' key={index} style={{ height: '75px', width: '75px', padding: '4px 4px' }}
                            onClick={() => setTextfield(1)}
                        >{income[index]}
                        </Button>
                    ))}
                </Space>
            </TabPane>
        </Tabs>
    )
};

export default Add;