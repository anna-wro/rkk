import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import StyledLink from 'components/layout/StyledLink';
import { copy } from 'consts/copy';

export type ReadingDataPropsType = Readonly<{
  page: number;
  slug: string;
  title: string;
}>;

export type ReadingType = Readonly<{
  source: MDXRemoteSerializeResult;
}> &
  ReadingDataPropsType;

type PropsType = Readonly<{
  readings: ReadingType[];
}>;

export function ReadingsList({ readings }: PropsType) {
  return (
    <>
      <h3 className="font-semibold text-lg mb-4 mt-6 md:mt-8">
        {copy.readingsHeadline}
      </h3>
      {readings.map(reading => (
        <div key={reading.page}>
          <StyledLink
            internal
            name={reading.title}
            href={`czytania/${reading.slug}`}
          />
        </div>
      ))}
    </>
  );
}
