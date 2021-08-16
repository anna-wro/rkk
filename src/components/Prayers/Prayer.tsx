import { MDXRemote } from 'next-mdx-remote';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import GoBackButton from 'components/GoBackButton';

export type PrayerType = Readonly<{
  ID: string;
  slug: string;
  day: string;
  week: string;
  type: string;
  source: MDXRemoteSerializeResult;
}>;

type PropsType = Readonly<{ prayer: PrayerType }>;

export default function Prayer({ prayer }: PropsType) {
  return (
    <>
      <div className="md:absolute top-32 right-20 z-10 mt-3 mb-2 md:my-0">
        <GoBackButton />
      </div>
      <div className="cursor-default">
        <MDXRemote {...prayer.source} />
      </div>
      <div className="mt-6 mb-12">
        <GoBackButton />
      </div>
    </>
  );
}
