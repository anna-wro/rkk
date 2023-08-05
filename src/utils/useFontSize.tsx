import { useState, useEffect } from 'react';

const useFontSize = () => {
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

  const [fontSize, setFontSize] = useState(
    () => Number(getItem('fontSize')) ?? 16,
  );

  useEffect(() => {
    const root = document.getElementsByTagName('html')[0];
    root.style.setProperty('font-size', `${fontSize}px`);
    setItem('fontSize', fontSize);
  }, [fontSize]);

  const increaseFontSize = () => {
    if (fontSize < 40) {
      setFontSize(prevFontSize => prevFontSize + 2);
    }
  };

  const decreaseFontSize = () => {
    if (fontSize > 10) {
      setFontSize(prevFontSize => prevFontSize - 2);
    }
  };

  const resetFontSize = () => setFontSize(16);

  return { fontSize, increaseFontSize, decreaseFontSize, resetFontSize };
};

export default useFontSize;
