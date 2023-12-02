import fs from 'fs';
import path from 'path';
import { getCurrentSeason } from 'utils/date';

export const READINGS_PATH = path.join(process.cwd(), 'src/data/readings');

// Get all reading file paths recursively
export function getReadingsFilePaths() {
  const readingsFilePaths = [];
  const volumes = ['vol-1', 'vol-2', 'vol-3', 'vol-6'];

  volumes.forEach(volume => {
    const volumePath = path.join(READINGS_PATH, volume);
    const volumeFiles = fs.readdirSync(volumePath);

    volumeFiles.forEach(file => {
      const filePath = path.join(READINGS_PATH, volume, file);
      const fileStat = fs.statSync(filePath);
      const isDirectory = fileStat.isDirectory();

      if (isDirectory) {
        const nestedFiles = fs.readdirSync(filePath);
        nestedFiles.forEach(nestedFile => {
          const nestedFilePath = path.join(
            READINGS_PATH,
            volume,
            file,
            nestedFile,
          );
          readingsFilePaths.push(nestedFilePath);
        });
      } else {
        readingsFilePaths.push(filePath);
      }
    });
  });

  return readingsFilePaths;
}

const currentSeason = getCurrentSeason();

export const getPathForSeason = (season: string) =>
  path.join(process.cwd(), `src/data/${season}`);

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
