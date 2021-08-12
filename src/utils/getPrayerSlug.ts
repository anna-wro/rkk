type PrayerSlugPropsType = Readonly<{
  filePath: string;
}>;

const PRAYERS = {
  lau: 'jutrznia',
  ves: 'nieszpory',
  com: 'kompleta',
  eve: 'wigilia',
};

const DAYS = {
  mon: 'poniedzialek',
  tue: 'wtorek',
  wed: 'sroda',
  thu: 'czwartek',
  fri: 'piatek',
  sat: 'sobota',
  sun: 'niedziela',
};

export default function getPrayerSlug({
  filePath,
}: PrayerSlugPropsType): string {
  const [type, day, week] = filePath.replace('.json', '').split('_');
  const mappedDay = DAYS[day];
  const mappedType = PRAYERS[type];

  return `${mappedDay}-${week}-${mappedType}`;
}
