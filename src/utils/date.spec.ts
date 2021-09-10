import { DateTime, Settings } from 'luxon';
import { getCurrentWeekNumber, getDayOfWeek, getCurrentSeason } from './date';
import { mockDate } from './mocks';

describe('getCurrentWeekNumber()', () => {
  it('returns proper values when week 2', () => {
    mockDate(2021, 9, 7);

    expect(getCurrentWeekNumber()).toEqual(2);
  });

  it('returns proper values when week 1', () => {
    mockDate(2021, 9, 4);

    expect(getCurrentWeekNumber()).toEqual(1);
  });

  it('returns proper values when Saturday evening', () => {
    mockDate(2021, 9, 4, 18);

    expect(getCurrentWeekNumber()).toEqual(2);
  });

  it('returns default value if incorrect date', () => {
    mockDate(2045, 9, 4);

    expect(getCurrentWeekNumber()).toEqual(0);
  });
});

describe('getDayOfWeek()', () => {
  it('returns proper value', () => {
    mockDate(2021, 9, 7);

    expect(getDayOfWeek()).toEqual('wtorek');
  });

  it('returns proper value when early Saturday', () => {
    mockDate(2021, 9, 4, 9);

    expect(getDayOfWeek()).toEqual('sobota');
  });

  it('returns proper value when Saturday evening', () => {
    mockDate(2021, 9, 4, 18);

    expect(getDayOfWeek()).toEqual('niedziela');
  });
});

describe('getCurrentSeason()', () => {
  it('returns proper value', () => {
    mockDate(2021, 9, 7);

    expect(getCurrentSeason()).toEqual('ordinary');
  });
});
