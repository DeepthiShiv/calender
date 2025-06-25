import React from "react";
import dayjs from "dayjs";
import EventItem from "./EventItem";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const CalendarGrid = ({ date, today, events }) => {
  const startOfMonth = date.startOf("month");
  const startDate = startOfMonth.startOf("week");

  const days = Array.from({ length: 42 }).map((_, idx) => {
    const day = startDate.add(idx, "day");
    const isToday = day.isSame(today, "day");
    const isCurrentMonth = day.month() === date.month();
    const dayEvents = events.filter(e => e.date === day.format("YYYY-MM-DD"));

    return (
      <div
        key={idx}
        className={`day-cell ${isToday ? "today" : ""} ${!isCurrentMonth ? "text-gray-400" : ""}`}
      >
        <div className="date-number">{day.date()}</div>
        {dayEvents.map(event => (
          <EventItem key={event.id} event={event} />
        ))}
      </div>
    );
  });

  return (
    <>
      <div className="calendar-grid" style={{ fontWeight: "bold", marginBottom: "8px", textAlign: "center" }}>
        {daysOfWeek.map(d => (
          <div key={d}>{d}</div>
        ))}
      </div>
      <div className="calendar-grid">{days}</div>
    </>
  );
};

export default CalendarGrid;
