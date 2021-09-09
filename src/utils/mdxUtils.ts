import fs from 'fs';
import path from 'path';
import { getCurrentSeason } from 'utils/date';

const currentSeason = getCurrentSeason();

export const PRAYERS_PATH = path.join(
  process.cwd(),
  `src/data/${currentSeason}`,
);

export const prayersFilePaths = fs
  .readdirSync(PRAYERS_PATH)
  .filter(path => /\.mdx?$/.test(path));
