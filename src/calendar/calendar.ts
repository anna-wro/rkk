import { September2021 } from './2021-09';
import { October2021 } from './2021-10';
import { November2021 } from './2021-11';
import { December2021 } from './2021-12';

type FileTitleType =
  | 'biogram'
  | 'wigilia'
  | 'jutrznia'
  | 'nieszpory'
  | 'kompleta';

export type CalendarDayType = Readonly<{
  date: string;
  week: 1 | 2;
  season: SeasonType;
  holidays?: string[];
  files?: ReadonlyArray<{
    title: FileTitleType;
    slug: string;
  }>;
  notes?: string[];
  passages?: string[];
  antiphon?: string;
}>;

export type SeasonType = 'ordinary' | 'advent' | 'christmas';

export type CalendarType = ReadonlyArray<CalendarDayType>;

export const calendar: CalendarType = [
  ...September2021,
  ...October2021,
  ...November2021,
  ...December2021,
];
