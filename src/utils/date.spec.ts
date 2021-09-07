import { DateTime, Settings } from 'luxon';
import { getCurrentWeekNumber } from './date';

describe('getCurrentWeekNumber()', () => {
  it('returns proper values when week 2', () => {
    const dateFromWeekTwo = DateTime.local(2021, 9, 7, 13, 0, 0);
    Settings.now = () => dateFromWeekTwo.toMillis();

    expect(getCurrentWeekNumber()).toEqual(2);
  });

  it('returns proper values when week 1', () => {
    const dateFromWeekOne = DateTime.local(2021, 9, 4, 13, 0, 0);
    Settings.now = () => dateFromWeekOne.toMillis();

    expect(getCurrentWeekNumber()).toEqual(1);
  });

  it('returns proper values when Saturday evening', () => {
    const someSaturdayEvening = DateTime.local(2021, 9, 4, 18, 0, 0);
    Settings.now = () => someSaturdayEvening.toMillis();

    expect(getCurrentWeekNumber()).toEqual(2);
  });

  it('returns default value if incorrect date', () => {
    const someSaturdayEvening = DateTime.local(2045, 9, 4, 18, 0, 0);
    Settings.now = () => someSaturdayEvening.toMillis();

    expect(getCurrentWeekNumber()).toEqual(0);
  });
});
