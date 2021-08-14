import { useRouter } from 'next/router';
import Head from 'next/head';
import Title from 'components/Title';
import PrayersList from 'components/Prayers/PrayersList';
import Prayer from 'components/Prayers/Prayer';
import fs from 'fs';
import path from 'path';
import getPrayerDataFromFilename from 'utils/getPrayerDataFromFilename';
import copy from 'copy';

export default function Home({ prayers }) {
  const router = useRouter();
  const { slug } = router.query;
  let prayer;

  if (slug) {
    prayer = prayers.find(prayer => prayer.slug === slug[0]);
  }

  return (
    <div className="py-4">
      <Head>
        <title>{copy.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-4 md:px-20 max-w-2xl mx-auto">
        <Title />
        {prayer ? (
          <Prayer prayer={prayer} />
        ) : (
          <PrayersList prayers={prayers} />
        )}
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: [] } }],
    fallback: 'blocking',
  };
}

export function getStaticProps() {
  const DATA_PATH = path.join(process.cwd(), 'src/data');
  const dataFilePaths = fs
    .readdirSync(DATA_PATH)
    .filter(path => /\.json?$/.test(path));

  const prayers = dataFilePaths
    .map(filePath => {
      const prayerData = getPrayerDataFromFilename({ filePath });
      const source = fs.readFileSync(path.join(DATA_PATH, filePath));
      const obj = JSON.parse(source.toString());

      return { ...obj, ...prayerData };
    })
    .sort((a, b) => a.ID - b.ID);

  return { props: { prayers } };
}
