'use client';

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function CalendarComponent() {
  const [value, setValue] = useState<Value>(new Date());

  const handleChange = (newValue: Value) => {
    setValue(newValue);
  };

  return (
      <Calendar onChange={handleChange} value={value} calendarType="gregory" />
  );
}
