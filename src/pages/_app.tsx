import 'tailwindcss/tailwind.css';
import 'styles/index.css';
import useTheme from 'utils/useTheme';

function MyApp({ Component, pageProps }) {
  useTheme();

  return <Component {...pageProps} />;
}

export default MyApp;
