import fs from 'fs';
import matter from 'gray-matter';
import Layout from 'components/layout/Layout';
import { InfoForDayFacade } from 'components/layout/InfoForDayFacade';
import { ReadingsList } from 'components/layout/ReadingsList';
import { getReadingsFilePaths } from 'utils/mdxUtils';
import { getReadingDataFromMeta } from 'utils/getReadingDataFromMeta';

export default function CustomPrayersIndex({ readings }) {
  return (
    <Layout>
      {<InfoForDayFacade />}
      <ReadingsList readings={readings} />
    </Layout>
  );
}

export async function getStaticProps() {
  const readingsFilePaths = getReadingsFilePaths();

  const readings = readingsFilePaths
    .map(filePath => {
      const source = fs.readFileSync(filePath);
      const { content, data } = matter(source);

      const readingsData = getReadingDataFromMeta({ meta: data, filePath });

      return { content, data, ...readingsData };
    })
    .sort((a, b) => a.page - b.page);

  return { props: { readings } };
}
