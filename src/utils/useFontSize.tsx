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

  const [fontSize, setFontSize] = useState(16); // Set a default font size

  useEffect(() => {
    // Update the font size from local storage after the component has mounted
    const storedFontSize = getItem('fontSize');
    setFontSize(storedFontSize ? Number(storedFontSize) : 16);
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

  return { fontSize, increaseFontSize, decreaseFontSize };
};

export default useFontSize;
