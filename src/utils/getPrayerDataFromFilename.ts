type PrayerDataPropsType = Readonly<{
  ID: number;
  slug: string;
}>;

const PRAYERS = {
  eve: { name: 'wigilia', order: 1 },
  lau: { name: 'jutrznia', order: 2 },
  ves: { name: 'nieszpory', order: 3 },
  com: { name: 'kompleta', order: 4 },
};

const DAYS = {
  sun: { name: 'niedziela', order: 1 },
  mon: { name: 'poniedzialek', order: 2 },
  tue: { name: 'wtorek', order: 3 },
  wed: { name: 'sroda', order: 4 },
  thu: { name: 'czwartek', order: 5 },
  fri: { name: 'piatek', order: 6 },
  sat: { name: 'sobota', order: 7 },
};

export default function getPrayerDataFromFilename({
  filePath,
}: {
  filePath: string;
}): PrayerDataPropsType {
  const [type, day, week] = filePath.replace('.json', '').split('_');
  const mappedDay = DAYS[day];
  const mappedType = PRAYERS[type];

  return {
    slug: `${mappedDay.name}-${week}-${mappedType.name}`,
    ID: Number(`${week}${mappedDay.order}${mappedType.order}`),
  };
}
