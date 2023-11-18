import { DateTime } from 'luxon';
import { calendar } from 'calendar/calendar';
import type { CalendarDayType, SeasonType } from 'calendar/calendar';
import { getQueryParam } from 'utils/url';

export type CalendarDataType = Readonly<
  {
    prettyDate: string;
    dayOfWeek: string;
  } & CalendarDayType
>;
export const getCurrentSeason = (): SeasonType => {
  const { isoDate } = getSelectedDate();
  const currentCalendarItem = calendar.find(item => item.date === isoDate);

  return currentCalendarItem?.season ?? 'ordinary';
};

export const getCalendarData = (): CalendarDataType => {
  const dateParam = getQueryParam('date');
  const selectedDate = dateParam ? DateTime.fromISO(dateParam) : undefined;

  const { isoDate, prettyDate, dayOfWeek } = getSelectedDate(selectedDate);

  const currentCalendarItem = calendar.find(item => item.date === isoDate);
  return currentCalendarItem
    ? { ...currentCalendarItem, prettyDate, dayOfWeek }
    : null;
};

export const getSelectedDate = (date?: DateTime) => {
  const dateParam = getQueryParam('date');
  let dateNow;

  if (dateParam) {
    const parsedDate = DateTime.fromISO(dateParam);
    dateNow = parsedDate.isValid ? parsedDate : DateTime.now();
  } else {
    dateNow = date?.isValid ? date : DateTime.now();
  }

  const dayOfWeek = dateNow.toLocaleString(
    { weekday: 'long' },
    { locale: 'pl-pl' },
  );
  const isSundayEve = !date && dayOfWeek === 'sobota' && dateNow.hour >= 15;

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

export const getDataForDay = ({
  date,
}: {
  date?: DateTime;
}): CalendarDataType | null => {
  const { isoDate, prettyDate, dayOfWeek } = getSelectedDate(
    date || DateTime.now(),
  );
  const currentCalendarItem = calendar.find(item => item.date === isoDate);

  return currentCalendarItem
    ? { ...currentCalendarItem, prettyDate, dayOfWeek }
    : null;
};

export const formatDate = (date: string) => {
  const dateTime = DateTime.fromISO(date);

  return dateTime.isValid
    ? dateTime.setLocale('pl').toLocaleString({ day: 'numeric', month: 'long' })
    : null;
};
