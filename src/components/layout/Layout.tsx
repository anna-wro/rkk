import React, { useEffect } from 'react';
import Head from 'next/head';
import Title from 'components/layout/Title';

import copy from 'consts/copy';
import useFontSize from 'utils/useFontSize';

type LayoutPropsType = Readonly<{
  children: React.ReactNode;
  title?: string;
}>;

export default function Layout({ children, title }: LayoutPropsType) {
  useFontSize();
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator &&
      window.workbox !== undefined
    ) {
      const wb = window.workbox;
      wb.register();
    }
  }, []);

  return (
    <div className="py-4">
      <Head>
        <title>{title ?? copy.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="md:pt-10 mb-6 md:mb-10 max-w-2xl mx-auto">
        <div className="px-8 md:px-20  mb-3 md:mb-8">
          <Title />
        </div>
        <div className="px-8 md:px-20 ">{children}</div>
      </main>
    </div>
  );
}
