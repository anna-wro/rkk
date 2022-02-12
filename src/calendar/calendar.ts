import { September2021 } from './2021-09';
import { October2021 } from './2021-10';
import { November2021 } from './2021-11';
import { December2021 } from './2021-12';
import { January2022 } from './2022-01';
import { February2022 } from './2022-02';
import { March2022 } from './2022-03';
import { April2022 } from './2022-04';
import { May2022 } from './2022-05';

export type CalendarDayType = Readonly<{
  date: string;
  week: 1 | 2;
  season: SeasonType;
  holidays?: string[];
  links?: ReadonlyArray<{
    name: string;
    slug: string;
  }>;
  linksTitle?: string;
  notes?: string[];
  passages?: string[];
  lauds?: {
    sigla?: string;
    passage?: string;
    antiphon?: string;
  };
  vespers?: {
    sigla?: string;
    passage?: string;
    antiphon?: string;
  };
  eve?: {
    antiphon?: string;
  };
}>;

export type SeasonType =
  | 'ordinary'
  | 'advent'
  | 'christmas'
  | 'lent'
  | 'pascha'
  | 'easter';

export type CalendarType = ReadonlyArray<CalendarDayType>;

export const calendar: CalendarType = [
  ...September2021,
  ...October2021,
  ...November2021,
  ...December2021,
  ...January2022,
  ...February2022,
  ...March2022,
  ...April2022,
  ...May2022,
];
