import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import Title from 'components/Title';
import PrayersList from 'components/Prayers/PrayersList';
import { getPrayerDataFromFilename } from 'utils/getPrayerDataFromFilename';
import copy from 'copy';

export default function Home({ prayers }) {
  console.log({ prayers });
  return (
    <div className="py-4">
      <Head>
        <title>{copy.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-4 md:px-20 max-w-2xl mx-auto relative">
        <Title />
        <PrayersList prayers={prayers} />
      </main>
    </div>
  );
}

export function getStaticProps() {
  const DATA_PATH = path.join(process.cwd(), 'src/data');
  const dataFilePaths = fs
    .readdirSync(DATA_PATH)
    .filter(path => /\.mdx?$/.test(path));

  const prayers = dataFilePaths
    .map(filePath => {
      const prayerData = getPrayerDataFromFilename({ filePath });
      const source = fs.readFileSync(path.join(DATA_PATH, filePath));
      const { data, content } = matter(source);

      return { data, content, ...prayerData };
    })
    .sort((a, b) => a.ID - b.ID);

  return { props: { prayers } };
}
