import { DateTime } from 'luxon';
import { calendar } from 'consts/calendar';

export const getCurrentWeekNumber = () => {
  const dateNow = DateTime.now();
  const formattedDate = dateNow.toFormat('yyyy-LL-dd');
  const currentCalendarItem = calendar.find(
    item => item.date === formattedDate,
  );
  const currentWeek = currentCalendarItem?.week ?? 1;

  // Handle new week starting on Saturday evening
  const dayOfWeek = dateNow.toFormat('ccc');
  const isSundayEve = dayOfWeek === 'Sat' && dateNow.hour >= 15;

  if (isSundayEve) {
    return currentWeek === 1 ? 2 : 1;
  }

  return currentWeek;
};
