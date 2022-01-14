import Chart from 'react-apexcharts'
import React from 'react';
import { Tabs, Button, Space, Input, Typography, message, DatePicker } from 'antd';
import moment from "moment";
import '../Css/PieGraph.css'
import axios from '../axios'
import { useState,useEffect } from 'react';
const { TabPane } = Tabs;
const { Search } = Input;
const { Title } = Typography;

const Graph = ({username}) => {
    const [Date,setDate]=useState(moment())
    const [labels,setLabels] = useState([]);
    const [series,setSeries] = useState([]);
    const [status,setStatus] = useState("支出");
    const getdata = async ()=>{
        const YM =  Date.format("YYYY-MM")
        const { data: { NewRecords } } = await axios.get('/api/GetPieInformation', { // get backend
        params: {
            username, // give backend
            YM,
            status
        },
    })
    console.log(YM);
    return NewRecords;
    }
    const HandleChange = async ()=>{
        setLabels([]);
        setSeries([]);
        let position = {};
        let templabels = new Set();
        let tempseries = [];
        const NewRecords = await getdata();
        console.log(NewRecords)
        for(let i = 0;i < NewRecords.length;i++)
        {   
            let Type = NewRecords[i].type
            let cost = NewRecords[i].cost
            if(!templabels.has(Type))
            {
                templabels.add(Type);
                position.Type = templabels.size - 1;
                tempseries.push(cost);
            }
            else
            {
                tempseries = tempseries.map((item,index)=>{
                    if(index === position.Type) return item += cost
                    else return item
                })
            }
        }
        setLabels(Array.from(templabels));
        setSeries(tempseries)
    }
    useEffect(() => {
        HandleChange();
    }, [status,Date])
    var options = {
        legend: {
            position: 'bottom'
        },
        labels: labels
    };
    return (
        <Tabs defaultActiveKey="支出" centered onTabClick={(key) => setStatus(key)}>
            <TabPane tab="支出" key="支出">
            <DatePicker size = "large" value={Date} picker="month" onChange={(date)=>{setDate(date)}} allowClear={false}/>
                <div className='pie'>
                    {/*<Button  type='primary' onClick={()=>{HandleChange()}}> 確認 </Button>*/ }
                    <Chart options={options} type='pie'series={series} width="500" height='1000' />
                </div>
            </TabPane>
            <TabPane tab="收入" key="收入">
            <DatePicker size = "large" value={Date} picker="month" onChange={(date)=>{setDate(date)}} allowClear={false}/>
                <div className='pie'>
                    {/*<Button  type='primary' onClick={()=>{HandleChange()}}> 確認 </Button>*/} 
                    <Chart options={options} type='pie'series={series} width="500" height='1000' />
                </div>
            </TabPane>
        </Tabs>
    )
}
export default Graph