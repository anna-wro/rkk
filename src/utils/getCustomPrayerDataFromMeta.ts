import { formatDate } from 'utils/date';
import type { CustomPrayerDataPropsType } from 'components/layout/CustomPrayersList';

const CUSTOM_FILES = {
  biogram: { name: 'biogram', order: 1 },
  wprowadzenie: { name: 'wprowadzenie', order: 1 },
  liturgia: { name: 'obrzędy liturgii', order: 2 },
  modlitwy: { name: 'modlitwy', order: 2 },
  wigilia: { name: 'wigilia', order: 3 },
  jutrznia: { name: 'jutrznia', order: 4 },
  nieszpory: { name: 'nieszpory', order: 5 },
  kompleta: { name: 'kompleta', order: 6 },
};

type CustomPrayerMetaType = Readonly<{
  [key: string]: string;
}>;

type PropsType = Readonly<{
  meta: CustomPrayerMetaType;
  filePath: string;
}>;

export function getCustomPrayerDataFromMeta({
  meta,
  filePath,
}: PropsType): CustomPrayerDataPropsType {
  const slug = filePath.replace('.mdx', '');
  const mappedType = CUSTOM_FILES[meta?.type] ?? CUSTOM_FILES['jutrznia'];
  const ID = Number(
    `${meta?.date?.replace(/-/g, '') ?? '0'}${mappedType?.order}`,
  );

  return {
    slug,
    title: meta?.title ?? '',
    ID,
    type: mappedType.name,
    date: meta?.date
      ? { ISO: meta.date, formatted: formatDate(meta.date) }
      : null,
  };
}
