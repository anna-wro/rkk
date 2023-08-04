import React from 'react';
import GoBackButton from 'components/layout/GoBackButton';
import { Header } from 'components/mdxOverrides';
import copy from 'consts/copy';
import useFontSize from 'utils/useFontSize';
import useFontFamily from 'utils/useFontFamily';

export default function SettingsPage() {
  const { fontSize, increaseFontSize, decreaseFontSize, resetFontSize } =
    useFontSize();
  const { fontFamily, setSerif, setSansSerif, resetFontFamily } =
    useFontFamily();
  const resetSettings = () => {
    resetFontSize();
    resetFontFamily();
  };

  const buttonClass =
    'flex items-center content-center text-white bg-green hover:bg-green-600 rounded-full p-2 w-6 h-6 cursor-pointer';
  const fontButtonClass =
    'text-white bg-green hover:bg-green-600 cursor-pointer p-2 rounded-lg';
  const resetButtonClass =
    'text-red-500 bg-white hover:text-red-600 hover:bg-gray-50 cursor-pointer p-2 rounded-lg mb-20';

  return (
    <>
      <div className="relative whitespace-pre-line">
        <div className="md:absolute top-0 right-0 mb-4">
          <GoBackButton title={copy.settings.goBackButton} />
        </div>
        <Header>{copy.settings.headline}</Header>
      </div>
      <div className="section">
        <div className="flex items-center content-center space-x-2 mb-5">
          <div className="flex items-center content-center bg-gray-50 bg-opacity-60 p-4 rounded-lg">
            <div>Rozmiar tekstu: {fontSize}px</div>
          </div>
          <button className={buttonClass} onClick={decreaseFontSize}>
            -
          </button>
          <button className={buttonClass} onClick={increaseFontSize}>
            +
          </button>
        </div>
        <div className="flex items-center content-center space-x-2 mb-5">
          <div className="flex items-center content-center bg-gray-50 bg-opacity-60 p-4 rounded-lg">
            <div>Font: {fontFamily}</div>
          </div>
          <button className={fontButtonClass} onClick={setSerif}>
            Serif
          </button>
          <button className={fontButtonClass} onClick={setSansSerif}>
            Sans-Serif
          </button>
        </div>
        <button className={resetButtonClass} onClick={resetSettings}>
          {copy.resetSettings}
        </button>
        <GoBackButton />
      </div>
    </>
  );
}
