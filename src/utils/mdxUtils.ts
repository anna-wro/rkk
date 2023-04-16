import fs from 'fs';
import path from 'path';
import { getCurrentSeason } from 'utils/date';

const currentSeason = getCurrentSeason();

export const SEASON_PRAYERS_PATH = path.join(
  process.cwd(),
  `src/data/${currentSeason}`,
);

export const CUSTOM_PRAYERS_PATH = path.join(process.cwd(), `src/data/custom`);

// TODO Use me please
// export const READINGS_PATH = path.join(process.cwd(), `src/data/czytania`);

export const seasonPrayersFilePaths = fs
  .readdirSync(SEASON_PRAYERS_PATH)
  .filter(path => /\.mdx?$/.test(path));

export const customPrayersFilePaths = fs
  .readdirSync(CUSTOM_PRAYERS_PATH)
  .filter(path => /\.mdx?$/.test(path));

// TODO Use me please
// export const readingsFilePaths = fs
//   .readdirSync(READINGS_PATH)
//   .filter(path => /\.mdx?$/.test(path));
