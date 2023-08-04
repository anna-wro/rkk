import Document, { Html, Head, Main, NextScript } from 'next/document';
import { copy } from 'consts/copy';
import { AppleSplashScreenLinks } from 'components/AppleSplashScreenLinks';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pl-PL">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Serif:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
          <link rel="manifest" href="/manifest.json" />
          <meta name="robots" content="noindex" />
          <meta
            name="msapplication-square70x70logo"
            content="/pwa/mstile-icon-128.png"
          />
          <meta
            name="msapplication-square150x150logo"
            content="/pwa/mstile-icon-270.png"
          />
          <meta
            name="msapplication-square310x310logo"
            content="/pwa/mstile-icon-558.png"
          />
          <meta
            name="msapplication-wide310x150logo"
            content="/pwa/mstile-icon-558-270.png"
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/pwa/apple-touch-icon.png"
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
          <link
            rel="mask-icon"
            href="/pwa/safari-pinned-tab.svg"
            color="#000000"
          />
          <meta name="apple-mobile-web-app-title" content={copy.appName} />
          <meta name="application-name" content={copy.appName} />
          <meta name="theme-color" content="#ffffff" />
          <AppleSplashScreenLinks />
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
