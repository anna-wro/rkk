import Head from 'next/head';
import Box from 'components/Box';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Get started by editing{' '}
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            pages/index.js
          </code>
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <Box
            href="https://nextjs.org/docs"
            headline="Documentation &rarr;"
            content="Find in-depth information about Next.js features and API."
          />

          <Box
            href="https://nextjs.org/learn"
            headline="Learn &rarr;"
            content="Learn about Next.js in an interactive course with quizzes!"
          />

          <Box
            href="https://github.com/vercel/next.js/tree/master/examples"
            headline="Examples &rarr;"
            content="Discover and deploy boilerplate example Next.js projects."
          />

          <Box
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            headline="Deploy &rarr;"
            content="Instantly deploy your Next.js site to a public URL with Vercel."
          />
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Vercel
        </a>
      </footer>
    </div>
  );
}
