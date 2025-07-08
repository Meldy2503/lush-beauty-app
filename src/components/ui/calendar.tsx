"use client";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

interface CalendarComponentProps {
  onChange: (value: Date) => void;
  value: Date;
}

export default function CalendarComponent({
  onChange,
  value,
}: CalendarComponentProps) {
  return (
    <Calendar
      onChange={(val) => {
        if (val instanceof Date) {
          onChange(val);
        }
      }}
      value={value}
      calendarType="gregory"
      minDate={new Date()}
    />
  );
}
