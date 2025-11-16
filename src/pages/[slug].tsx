import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import Prayer from 'components/layout/PrayerPage';
import Layout from 'components/layout/Layout';
import {
  CUSTOM_PRAYERS_PATH,
  getAllPrayerFilePaths,
  customPrayersFilePaths,
  getPathForSeason,
} from 'utils/mdxUtils';
import { useWakeLock } from 'utils/useWakeLock';
import { getCurrentSeason } from 'utils/date';

export default function PrayerPage({ prayer }) {
  useWakeLock();

  return (
    <Layout title={prayer?.meta?.title}>
      <Prayer prayer={prayer} />
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  // Determine current season at request time (not build time)
  const currentSeason = getCurrentSeason();
  const seasonPrayersPath = getPathForSeason(currentSeason);

  const seasonPrayerFilePath = path.join(
    seasonPrayersPath,
    `${params.slug}.mdx`,
  );

  const customPrayerFilePath = path.join(
    CUSTOM_PRAYERS_PATH,
    `${params.slug}.mdx`,
  );

  let source;

  // Try custom prayers first, then current season
  try {
    source = fs.readFileSync(customPrayerFilePath);
  } catch {
    try {
      source = fs.readFileSync(seasonPrayerFilePath);
    } catch {
      // If file doesn't exist in current season, return 404
      return { notFound: true };
    }
  }

  const { content, data } = matter(source);
  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      prayer: { source: mdxSource, meta: data },
    },
    revalidate: 3600,
  };
};

export const getStaticPaths = async () => {
  // Get all unique prayer file names from all seasons
  const allPrayerFiles = getAllPrayerFilePaths();

  const paths = [...allPrayerFiles, ...customPrayersFilePaths]
    .map(path => path.replace(/\.mdx?$/, ''))
    .map(slug => ({ params: { slug } }));

  return {
    paths,
    fallback: 'blocking', // Allow runtime generation for paths not in build
  };
};
