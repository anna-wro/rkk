import { September2021 } from './2021-09';
import { October2021 } from './2021-10';

export type CalendarDayType = Readonly<{
  date: string;
  week: 1 | 2;
  season: SeasonType;
  holiday?: string;
  files?: string[];
  notes?: string[];
  passages?: string[];
}>;

export type SeasonType = 'ordinary' | 'advent';

export type CalendarType = ReadonlyArray<CalendarDayType>;

export const calendar: CalendarType = [
  ...September2021,
  ...October2021,
  { date: '2021-11-01', week: 2, season: 'ordinary', passages: ['', '', ''] },
  { date: '2021-11-02', week: 2, season: 'ordinary', passages: ['', '', ''] },
  { date: '2021-11-03', week: 2, season: 'ordinary', passages: ['', '', ''] },
  { date: '2021-11-04', week: 2, season: 'ordinary', passages: ['', '', ''] },
  { date: '2021-11-05', week: 2, season: 'ordinary', passages: ['', '', ''] },
  { date: '2021-11-06', week: 2, season: 'ordinary', passages: ['', '', ''] },
  { date: '2021-11-07', week: 1, season: 'ordinary', passages: ['', '', ''] },
  { date: '2021-11-08', week: 1, season: 'ordinary', passages: ['', '', ''] },
  { date: '2021-11-09', week: 1, season: 'ordinary', passages: ['', '', ''] },
  { date: '2021-11-10', week: 1, season: 'ordinary', passages: ['', '', ''] },
  { date: '2021-11-11', week: 1, season: 'ordinary', passages: ['', '', ''] },
  { date: '2021-11-12', week: 1, season: 'ordinary', passages: ['', '', ''] },
  { date: '2021-11-13', week: 1, season: 'ordinary', passages: ['', '', ''] },
  { date: '2021-11-14', week: 2, season: 'ordinary', passages: ['', '', ''] },
  { date: '2021-11-15', week: 2, season: 'ordinary', passages: ['', '', ''] },
  { date: '2021-11-16', week: 2, season: 'ordinary', passages: ['', '', ''] },
  { date: '2021-11-17', week: 2, season: 'ordinary', passages: ['', '', ''] },
  { date: '2021-11-18', week: 2, season: 'ordinary', passages: ['', '', ''] },
  { date: '2021-11-19', week: 2, season: 'ordinary', passages: ['', '', ''] },
  { date: '2021-11-20', week: 2, season: 'ordinary', passages: ['', '', ''] },
  { date: '2021-11-21', week: 1, season: 'ordinary', passages: ['', '', ''] },
  { date: '2021-11-22', week: 1, season: 'ordinary', passages: ['', '', ''] },
  { date: '2021-11-23', week: 1, season: 'ordinary', passages: ['', '', ''] },
  { date: '2021-11-24', week: 1, season: 'ordinary', passages: ['', '', ''] },
  { date: '2021-11-25', week: 1, season: 'ordinary', passages: ['', '', ''] },
  { date: '2021-11-26', week: 1, season: 'ordinary', passages: ['', '', ''] },
  { date: '2021-11-27', week: 1, season: 'ordinary', passages: ['', '', ''] },
  { date: '2021-11-28', week: 1, season: 'advent' },
  { date: '2021-11-29', week: 1, season: 'advent' },
  { date: '2021-11-30', week: 1, season: 'advent' },
  { date: '2021-12-01', week: 1, season: 'advent' },
  { date: '2021-12-02', week: 1, season: 'advent' },
  { date: '2021-12-03', week: 1, season: 'advent' },
  { date: '2021-12-04', week: 1, season: 'advent' },
  { date: '2021-12-05', week: 2, season: 'advent' },
];
