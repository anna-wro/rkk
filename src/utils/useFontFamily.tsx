import { useState, useEffect } from 'react';

const useFontFamily = () => {
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

  const [fontFamily, setFontFamily] = useState(
    () => getItem('fontFamily') ?? 'Lato, sans-serif',
  );

  useEffect(() => {
    const root = document.getElementsByTagName('html')[0];
    root.style.setProperty('font-family', fontFamily);
    setItem('fontFamily', fontFamily);
  }, [fontFamily]);

  const setSerif = () => setFontFamily('NotoSerif, serif');
  const setSansSerif = () => setFontFamily('Lato, sans-serif');

  return { fontFamily, setSerif, setSansSerif };
};

export default useFontFamily;
