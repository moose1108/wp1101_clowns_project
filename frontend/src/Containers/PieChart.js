import Chart from 'react-apexcharts'
import React from 'react';
import '../Css/PieGraph.css'
const Graph = () =>{
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
        <div className='pie'>
        <Chart options = {options.options} type='pie' labels={options.labels} series={options.series} width="500" height='1000'/>
        </div>
    )
}
export default Graph