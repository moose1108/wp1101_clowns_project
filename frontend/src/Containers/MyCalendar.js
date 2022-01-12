//import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Button, Input, Calendar, Badge } from "antd";
import moment from "moment";
import { tr } from "date-fns/locale";

// const localizer = momentLocalizer(moment);


const MyCalendar = () => {
    const dateCellRender = (value) => {
        function getListData(value) {
            let listData;
            switch (value.date()) {
              case 8:
                listData = [
                  { type: 'warning', content: 'This is warning event.' },
                  { type: 'success', content: 'This is usual event.' },
                ];
                break;
              case 10:
                listData = [
                  { type: 'warning', content: 'This is warning event.' },
                  { type: 'success', content: 'This is usual event.' },
                  { type: 'error', content: 'This is error event.' },
                ];
                break;
              case 15:
                listData = [
                  { type: 'warning', content: 'This is warning event' },
                  { type: 'success', content: 'This is very long usual event。。....' },
                  { type: 'error', content: 'This is error event 1.' },
                  { type: 'error', content: 'This is error event 2.' },
                  { type: 'error', content: 'This is error event 3.' },
                  { type: 'error', content: 'This is error event 4.' },
                ];
                break;
              default:
            }
            return listData || [];
        }
        const listData = getListData(value);
        return (
          <ul className="events">
            {listData.map(item => (
              <li key={item.content}>
                <Badge status={item.type} text={item.content} />
              </li>
            ))}
          </ul>
        );
    }
    /*function getMonthData(value) {
        if (value.month() === 8) {
          return 1394;
        }
    }
    const monthCellRender = (value) => {
        const num = getMonthData(value);
        return num ? (
          <div className="notes-month">
            <section>{num}</section>
            <span>Backlog number</span>
          </div>
        ) : null;
    }*/
    return (
        <>
            <Calendar 
                onChange={(value) => {
                    alert(`Your selected ${value.format('YYYY-MM-DD')}`)
                }}
                dateCellRender={dateCellRender}
            />
        </>
        
    );
}
export default MyCalendar;