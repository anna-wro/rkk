import { DateTime, Settings } from 'luxon';

export const mockDate = (year, month, day, hour?: number, minute?: number) => {
  const dateNow = DateTime.local(year, month, day, hour, minute);

  if (!dateNow.isValid) return;

  Settings.now = () => dateNow.toMillis();
};
