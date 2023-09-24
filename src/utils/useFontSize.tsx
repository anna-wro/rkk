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

  const [fontSize, setFontSize] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initialFontSize = Number(getItem('fontSize')) || 16;
    setFontSize(initialFontSize);
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (fontSize !== null) {
      const root = document.getElementsByTagName('html')[0];
      root.style.setProperty('font-size', `${fontSize}px`);
      setItem('fontSize', fontSize);
    }
  }, [fontSize]);

  const increaseFontSize = () => {
    if (fontSize < 60) {
      setFontSize(prevFontSize => prevFontSize + 2);
    }
  };

  const decreaseFontSize = () => {
    if (fontSize > 10) {
      setFontSize(prevFontSize => prevFontSize - 2);
    }
  };

  const resetFontSize = () => setFontSize(16);

  return {
    fontSize,
    increaseFontSize,
    decreaseFontSize,
    resetFontSize,
    isInitialized,
  };
};

export default useFontSize;
