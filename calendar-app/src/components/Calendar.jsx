import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import CalendarHeader from "./CalendarHeader";
import CalendarGrid from "./CalendarGrid";
import events from "../data/events.json";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [eventList, setEventList] = useState([]);
  const today = dayjs();

  useEffect(() => {
    setEventList(events);
  }, []);

  const nextMonth = () => setCurrentDate(currentDate.add(1, "month"));
  const prevMonth = () => setCurrentDate(currentDate.subtract(1, "month"));

  return (
    <div>
      <CalendarHeader date={currentDate} onNext={nextMonth} onPrev={prevMonth} />
      <CalendarGrid date={currentDate} today={today} events={eventList} />
    </div>
  );
};

export default Calendar;
