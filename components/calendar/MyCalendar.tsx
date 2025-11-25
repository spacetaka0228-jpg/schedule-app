'use client';

import Calendar from 'react-calendar';

type Props = {
    selectedDate: Date;
    setSelectedDate: (date: Date) => void;
}

export const MyCalendar = ({ selectedDate, setSelectedDate}: Props) => {
    return (
      <div className="px-4 w-full">
        <Calendar
          value={selectedDate}
          onChange={(date) => date instanceof Date && setSelectedDate(date)} 
          className ="w-full max-w-full"
          tileClassName={({date, view}) => 
            view === "month" && date.getDay() === 6
              ? "!text-blue-500" 
              : null
            }
        />
      </div>  
    );
}