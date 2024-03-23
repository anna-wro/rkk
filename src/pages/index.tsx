/* eslint-disable @next/next/no-img-element */
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Layout from 'components/layout/Layout';
import { InfoForDayFacade } from 'components/layout/InfoForDayFacade';
import PrayersList from 'components/layout/PrayersList';
import { getPrayerDataFromMeta } from 'utils/getPrayerDataFromMeta';
import { ALL_SEASONS } from 'calendar/calendar';
import { getCalendarData } from 'utils/date';
import { getPathForSeason } from 'utils/mdxUtils';

export default function Home({ prayers }) {
  const calendar = getCalendarData();
  const seasonToDisplay = calendar?.season ?? 'ordinary';
  const prayersToDisplay = prayers.filter(
    prayer => prayer.data.season === seasonToDisplay,
  );

  function isNiedzielaPalmowa(date: string | undefined) {
    return date === '2022-04-10' || date === '2024-03-24';
  }

  function isTriduum(date: string | undefined) {
    return (
      date === '2024-03-28' || date === '2024-03-29' || date === '2024-03-30'
    );
  }

  return (
    <Layout showSettingsLink>
      <InfoForDayFacade />
      {isNiedzielaPalmowa(calendar?.date) && (
        <img
          src="/banners/palm-sunday.jpg"
          className="mt-6"
          alt="Niedziela Palmowa"
        />
      )}
      {isTriduum(calendar?.date) && (
        <img
          src="/banners/triduum.jpg"
          className="mt-6"
          alt="Triduum Paschalne"
        />
      )}
      <PrayersList prayers={prayersToDisplay} />
    </Layout>
  );
}
const getPrayersFromPaths = season => {
  const directoryPath = getPathForSeason(season);
  const seasonFilePaths = fs
    .readdirSync(directoryPath)
    .filter(path => /\.mdx?$/.test(path));

  return seasonFilePaths
    .map(filePath => {
      const source = fs.readFileSync(path.join(directoryPath, filePath));
      const { content, data } = matter(source);
      const prayerData = getPrayerDataFromMeta({ filePath, meta: data });
      return { content, data, ...prayerData };
    })
    .sort((a, b) => a.ID - b.ID);
};

// TODO make it display different values when using "?date" - on prayer page
export function getStaticProps() {
  const allPrayers = ALL_SEASONS.map(season =>
    getPrayersFromPaths(season),
  ).flat();
  return { props: { prayers: allPrayers }, revalidate: 3600 };
}
