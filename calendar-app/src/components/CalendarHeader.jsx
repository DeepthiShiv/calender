import React from "react";

const CalendarHeader = ({ date, onPrev, onNext }) => {
  return (
    <div className="calendar-header">
      <button onClick={onPrev}>Prev</button>
      <h2>{date.format("MMMM YYYY")}</h2>
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default CalendarHeader;
