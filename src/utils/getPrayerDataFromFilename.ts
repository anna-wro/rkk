import { removeAccents } from 'utils/text';
import type { PrayerDataPropsType } from 'components/layout/PrayerPage';

export const PRAYERS = {
  wigilia: { name: 'wigilia', order: 1 },
  kompleta_1: { name: 'kompleta', order: 2 },
  jutrznia: { name: 'jutrznia', order: 3 },
  nieszpory: { name: 'nieszpory', order: 4 },
  kompleta: { name: 'kompleta', order: 5 },
  kompleta_2: { name: 'kompleta', order: 5 },
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
  const [day, week, type, variant] = filePath.replace('.mdx', '').split('-');
  const mappedDay = DAYS[day] ?? DAYS['niedziela'];
  const defaultPrayerType = PRAYERS['jutrznia'];
  const mappedType = variant ? PRAYERS[`${type}_${variant}`] : PRAYERS[type];
  const prayerType = mappedType || defaultPrayerType;

  const slug = removeAccents(
    `${mappedDay.name}-${week}-${
      variant ? `${type}-${variant}` : prayerType.name
    }`,
  );
  const ID = Number(`${week}${mappedDay.order}${prayerType.order}`);

  return {
    slug,
    ID,
    day: mappedDay.name,
    week,
    type: prayerType.name,
  };
}
