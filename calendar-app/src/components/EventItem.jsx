import React from "react";

const EventItem = ({ event }) => {
  return (
    <div className="event">
      {event.title} ({event.time})
    </div>
  );
};

export default EventItem;
