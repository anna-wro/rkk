import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Layout from 'components/layout/Layout';
import InfoForToday from 'components/layout/InfoForToday';
import PrayersList from 'components/layout/PrayersList';
import { getPrayerDataFromFilename } from 'utils/getPrayerDataFromFilename';
import { PRAYERS_PATH, prayersFilePaths } from 'utils/mdxUtils';
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
  const prayers = prayersFilePaths
    .map(filePath => {
      const prayerData = getPrayerDataFromFilename({ filePath });
      const source = fs.readFileSync(path.join(PRAYERS_PATH, filePath));
      const { content, data } = matter(source);

      return { data, content, ...prayerData };
    })
    .sort((a, b) => a.ID - b.ID);

  return { props: { prayers } };
}
