import getPrayerDataFromFilename from './getPrayerDataFromFilename';

describe('getPrayerDataFromFilename()', () => {
  it('returns proper values', () => {
    expect(getPrayerDataFromFilename({ filePath: 'com_sun_1' })).toMatchObject({
      slug: 'niedziela-1-kompleta',
      ID: 114,
      day: 'niedziela',
      week: '1',
      type: 'kompleta',
    });
    expect(getPrayerDataFromFilename({ filePath: 'lau_wed_2' })).toMatchObject({
      slug: 'sroda-2-jutrznia',
      ID: 242,
      day: 'środa',
      week: '2',
      type: 'jutrznia',
    });
  });
  it("doesn't break if wrong path", () => {
    expect(
      getPrayerDataFromFilename({ filePath: 'eve_someday_1' }),
    ).toMatchObject({
      slug: 'niedziela-1-wigilia',
      ID: 111,
      day: 'niedziela',
      week: '1',
      type: 'wigilia',
    });
    expect(
      getPrayerDataFromFilename({ filePath: 'something_tue_3' }),
    ).toMatchObject({
      slug: 'wtorek-3-jutrznia',
      ID: 332,
      day: 'wtorek',
      week: '3',
      type: 'jutrznia',
    });
  });
});
