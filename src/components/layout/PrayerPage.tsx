import { MDXRemote } from 'next-mdx-remote';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import GoBackButton from 'components/layout/GoBackButton';
import { Header, Section, List, ListItem } from 'components/mdxOverrides';
import { Responsory } from 'components/prayers/Responsory';
import {
  OurFather,
  OpeningVersicle,
  BlessingAndConcludingVersicle,
  AlleluiaCanticle,
  Canticle,
  Magnificat,
  Benedictus,
  NuncDimittis,
  KyrieEleison,
  V,
  R,
} from 'components/prayers';

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
  h2: Section,
  ol: List,
  li: ListItem,
  Responsory,
  OpeningVersicle,
  OurFather,
  BlessingAndConcludingVersicle,
  Canticle,
  Magnificat,
  Benedictus,
  NuncDimittis,
  AlleluiaCanticle,
  KyrieEleison,
  V,
  R,
};

export default function PrayerPage({ prayer }: PropsType) {
  return (
    <>
      <div className="relative whitespace-pre-line">
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
