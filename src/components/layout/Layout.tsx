import Head from 'next/head';
import Title from 'components/layout/Title';
import copy from 'consts/copy';

export default function Layout({ children }) {
  return (
    <div className="py-4">
      <Head>
        <title>{copy.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-6 md:px-20 md:pt-10 mb-6 md:mb-10 max-w-2xl mx-auto">
        <div className="mb-3 md:mb-8">
          <Title />
        </div>
        TESTING AUTOMATIC UPDATE
        {children}
      </main>
    </div>
  );
}
