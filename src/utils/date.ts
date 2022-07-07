import { DateTime } from 'luxon';
import { calendar } from 'calendar/calendar';
import type { CalendarDayType, SeasonType } from 'calendar/calendar';
import { getQueryParam } from 'utils/url';
import { mockDate } from './mocks';

export type CalendarDataType = Readonly<
  {
    prettyDate: string;
  } & CalendarDayType
>;

export const getCurrentDate = () => {
  const dateToMock = getQueryParam('date')?.split('-').map(Number);

  if (dateToMock) {
    mockDate.apply(this, dateToMock);
  }

  let dateNow = DateTime.now();
  const dayOfWeek = dateNow.toLocaleString(
    { weekday: 'long' },
    { locale: 'pl-pl' },
  );
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
  return currentCalendarItem ? { ...currentCalendarItem, prettyDate } : null;
};

export const formatDate = (date: string) => {
  const dateTime = DateTime.fromISO(date);

  return dateTime.isValid
    ? dateTime.setLocale('pl').toLocaleString({ day: 'numeric', month: 'long' })
    : null;
};
