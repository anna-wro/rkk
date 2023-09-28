import { useState, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
const useTheme = () => {
  const { getItem, setItem } = useLocalStorage();
  const isBrowser = typeof window !== 'undefined';

  const prefersDarkScheme = () => {
    if (isBrowser) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  };

  const defaultTheme = prefersDarkScheme() ? 'dark' : 'light';

  const [theme, setThemeState] = useState(undefined);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const storedTheme = getItem('theme');
    setThemeState(storedTheme || defaultTheme);
    setIsInitialized(true);
  }, [defaultTheme, getItem]);

  useEffect(() => {
    if (theme) {
      const root = document.documentElement;
      if (theme === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
      setItem('theme', theme);
    }
  }, [theme, setItem]);

  const setLight = () => setThemeState('light');
  const setDark = () => setThemeState('dark');
  const resetTheme = () => setThemeState(defaultTheme);
  const toggleTheme = () => {
    theme === 'light' ? setDark() : setLight();
  };

  return { theme, isInitialized, setLight, setDark, resetTheme, toggleTheme };
};

export default useTheme;
