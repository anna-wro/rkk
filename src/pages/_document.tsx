import Document, { Html, Head, Main, NextScript } from 'next/document';
import { copy } from 'consts/copy';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pl-PL">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
          <meta name="apple-mobile-web-app-title" content={copy.appName} />
          <meta name="application-name" content={copy.appName} />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body className="dark:bg-gray-900 dark:text-white/90 font-main selection:bg-green-200">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
