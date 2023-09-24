import 'tailwindcss/tailwind.css';
import 'styles/index.css';
import useTheme from 'utils/useTheme';
import useFontSize from 'utils/useFontSize';
import useFontFamily from 'utils/useFontFamily';

function MyApp({ Component, pageProps }) {
  const { isInitialized: isThemeInitialized } = useTheme();
  const { isInitialized: isFontSizeInitialized } = useFontSize();
  const { isInitialized: isFontFamilyInitialized } = useFontFamily();

  if (
    !isThemeInitialized ||
    !isFontSizeInitialized ||
    !isFontFamilyInitialized
  ) {
    // TODO: Add loading screen
    return null;
  }

  return <Component {...pageProps} />;
}

export default MyApp;
