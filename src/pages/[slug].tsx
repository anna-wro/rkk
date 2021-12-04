import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import Prayer from 'components/layout/PrayerPage';
import Layout from 'components/layout/Layout';
import {
  SEASON_PRAYERS_PATH,
  CUSTOM_PRAYERS_PATH,
  seasonPrayersFilePaths,
  customPrayersFilePaths,
} from 'utils/mdxUtils';
import { useWakeLock } from 'utils/useWakeLock';

export default function PrayerPage({ prayer }) {
  useWakeLock();

  return (
    <Layout>
      <Prayer prayer={prayer} />
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const seasonPrayerFilePath = path.join(
    SEASON_PRAYERS_PATH,
    `${params.slug}.mdx`,
  );
  const customPrayerFilePath = path.join(
    CUSTOM_PRAYERS_PATH,
    `${params.slug}.mdx`,
  );

  let source;
  try {
    source = fs.readFileSync(customPrayerFilePath);
  } catch {
    source = fs.readFileSync(seasonPrayerFilePath);
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
    revalidate: 3600, // 1 hour
  };
};

export const getStaticPaths = async () => {
  const paths = [...seasonPrayersFilePaths, ...customPrayersFilePaths]
    .map(path => path.replace(/\.mdx?$/, ''))
    .map(slug => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
