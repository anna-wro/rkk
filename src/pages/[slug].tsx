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

  // Try custom prayers first, then current season, then fallback to any season
  try {
    source = fs.readFileSync(customPrayerFilePath);
  } catch {
    try {
      source = fs.readFileSync(seasonPrayerFilePath);
    } catch {
      // If file doesn't exist in current season, try other seasons
      // This handles cases where some prayers only exist in specific seasons
      source = null;
      for (const season of [
        'ordinary',
        'advent',
        'lent',
        'christmas',
        'easter',
        'pascha',
        'pentecost',
      ]) {
        if (season === currentSeason) continue; // Already tried
        const fallbackPath = path.join(
          getPathForSeason(season),
          `${params.slug}.mdx`,
        );
        try {
          source = fs.readFileSync(fallbackPath);
          break;
        } catch {
          continue;
        }
      }
      if (!source) {
        // This should not happen if getStaticPaths is correct, but handle it gracefully
        return { notFound: true };
      }
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
    fallback: false,
  };
};
