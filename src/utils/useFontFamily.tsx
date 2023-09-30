import { useState, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

const useFontFamily = () => {
  const defaultFontFamily = 'Lato, sans-serif';
  const { getItem, setItem } = useLocalStorage();
  const [fontFamily, setFontFamily] = useState(defaultFontFamily);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const storedFontFamily = getItem('fontFamily');
    setFontFamily(storedFontFamily ? storedFontFamily : defaultFontFamily);
    setIsInitialized(true);
  }, [getItem]);

  useEffect(() => {
    const root = document.getElementsByTagName('html')[0];
    root.style.setProperty('font-family', fontFamily, 'important');
    setItem('fontFamily', fontFamily);
  }, [fontFamily, setItem]);

  const setSerif = () => setFontFamily('NotoSerif, serif');
  const setSansSerif = () => setFontFamily('Lato, sans-serif');
  const resetFontFamily = () => setFontFamily(defaultFontFamily);

  return { fontFamily, setSerif, setSansSerif, resetFontFamily, isInitialized };
};

export default useFontFamily;
