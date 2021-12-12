import { formatDate } from 'utils/date';

const BASIC_TYPES = {
  wigilia: { name: 'wigilia', order: 3 },
  kompleta_1: { name: 'kompleta', order: 4 },
  jutrznia: { name: 'jutrznia', order: 5 },
  nieszpory: { name: 'nieszpory', order: 6 },
  kompleta: { name: 'kompleta', order: 7 },
  kompleta_2: { name: 'kompleta', order: 7 },
};

const TYPES = {
  biogram: { name: 'biogram', order: 1 },
  wprowadzenie: { name: 'wprowadzenie', order: 1 },
  liturgia: { name: 'obrzędy liturgii', order: 2 },
  modlitwy: { name: 'modlitwy', order: 2 },
  ...BASIC_TYPES,
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

type PrayerMetaType = Readonly<{
  [key: string]: string;
}>;

type PropsType = Readonly<{
  meta: PrayerMetaType;
  filePath: string;
}>;

export function getPrayerDataFromMeta({ meta, filePath }: PropsType) {
  const slug = filePath.replace('.mdx', '');
  const mappedType = TYPES[meta?.type] ?? TYPES['jutrznia'];
  const mappedDay = DAYS[meta?.day] ?? DAYS['poniedzialek'];
  const isBasicType = !!BASIC_TYPES[meta?.type];

  const ID = isBasicType
    ? Number(`${meta?.week}${mappedDay.order}${mappedType.order}`)
    : Number(`${meta?.date?.replace(/-/g, '') ?? '0'}${mappedType?.order}`);

  return {
    slug,
    title: meta?.title ?? '',
    ID,
    day: mappedDay.name,
    date: meta?.date
      ? { ISO: meta.date, formatted: formatDate(meta.date) }
      : null,
    type: mappedType.name,
    week: meta?.week ?? 3,
  };
}
