import { DateTime } from 'luxon';
import { calendar } from 'consts/calendar';
import { makeStartCase } from './text';

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

export const getDayOfWeek = () => {
  const dateNow = DateTime.now();

  // Handle new week starting on Saturday evening
  const dayOfWeek = dateNow.setLocale('pl').toFormat('cccc');
  const isSundayEve = dayOfWeek === 'sobota' && dateNow.hour >= 15;

  return isSundayEve ? 'niedziela' : dayOfWeek;
};
