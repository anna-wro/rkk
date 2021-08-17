import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Layout from 'components/Layout';
import PrayersList from 'components/Prayers/PrayersList';
import { getPrayerDataFromFilename } from 'utils/getPrayerDataFromFilename';
import { PRAYERS_PATH, prayersFilePaths } from 'utils/mdxUtils';

export default function Home({ prayers }) {
  console.log({ prayers });
  return (
    <Layout>
      <PrayersList prayers={prayers} />
    </Layout>
  );
}

export function getStaticProps() {
  const prayers = prayersFilePaths
    .map(filePath => {
      const prayerData = getPrayerDataFromFilename({ filePath });
      const source = fs.readFileSync(path.join(PRAYERS_PATH, filePath));
      const { data, content } = matter(source);

      return { data, content, ...prayerData };
    })
    .sort((a, b) => a.ID - b.ID);

  return { props: { prayers } };
}
