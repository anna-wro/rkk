import 'regenerator-runtime/runtime';
import { useEffect } from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import Prayer from 'components/layout/PrayerPage';
import Layout from 'components/layout/Layout';
import { PRAYERS_PATH, prayersFilePaths } from 'utils/mdxUtils';
import { useWakeLock } from 'use-wake-lock';

export default function PrayerPage({ prayer }) {
  const { toggleWakeLock } = useWakeLock();

  toggleWakeLock();

  return (
    <Layout>
      <Prayer prayer={prayer} />
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(PRAYERS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

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
  };
};

export const getStaticPaths = async () => {
  const paths = prayersFilePaths
    // Remove file extensions for page paths
    .map(path => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map(slug => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
