import { Calendar2021 } from './2021';
import { Calendar2022 } from './2022';
import { Calendar2023 } from './2023';
import { Calendar2024 } from './2024';
import { Calendar2025 } from './2025';

export type CalendarDayType = Readonly<{
  date: string;
  week: 1 | 2;
  season: SeasonType;
  holidays?: string[];
  variant?: 1 | 2;
  links?: ReadonlyArray<{
    name: string;
    slug: string;
  }>;
  linksTitle?: string;
  notes?: string[];
  isFastingDay?: boolean;
  passages?: (string | string[])[];
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

export const ALL_SEASONS = [
  'ordinary',
  'advent',
  'christmas',
  'lent',
  'pascha',
  'easter',
  'pentecost',
] as const;

export type SeasonType = (typeof ALL_SEASONS)[number];

export type CalendarType = ReadonlyArray<CalendarDayType>;

export const calendar: CalendarType = [
  ...Calendar2021,
  ...Calendar2022,
  ...Calendar2023,
  ...Calendar2024,
  ...Calendar2025,
].flat();
