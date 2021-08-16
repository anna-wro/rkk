import fs from 'fs';
import path from 'path';

export const PRAYERS_PATH = path.join(process.cwd(), 'src/data');

export const prayersFilePaths = fs
  .readdirSync(PRAYERS_PATH)
  .filter(path => /\.mdx?$/.test(path));
