import Head from 'next/head';
import Title from 'components/Title';
import copy from 'copy';

export default function Layout({ children }) {
  return (
    <div className="py-4">
      <Head>
        <title>{copy.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-4 md:px-20 md:pt-10 mb-6 md:mb-10 max-w-2xl mx-auto">
        <div className="mb-2 md:mb-8">
          <Title />
        </div>
        {children}
      </main>
    </div>
  );
}
