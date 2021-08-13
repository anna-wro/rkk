import { useRouter } from 'next/router';
import Head from 'next/head';
import PrayersList from 'components/Prayers/PrayersList';
import Prayer from 'components/Prayers/Prayer';
import fs from 'fs';
import path from 'path';
import getPrayerSlug from 'utils/getPrayerSlug';
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

      <main className="px-4 md:px-20 text-center">
        <h1 className="text-4xl font-bold mt-10">{copy.title}</h1>
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

  // TODO: sort in a chronological order
  const prayers = dataFilePaths.map(filePath => {
    const slug = getPrayerSlug({ filePath });
    const source = fs.readFileSync(path.join(DATA_PATH, filePath));
    const obj = JSON.parse(source.toString());

    return { ...obj, slug };
  });
  return { props: { prayers } };
}
