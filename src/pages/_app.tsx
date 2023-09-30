import 'tailwindcss/tailwind.css';
import 'styles/index.css';
import useTheme from 'utils/useTheme';
import { FlashMessageProvider } from 'components/FlashMessageContext';

function MyAppContent({ Component, pageProps }) {
  useTheme();
  return <Component {...pageProps} />;
}

function MyApp({ Component, pageProps }) {
  return (
    <FlashMessageProvider>
      <MyAppContent Component={Component} pageProps={pageProps} />
    </FlashMessageProvider>
  );
}

export default MyApp;
