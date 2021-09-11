import { useEffect, useState } from 'react';
import Head from 'next/head';
import Title from 'components/layout/Title';
import copy from 'consts/copy';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const window: any;

export default function Layout({ children }) {
  const [newVersionAvailable, setNewVersionAvailable] = useState(false);

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator &&
      window.workbox !== undefined
    ) {
      const wb = window.workbox;
      wb.addEventListener('waiting', () => setNewVersionAvailable(true));
      wb.register();
    }
  }, []);

  return (
    <div className="py-4">
      <Head>
        <title>{copy.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-8 md:px-20 md:pt-10 mb-6 md:mb-10 max-w-2xl mx-auto">
        <div className="mb-3 md:mb-8">
          <Title />
        </div>
        {newVersionAvailable && <div>Hello, zrestartuj mnie! 2</div>}
        {children}
      </main>
    </div>
  );
}
