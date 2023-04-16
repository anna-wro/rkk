import { getSelectedDate, getCurrentSeason } from './date';
import { mockDate } from './mocks';

describe('getSelectedDate()', () => {
  xit('returns proper value', () => {
    mockDate(2021, 9, 7);
    const { dayOfWeek, isoDate } = getSelectedDate();

    expect(dayOfWeek).toEqual('wtorek');
    expect(isoDate).toEqual('2021-09-07');
  });

  xit('returns proper value when early Saturday', () => {
    mockDate(2021, 9, 4, 9);
    const { dayOfWeek, isSundayEve, isoDate } = getSelectedDate();

    expect(dayOfWeek).toEqual('sobota');
    expect(isSundayEve).toEqual(false);
    expect(isoDate).toEqual('2021-09-04');
  });

  xit('returns proper value when Saturday evening', () => {
    mockDate(2021, 9, 4, 18);

    const { dayOfWeek, isSundayEve, isoDate } = getSelectedDate();

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

  it('returns proper value when advent', () => {
    mockDate(2021, 12, 3);

    expect(getCurrentSeason()).toEqual('advent');
  });
});
