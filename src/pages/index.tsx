import Head from 'next/head';
import PrayersList from 'components/Prayers/PrayersList';
import fs from 'fs';
import path from 'path';

export default function Home({ prayers }) {
  console.log({ prayers });
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Reformowany brewiarz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-4xl font-bold">Reformowany brewiarz</h1>
        <PrayersList prayers={prayers} />
      </main>
    </div>
  );
}

const DATA_PATH = path.join(process.cwd(), 'src/data');
const dataFilePaths = fs
  .readdirSync(DATA_PATH)
  .filter(path => /\.json?$/.test(path));

export function getStaticProps() {
  const prayers = dataFilePaths.map(filePath => {
    const source = fs.readFileSync(path.join(DATA_PATH, filePath));
    const obj = JSON.parse(source.toString());
    return obj.blocks;
  });
  return { props: { prayers } };
}
