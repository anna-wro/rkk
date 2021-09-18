import { getCurrentWeekNumber, getCurrentDate, getCurrentSeason } from './date';
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

describe('getCurrentDate()', () => {
  it('returns proper value', () => {
    mockDate(2021, 9, 7);
    const { dayOfWeek, isoDate } = getCurrentDate();

    expect(dayOfWeek).toEqual('wtorek');
    expect(isoDate).toEqual('2021-09-07');
  });

  it('returns proper value when early Saturday', () => {
    mockDate(2021, 9, 4, 9);
    const { dayOfWeek, isSundayEve, isoDate } = getCurrentDate();

    expect(dayOfWeek).toEqual('sobota');
    expect(isSundayEve).toEqual(false);
    expect(isoDate).toEqual('2021-09-04');
  });

  it('returns proper value when Saturday evening', () => {
    mockDate(2021, 9, 4, 18);

    const { dayOfWeek, isSundayEve, isoDate } = getCurrentDate();

    expect(dayOfWeek).toEqual('niedziela');
    expect(isSundayEve).toEqual(true);
    expect(isoDate).toEqual('2021-09-05');
  });
});

describe('getCurrentSeason()', () => {
  it('returns proper value', () => {
    mockDate(2021, 9, 7);

    expect(getCurrentSeason()).toEqual('ordinary');
  });
});
