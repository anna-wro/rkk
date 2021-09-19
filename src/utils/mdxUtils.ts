import fs from 'fs';
import path from 'path';
import { getCurrentSeason } from 'utils/date';

const currentSeason = getCurrentSeason();

export const PRAYERS_PATH = path.join(
  process.cwd(),
  `src/data/${currentSeason}`,
);

export const CUSTOM_PRAYERS_PATH = path.join(process.cwd(), `src/data/custom`);

export const prayersFilePaths = fs
  .readdirSync(PRAYERS_PATH)
  .filter(path => /\.mdx?$/.test(path));

export const customPrayersFilePaths = fs
  .readdirSync(CUSTOM_PRAYERS_PATH)
  .filter(path => /\.mdx?$/.test(path));
