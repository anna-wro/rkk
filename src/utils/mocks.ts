import { DateTime, Settings } from 'luxon';

export const mockDate = (year, month, day, hour?: number, minute?: number) => {
  const dateNow = DateTime.local(year, month, day, hour, minute);
  Settings.now = () => dateNow.toMillis();
};
