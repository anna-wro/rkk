import { formatDate } from 'utils/date';
import { PRAYERS } from 'utils/getSeasonPrayerDataFromFilename';
import type { CustomPrayerDataPropsType } from 'components/layout/CustomPrayersList';

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
  const mappedType = PRAYERS[meta?.type] ?? PRAYERS['jutrznia'];
  const ID = Number(
    `${meta?.date?.replaceAll('-', '') ?? '0'}${mappedType?.order}`,
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
