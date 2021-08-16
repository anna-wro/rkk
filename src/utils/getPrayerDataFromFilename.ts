import { removeAccents } from 'utils/text';

type PrayerDataPropsType = Readonly<{
  ID: number;
  slug: string;
  day: string;
  week: string;
  type: string;
}>;

const PRAYERS = {
  eve: { name: 'wigilia', order: 1 },
  lau: { name: 'jutrznia', order: 2 },
  ves: { name: 'nieszpory', order: 3 },
  com: { name: 'kompleta', order: 4 },
};

const DAYS = {
  sun: { name: 'niedziela', order: 1 },
  mon: { name: 'poniedziałek', order: 2 },
  tue: { name: 'wtorek', order: 3 },
  wed: { name: 'środa', order: 4 },
  thu: { name: 'czwartek', order: 5 },
  fri: { name: 'piątek', order: 6 },
  sat: { name: 'sobota', order: 7 },
};

export function getPrayerDataFromFilename({
  filePath,
}: {
  filePath: string;
}): PrayerDataPropsType {
  const [type, day, week] = filePath.replace('.mdx', '').split('_');
  const mappedDay = DAYS[day] ?? DAYS['sun'];
  const mappedType = PRAYERS[type] ?? PRAYERS['lau'];
  const slug = removeAccents(`${mappedDay.name}-${week}-${mappedType.name}`);
  const ID = Number(`${week}${mappedDay.order}${mappedType.order}`);

  return {
    slug,
    ID,
    day: mappedDay.name,
    week,
    type: mappedType.name,
  };
}
