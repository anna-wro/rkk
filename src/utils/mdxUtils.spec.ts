import { getAllPrayerFilePaths, getPathForSeason } from './mdxUtils';
import fs from 'fs';
import path from 'path';

describe('getAllPrayerFilePaths()', () => {
  it('returns unique file paths from all seasons', () => {
    const allFiles = getAllPrayerFilePaths();

    expect(allFiles.length).toBeGreaterThan(0);
    expect(allFiles).toContain('poniedzialek-1-nieszpory.mdx');
  });

  it('returns only unique file names', () => {
    const allFiles = getAllPrayerFilePaths();
    const uniqueFiles = new Set(allFiles);

    expect(allFiles.length).toEqual(uniqueFiles.size);
  });

  it('returns files that exist in at least one season', () => {
    const allFiles = getAllPrayerFilePaths();

    // Check that at least one file exists in at least one season
    const seasons = [
      'ordinary',
      'advent',
      'lent',
      'christmas',
      'easter',
      'pascha',
      'pentecost',
    ];

    allFiles.forEach(file => {
      const existsInSomeSeason = seasons.some(season => {
        const filePath = path.join(getPathForSeason(season), file);
        return fs.existsSync(filePath);
      });
      expect(existsInSomeSeason).toBe(true);
    });
  });
});

describe('getPathForSeason()', () => {
  it('returns correct path for ordinary season', () => {
    const seasonPath = getPathForSeason('ordinary');
    expect(seasonPath).toContain('src/data/ordinary');
  });

  it('returns correct path for advent season', () => {
    const seasonPath = getPathForSeason('advent');
    expect(seasonPath).toContain('src/data/advent');
  });
});
