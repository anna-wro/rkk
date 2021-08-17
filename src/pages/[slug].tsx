import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import Head from 'next/head';
import Title from 'components/Title';
import Prayer from 'components/Prayers/Prayer';
import copy from 'copy';
import { PRAYERS_PATH, prayersFilePaths } from 'utils/mdxUtils';

export default function PrayerPage({ prayer }) {
  return (
    <div className="py-4">
      <Head>
        <title>{copy.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-4 md:px-20 max-w-2xl mx-auto">
        <Title />
        <Prayer prayer={prayer} />
      </main>
    </div>
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
