import { DateTime, Settings } from 'luxon';
import { getCurrentWeekNumber, getDayOfWeek } from './date';

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
    const sampleSaturdayEvening = DateTime.local(2021, 9, 4, 18, 0, 0);
    Settings.now = () => sampleSaturdayEvening.toMillis();

    expect(getCurrentWeekNumber()).toEqual(2);
  });

  it('returns default value if incorrect date', () => {
    const sampleSaturdayEvening = DateTime.local(2045, 9, 4, 18, 0, 0);
    Settings.now = () => sampleSaturdayEvening.toMillis();

    expect(getCurrentWeekNumber()).toEqual(0);
  });
});

describe('getDayOfWeek()', () => {
  it('returns proper value', () => {
    const sampleTuesday = DateTime.local(2021, 9, 7, 13, 0, 0);
    Settings.now = () => sampleTuesday.toMillis();

    expect(getDayOfWeek()).toEqual('wtorek');
  });

  it('returns proper value when early Saturday', () => {
    const sampleSaturdayMorning = DateTime.local(2021, 9, 4, 9, 0, 0);
    Settings.now = () => sampleSaturdayMorning.toMillis();

    expect(getDayOfWeek()).toEqual('sobota');
  });

  it('returns proper value when Saturday evening', () => {
    const sampleSaturdayEvening = DateTime.local(2021, 9, 4, 18, 0, 0);
    Settings.now = () => sampleSaturdayEvening.toMillis();

    expect(getDayOfWeek()).toEqual('niedziela');
  });
});
