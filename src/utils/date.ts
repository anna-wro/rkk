import { DateTime } from 'luxon';
import { calendar } from 'consts/calendar';

export const getCurrentWeekNumber = () => {
  const dateNow = DateTime.now();
  const formattedDate = dateNow.toFormat('yyyy-LL-dd');
  const currentData = calendar.find(item => item.date === formattedDate);

  //   TODO handle Saturday evenings case
  return currentData.week || 1;
};
