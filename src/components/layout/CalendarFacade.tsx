import React, { useState } from 'react';
import { DateTime } from 'luxon';
import { InfoForDay } from './InfoForDay';
import { getDataForDay } from 'utils/date';
import { calendar as ReadingsCalendar } from 'calendar/calendar';
import Calendar from 'react-calendar';
import { copy } from 'consts/copy';
import 'react-calendar/dist/Calendar.css';

export function CalendarFacade() {
  const initialDate = getDataForDay({ date: DateTime.now() });
  const [dataToDisplay, setDataToDisplay] = useState(initialDate);

  const firstDate = new Date(
    DateTime.fromISO(ReadingsCalendar[0].date).toJSDate(),
  );
  const lastDate = new Date(
    DateTime.fromISO(
      ReadingsCalendar[ReadingsCalendar.length - 1].date,
    ).toJSDate(),
  );

  const handleDateChange = (date: Date) => {
    const dateToCheck = DateTime.fromISO(date.toISOString());
    setDataToDisplay(getDataForDay({ date: dateToCheck }));
  };

  return (
    <div className="space-y-4">
      <Calendar
        onChange={handleDateChange}
        minDate={firstDate}
        maxDate={lastDate}
        className="calendar"
      />
      {dataToDisplay ? (
        <InfoForDay data={dataToDisplay} />
      ) : (
        <div>{copy.notToday}</div>
      )}
    </div>
  );
}
