import Chart from 'react-apexcharts'
import React from 'react';
import { Tabs, Button, Space, Input, Typography, message, DatePicker } from 'antd';
import moment from "moment";
import '../Css/PieGraph.css'

const { TabPane } = Tabs;
const { Search } = Input;
const { Title } = Typography;

const Graph = () => {
    var options = {
        series: [44, 55, 13, 43, 22],
        width: 380,
        type: 'pie',
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        breakpoint: 480,
        options: {
            chart: {
                width: 20
            },
            legend: {
                position: 'bottom'
            }
        }
    };
    return (
        <Tabs defaultActiveKey="支出" centered >
            <TabPane tab="支出" key="支出">
                <div className='pie'>
                    <Chart options={options.options} type='pie' labels={options.labels} series={options.series} width="500" height='1000' />
                </div>
            </TabPane>
            <TabPane tab="收入" key="收入">
                <div className='pie'>
                    <Chart options={options.options} type='pie' labels={options.labels} series={options.series} width="500" height='1000' />
                </div>
            </TabPane>
        </Tabs>
    )
}
export default Graph