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
import * as Components from 'components/prayers';
import StyledLink from 'components/layout/StyledLink';
import { getCalendarData } from 'utils/date';

export type PrayerDataPropsType = Readonly<{
  ID: number;
  slug: string;
  day: string;
  week: number;
  type: string;
}>;

export type PrayerType = Readonly<{
  source: MDXRemoteSerializeResult;
}> &
  PrayerDataPropsType;

type PropsType = Readonly<{
  prayer: PrayerType;
}>;

type ComponentElementMap = Record<string, JSX.Element>;

const components = {
  h1: Header,
  h2: Section,
  ol: List,
  ul: Intercessions,
  li: ListItem,
  Intercessions,
  StyledLink,
  Section,
  List,
  ListItem,
  ...Components,
};

export default function PrayerPage({ prayer }: PropsType) {
  const calendar = getCalendarData();

  return (
    <>
      <div className="relative whitespace-pre-line">
        <div className="md:absolute top-0 right-0 mb-4">
          <GoBackButton />
        </div>
        <MDXRemote
          {...prayer.source}
          components={components as unknown as ComponentElementMap}
          scope={{ calendar }}
        />
      </div>
      <div className="section">
        <GoBackButton />
      </div>
    </>
  );
}
