import { useState, useEffect } from 'react';

const useFontFamily = () => {
  const defaultFontFamily = 'Lato, sans-serif';

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

  const [fontFamily, setFontFamily] = useState(defaultFontFamily);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const storedFontFamily = getItem('fontFamily');
    setFontFamily(storedFontFamily ? storedFontFamily : defaultFontFamily);
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    const root = document.getElementsByTagName('html')[0];
    root.style.setProperty('font-family', fontFamily, 'important');
    setItem('fontFamily', fontFamily);
  }, [fontFamily]);

  const setSerif = () => setFontFamily('NotoSerif, serif');
  const setSansSerif = () => setFontFamily('Lato, sans-serif');
  const resetFontFamily = () => setFontFamily(defaultFontFamily);

  return { fontFamily, setSerif, setSansSerif, resetFontFamily, isInitialized };
};

export default useFontFamily;
