import { MDXRemote } from 'next-mdx-remote';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import GoBackButton from 'components/layout/GoBackButton';
import {
  Header,
  Section,
  List,
  ListItem,
  Intercessions,
} from 'components/mdxOverrides';
import { Responsory } from 'components/prayers/Responsory';
import {
  LordsPrayer,
  OpeningVersicle,
  BlessingAndConcludingVersicle,
  AlleluiaCanticle,
  Canticle,
  Magnificat,
  Benedictus,
  NuncDimittis,
  KyrieEleison,
  Passage,
  Amen,
  CustomIntercessions,
  ExaminationOfConscience,
  ComplineBlessingAndConcludingVersicle,
  SalveRegina,
  V,
  R,
} from 'components/prayers';

export type PrayerDataPropsType = Readonly<{
  ID: number;
  slug: string;
  day: string;
  week: string;
  type: string;
}>;

export type PrayerType = Readonly<{
  source: MDXRemoteSerializeResult;
}> &
  PrayerDataPropsType;

type PropsType = Readonly<{ prayer: PrayerType }>;

const components = {
  h1: Header,
  h2: Section,
  ol: List,
  ul: Intercessions,
  li: ListItem,
  Responsory,
  OpeningVersicle,
  LordsPrayer,
  BlessingAndConcludingVersicle,
  CustomIntercessions,
  Canticle,
  Magnificat,
  Benedictus,
  NuncDimittis,
  AlleluiaCanticle,
  KyrieEleison,
  SalveRegina,
  Passage,
  Intercessions,
  ExaminationOfConscience,
  ComplineBlessingAndConcludingVersicle,
  Amen,
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
      <div className="section">
        <GoBackButton />
      </div>
    </>
  );
}
