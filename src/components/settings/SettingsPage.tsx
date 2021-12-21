import React from 'react';
import GoBackButton from 'components/layout/GoBackButton';
import { Header } from 'components/mdxOverrides';
import copy from 'consts/copy';

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

export default function SettingsPage() {
  const [fontSize, setFontSize] = React.useState(
    () => getItem('fontSize') ?? 16,
  );

  React.useEffect(() => {
    const root = document.getElementsByTagName('html')[0];
    root.style.setProperty('font-size', `${fontSize}px`);
  }, [fontSize]);

  const buttonClass =
    'flex items-center content-center text-white bg-green hover:bg-green-600 rounded-full p-2 w-6 h-6 cursor-pointer';
  const handleFontDecrease = () => {
    setFontSize(Number(fontSize) - 2);
    setItem('fontSize', fontSize);
  };
  const handleFontIncrease = () => {
    setFontSize(Number(fontSize) + 2);
    setItem('fontSize', fontSize);
  };
  // TODO read it on page load
  // TODO Format buttons
  // TODO Reset settings
  return (
    <>
      <div className="relative whitespace-pre-line">
        <div className="md:absolute top-0 right-0 mb-4">
          <GoBackButton title={copy.settings.goBackButton} />
        </div>
        <Header>{copy.settings.headline}</Header>
      </div>
      <div className="section">
        <div className="flex items-center content-center space-x-2">
          <div className="flex items-center content-center bg-gray-50 bg-opacity-60 p-4 rounded-lg">
            <div>Rozmiar tekstu: {fontSize}px</div>
          </div>
          <button className={buttonClass} onClick={handleFontDecrease}>
            -
          </button>
          <button className={buttonClass} onClick={handleFontIncrease}>
            +
          </button>
        </div>
        <GoBackButton />
      </div>
    </>
  );
}
