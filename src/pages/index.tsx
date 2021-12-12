import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Layout from 'components/layout/Layout';
import InfoForToday from 'components/layout/InfoForToday';
import PrayersList from 'components/layout/PrayersList';
import { getPrayerDataFromMeta } from 'utils/getPrayerDataFromMeta';
import { SEASON_PRAYERS_PATH, seasonPrayersFilePaths } from 'utils/mdxUtils';
import { getCalendarData } from 'utils/date';

export default function Home({ prayers }) {
  const calendar = getCalendarData();

  return (
    <Layout>
      {calendar && <InfoForToday data={calendar} />}
      <PrayersList prayers={prayers} />
    </Layout>
  );
}

export function getStaticProps() {
  const prayers = seasonPrayersFilePaths
    .map(filePath => {
      const source = fs.readFileSync(path.join(SEASON_PRAYERS_PATH, filePath));
      const { content, data } = matter(source);
      const prayerData = getPrayerDataFromMeta({ filePath, meta: data });
      return { content, data, ...prayerData };
    })
    .sort((a, b) => a.ID - b.ID);

  return { props: { prayers } };
}
