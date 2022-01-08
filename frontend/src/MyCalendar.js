import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

const locales = {
    "en-US" : require("date-fns/locale/en-US")
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
})

const events = [
    {
        title: "Big-meeting",
        allDay: true,
        start: new Date(2022, 1, 2),
        end: new Date(2022, 1, 4)
    },
    {
        title: "Vacation",
        allDay: true,
        start: new Date(2021, 12, 30),
        end: new Date(2022, 1, 3)
    },
    {
        title: "Conference",
        allDay: true,
        start: new Date(2022, 1, 30),
        end: new Date(2022, 1, 30)
    }
]

const MyCalendar = () => {
    const [newEvent, setNewEvent] = useState()
    return (
        <Calendar 
            localizer={localizer} 
            events={events} 
            startAccessor="start" 
            endAccessor="end"
            style={{height: 500, margin: "5px"}}
        />
    )
}

export default MyCalendar;