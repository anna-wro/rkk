import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Layout from 'components/layout/Layout';
import { InfoForDayFacade } from 'components/layout/InfoForDayFacade';
import { CustomPrayersList } from 'components/layout/CustomPrayersList';
import { CUSTOM_PRAYERS_PATH, customPrayersFilePaths } from 'utils/mdxUtils';
import { getPrayerDataFromMeta } from 'utils/getPrayerDataFromMeta';

export default function CustomPrayersIndex({ prayers }) {
  return (
    <Layout>
      {<InfoForDayFacade />}
      <CustomPrayersList prayers={prayers} />
    </Layout>
  );
}

export function getStaticProps() {
  // TODO change paths here
  const prayers = customPrayersFilePaths
    .map(filePath => {
      const source = fs.readFileSync(path.join(CUSTOM_PRAYERS_PATH, filePath));
      const { content, data } = matter(source);

      const prayerData = getPrayerDataFromMeta({ meta: data, filePath });

      return { content, data, ...prayerData };
    })
    .sort((a, b) => a.ID - b.ID);

  return { props: { prayers } };
}
