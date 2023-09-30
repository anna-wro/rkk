import { useState, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

const useFontSize = () => {
  const { getItem, setItem } = useLocalStorage();
  const [fontSize, setFontSize] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initialFontSize = Number(getItem('fontSize')) || 16;
    setFontSize(initialFontSize);
    setIsInitialized(true);
  }, [getItem]);

  useEffect(() => {
    if (fontSize !== null) {
      const root = document.getElementsByTagName('html')[0];
      root.style.setProperty('font-size', `${fontSize}px`);
      setItem('fontSize', fontSize);
    }
  }, [fontSize, setItem]);

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
