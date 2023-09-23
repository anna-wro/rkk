import { useState, useEffect } from 'react';

const useTheme = () => {
  const isBrowser = typeof window !== 'undefined';

  const prefersDarkScheme = () => {
    if (isBrowser) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  };

  const defaultTheme = prefersDarkScheme() ? 'dark' : 'light';

  const getItem = key => {
    try {
      return localStorage.getItem(key);
    } catch {}
  };

  const setItem = (key, value) => {
    try {
      return localStorage.setItem(key, value);
    } catch {}
  };

  const [theme, setThemeState] = useState(getItem('theme') || defaultTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    setItem('theme', theme);
  }, [theme]);

  const setLight = () => setThemeState('light');
  const setDark = () => setThemeState('dark');
  const resetTheme = () => setThemeState(defaultTheme);
  const toggleTheme = () => {
    theme === 'light' ? setDark() : setLight();
  };

  return { theme, setLight, setDark, resetTheme, toggleTheme };
};

export default useTheme;
