import { MDXRemote } from 'next-mdx-remote';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import GoBackButton from 'components/GoBackButton';
import { Header } from 'components/components';

export type PrayerType = Readonly<{
  ID: string;
  slug: string;
  day: string;
  week: string;
  type: string;
  source: MDXRemoteSerializeResult;
}>;

type PropsType = Readonly<{ prayer: PrayerType }>;

const components = {
  h1: Header,
};

export default function Prayer({ prayer }: PropsType) {
  return (
    <>
      <div className="relative">
        <div className="md:absolute top-0 right-0 mb-4">
          <GoBackButton />
        </div>
        <MDXRemote {...prayer.source} components={components} />
      </div>
      <div className="mt-6">
        <GoBackButton />
      </div>
    </>
  );
}
