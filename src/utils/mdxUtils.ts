import fs from 'fs';
import path from 'path';
import { getCurrentSeason } from 'utils/date';

// FIXME: this is a temporary solution to get the current season
const currentSeason = 'ordinary';

export const SEASON_PRAYERS_PATH = path.join(
  process.cwd(),
  `src/data/${currentSeason}`,
);

export const CUSTOM_PRAYERS_PATH = path.join(process.cwd(), `src/data/custom`);

export const seasonPrayersFilePaths = fs
  .readdirSync(SEASON_PRAYERS_PATH)
  .filter(path => /\.mdx?$/.test(path));

export const customPrayersFilePaths = fs
  .readdirSync(CUSTOM_PRAYERS_PATH)
  .filter(path => /\.mdx?$/.test(path));
