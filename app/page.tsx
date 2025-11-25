'use client';

import { useState, useRef, useEffect } from 'react';
import { MyCalendar } from '@/components/calendar/MyCalendar';
import { DayScheduler } from '@/components/scheduler/DayScheduler';
import Day from 'react-calendar/dist/MonthView/Day.js';
import Days from 'react-calendar/dist/MonthView/Days.js';  

export default function Home() {
  const [ selectedDate, setSelectedDate ] = useState<Date>(new Date());
  

  return (
   <>
    <h1 className="text-3xl text-center font-bold">予定表</h1>
    <MyCalendar selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
    <DayScheduler selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
   </>
  );
}
