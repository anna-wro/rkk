import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import Prayer from 'components/layout/PrayerPage';
import Layout from 'components/layout/Layout';
import { useWakeLock } from 'utils/useWakeLock';
import { READINGS_PATH, getReadingsFilePaths } from 'utils/mdxUtils';

export default function PrayerPage({ prayer }) {
  useWakeLock();

  return (
    <Layout title={prayer?.meta?.title}>
      <Prayer prayer={prayer} />
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  let source;
  let { content, data } = { content: '', data: {} }; // initialize values

  // Check for the file path in multiple folders
  const volumes = ['vol-2', 'vol-3', 'vol-6'];
  for (let i = 0; i < volumes.length; i++) {
    const readingsFilePath = path.join(
      READINGS_PATH,
      volumes[i],
      `${params.slug}.mdx`,
    );

    try {
      source = fs.readFileSync(readingsFilePath);
      ({ content, data } = matter(source));
      break; // exit the loop if file is found
    } catch (error) {}
  }

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
  const readingsFilePaths = getReadingsFilePaths();

  // Extract the slug property from the front matter data of each .mdx file
  const paths = readingsFilePaths
    .map(filePath => {
      const fileDirectory = path.dirname(filePath);
      const slug = path.basename(filePath).replace(/\.mdx?$/, '');
      return { params: { slug }, fileDirectory };
    })
    .map(({ fileDirectory, params }) => {
      const slug = params.slug;
      const volume = path.relative(READINGS_PATH, fileDirectory);
      return { params: { slug, volume } };
    });

  return {
    paths,
    fallback: false,
  };
};
