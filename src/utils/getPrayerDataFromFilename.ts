import { removeAccents } from 'utils/text';

type PrayerDataPropsType = Readonly<{
  ID: number;
  slug: string;
  day: string;
  week: string;
  type: string;
}>;

const PRAYERS = {
  wigilia: { name: 'wigilia', order: 1 },
  jutrznia: { name: 'jutrznia', order: 2 },
  nieszpory: { name: 'nieszpory', order: 3 },
  kompleta: { name: 'kompleta', order: 4 },
};

const DAYS = {
  niedziela: { name: 'niedziela', order: 1 },
  poniedzialek: { name: 'poniedziałek', order: 2 },
  wtorek: { name: 'wtorek', order: 3 },
  sroda: { name: 'środa', order: 4 },
  czwartek: { name: 'czwartek', order: 5 },
  piatek: { name: 'piątek', order: 6 },
  sobota: { name: 'sobota', order: 7 },
};

export function getPrayerDataFromFilename({
  filePath,
}: {
  filePath: string;
}): PrayerDataPropsType {
  const [day, week, type] = filePath.replace('.mdx', '').split('-');
  const mappedDay = DAYS[day] ?? DAYS['niedziela'];
  const mappedType = PRAYERS[type] ?? PRAYERS['jutrznia'];
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
