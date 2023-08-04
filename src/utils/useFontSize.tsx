import { useState, useEffect } from 'react';

const useFontSize = () => {
  const defaultFontSize = 16;

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

  const [fontSize, setFontSize] = useState(defaultFontSize);

  useEffect(() => {
    const storedFontSize = getItem('fontSize');
    setFontSize(storedFontSize ? Number(storedFontSize) : defaultFontSize);
  }, []);

  useEffect(() => {
    const root = document.getElementsByTagName('html')[0];
    root.style.setProperty('font-size', `${fontSize}px`);
    setItem('fontSize', fontSize.toString());
  }, [fontSize]);

  const increaseFontSize = () =>
    setFontSize(prevFontSize => Number(prevFontSize) + 2);
  const decreaseFontSize = () =>
    setFontSize(prevFontSize => Number(prevFontSize) - 2);
  const resetFontSize = () => setFontSize(defaultFontSize);

  return { fontSize, increaseFontSize, decreaseFontSize, resetFontSize };
};

export default useFontSize;
