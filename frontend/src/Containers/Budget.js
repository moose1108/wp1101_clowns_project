import React, { useState, useEffect } from 'react';
import { DatePicker } from 'antd';
import moment from "moment";
import ReactApexChart from "react-apexcharts";
import axios from '../axios.js'

const options = {
    chart: { toolbar: { show: true }},
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 225,
         hollow: { 
           margin: 0, size: '70%', background: '#fff', image: undefined, 
           imageOffsetX: 0, imageOffsetY: 0, position: 'front',
           dropShadow: { enabled: true, top: 3, left: 0, blur: 4, opacity: 0.24 }
        },
        track: {
          background: '#fff',
          strokeWidth: '67%',
          margin: 0, // margin is in pixels
          dropShadow: { enabled: true, top: -3, left: 0, blur: 4, opacity: 0.35 }
        },
        dataLabels: {
          show: true,
          name: { offsetY: -10, show: true, color: '#888', fontSize: '17px'},
          value: {
            formatter: function(val) {
              return parseInt(val);
            },
            color: '#111',
            fontSize: '36px',
            show: true,
          }
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: ['#ABE5A1'],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      }
    },
    stroke: {
      lineCap: 'round'
    },
    labels: ['Percent'],
};

const Budget = ({ username }) => {
  const [Date, setDate] = useState(moment());
  const [labels,setLabels] = useState([]);
  const [series,setSeries] = useState([]);
  //const series = [[35], [56]];
  
  const Get_data = async () => {
    const YM =  Date.format("YYYY-MM")
    const { data: { records } } = await axios.get('/api/GetBudgetInformation', {
        params: {
          username,
          YM,
        },
      });
      return records;
      //console.log(records);
  }
  useEffect(()=>{
    Get_data();
  },[]);

  const HandleChange = async ()=>{
    setLabels([]);
    //setSeries([]);
    let position = {};
    let templabels = new Set();
    let tempseries = [];
    const curRecords = await Get_data();
    console.log(curRecords);
    for(let i = 0;i < curRecords.length;i++){   
        let Type = curRecords[i].type
        let cost = curRecords[i].cost
        if(!templabels.has(Type)){
            templabels.add(Type);
            position.Type = templabels.size - 1;
            tempseries.push(cost);
        }
        else{
            tempseries = tempseries.map((item,index)=>{
                if(index === position.Type) return item += cost
                else return item
            })
        }
    }
    setLabels(Array.from(templabels));
    setSeries([tempseries])
  }
  useEffect(() => {
      HandleChange();
  }, [Date]);

  return (
    <>
      <DatePicker 
        size="large" 
        defaultValue={Date} 
        picker="month" 
        onChange={(date)=>
          {setDate(date)}} 
        allowClear={false}
      />
      
      <ReactApexChart 
        options={options} 
        series={series[0]}
        type="radialBar" 
        height={200} 
        width={200}
      />
    </>
  )
};

export default Budget;
