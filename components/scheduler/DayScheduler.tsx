'use client';

import FullCalendar from "@fullcalendar/react";
import timeGridPlggin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useRef, useEffect } from "react";
import { info } from "console";

type Props = {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
}

export const DayScheduler = ({selectedDate, setSelectedDate}:Props) => {
  const calendarRef = useRef<FullCalendar>(null);

  useEffect(() => {
    if (calendarRef.current) {
      calendarRef.current.getApi().gotoDate(selectedDate);
    }
  }, [selectedDate]);
  return (
    <FullCalendar
      ref={calendarRef}
      plugins={[timeGridPlggin, interactionPlugin]}
      initialView="timeGridDay"
      selectable={true}
      allDaySlot={false}
      editable={true}
      events={[]}
      datesSet={(info) => {
        const newDate = info.start;
        if ( newDate && newDate.getTime() !== selectedDate.getTime()) {
          setSelectedDate(newDate);
        }
      }}
    />
  );
} 