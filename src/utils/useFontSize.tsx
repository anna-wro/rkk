import { useState, useEffect } from 'react';

const useFontSize = () => {
  const getItem = key => {
    try {
      return localStorage.getItem(key);
    } catch {}
  };

  const setItem = (key: string, value: string) => {
    try {
      return localStorage.setItem(key, value);
    } catch {}
  };

  const [fontSize, setFontSize] = useState(() => getItem('fontSize') ?? 16);

  useEffect(() => {
    const root = document.getElementsByTagName('html')[0];
    root.style.setProperty('font-size', `${fontSize}px`);
    setItem('fontSize', fontSize.toString());
  }, [fontSize]);

  const increaseFontSize = () =>
    setFontSize(prevFontSize => Number(prevFontSize) + 2);
  const decreaseFontSize = () =>
    setFontSize(prevFontSize => Number(prevFontSize) - 2);

  return { fontSize, increaseFontSize, decreaseFontSize };
};

export default useFontSize;
