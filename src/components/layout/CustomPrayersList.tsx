import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { CustomPrayersGroup } from 'components/layout/CustomPrayersGroup';
import { groupByKey } from 'utils/array';
import { copy } from 'consts/copy';

export type CustomPrayerDataPropsType = Readonly<{
  ID: number;
  slug: string;
  title: string;
  date?: Readonly<{
    ISO: string;
    formatted: string;
  }>;
  type: string;
}>;

export type CustomPrayerType = Readonly<{
  source: MDXRemoteSerializeResult;
}> &
  CustomPrayerDataPropsType;

type PropsType = Readonly<{
  prayers: CustomPrayerType[];
}>;

export function CustomPrayersList({ prayers }: PropsType) {
  const prayersGrouppedByTitle = groupByKey(prayers, 'title');
  return (
    <>
      <h3 className="font-semibold text-lg mb-4 mt-6">
        {copy.customPrayerHeadline}
      </h3>
      {Object.entries(prayersGrouppedByTitle).map(
        (prayersFromOcasion, index) => (
          <CustomPrayersGroup key={index} prayers={prayersFromOcasion} />
        ),
      )}
    </>
  );
}
