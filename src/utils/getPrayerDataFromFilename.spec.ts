import { getPrayerDataFromFilename } from './getPrayerDataFromFilename';

describe('getPrayerDataFromFilename()', () => {
  it('returns proper values', () => {
    expect(
      getPrayerDataFromFilename({ filePath: 'niedziela-1-kompleta' }),
    ).toMatchObject({
      slug: 'niedziela-1-kompleta',
      ID: 115,
      day: 'niedziela',
      week: '1',
      type: 'kompleta',
    });
    expect(
      getPrayerDataFromFilename({ filePath: 'sroda-2-jutrznia' }),
    ).toMatchObject({
      slug: 'sroda-2-jutrznia',
      ID: 243,
      day: 'środa',
      week: '2',
      type: 'jutrznia',
    });
  });
  it("doesn't break if wrong path", () => {
    expect(
      getPrayerDataFromFilename({ filePath: 'niewiemkiedy-1-wigilia' }),
    ).toMatchObject({
      slug: 'niedziela-1-wigilia',
      ID: 111,
      day: 'niedziela',
      week: '1',
      type: 'wigilia',
    });
    expect(
      getPrayerDataFromFilename({ filePath: 'wtorek-3-niewiemco' }),
    ).toMatchObject({
      slug: 'wtorek-3-jutrznia',
      ID: 333,
      day: 'wtorek',
      week: '3',
      type: 'jutrznia',
    });
  });
});
