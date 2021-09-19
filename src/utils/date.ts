import { DateTime } from 'luxon';
import { calendar } from 'calendar/calendar';
import type { CalendarDayType } from 'calendar/calendar';
// import { mockDate } from './mocks';

type SeasonType = 'ordinary' | 'advent';

export type CalendarDataType = Readonly<
  {
    prettyDate: string;
  } & CalendarDayType
>;

export const getCurrentWeekNumber = () => {
  const dateNow = DateTime.now();
  const formattedDate = dateNow.toFormat('yyyy-LL-dd');
  const currentCalendarItem = calendar.find(
    item => item.date === formattedDate,
  );
  const currentWeek = currentCalendarItem?.week ?? 0;

  // Handle new week starting on Saturday evening
  const dayOfWeek = dateNow.toFormat('ccc');
  const isSundayEve = dayOfWeek === 'Sat' && dateNow.hour >= 15;

  if (isSundayEve) {
    return currentWeek === 1 ? 2 : 1;
  }

  return currentWeek;
};

export const getCurrentDate = () => {
  // mockDate(2021, 9, 20);
  let dateNow = DateTime.now();
  const dayOfWeek = dateNow.setLocale('pl').toFormat('cccc');
  const isSundayEve = dayOfWeek === 'sobota' && dateNow.hour >= 15;

  if (isSundayEve) {
    dateNow = dateNow.plus({ days: 1 });
  }

  return {
    dayOfWeek: isSundayEve ? 'niedziela' : dayOfWeek,
    isSundayEve,
    isoDate: dateNow.toFormat('yyyy-LL-dd'),
    prettyDate: dateNow.setLocale('pl').toLocaleString(DateTime.DATE_HUGE),
  };
};

export const getCurrentSeason = (): SeasonType => {
  const { isoDate } = getCurrentDate();
  const currentCalendarItem = calendar.find(item => item.date === isoDate);

  return currentCalendarItem?.season ?? 'ordinary';
};

export const getCalendarData = (): CalendarDataType => {
  const { isoDate, prettyDate } = getCurrentDate();

  const currentCalendarItem = calendar.find(item => item.date === isoDate);
  const calendarData = currentCalendarItem
    ? { ...currentCalendarItem, prettyDate }
    : null;

  return calendarData;
};

export const formatDate = (date: string) => {
  const formattedDate = DateTime.fromISO(date)
    .setLocale('pl')
    .toLocaleString({ day: 'numeric', month: 'long' });

  return formattedDate;
};
