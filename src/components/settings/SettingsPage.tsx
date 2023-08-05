import React from 'react';
import GoBackButton from 'components/layout/GoBackButton';
import { Header } from 'components/mdxOverrides';
import copy from 'consts/copy';
import useFontSize from 'utils/useFontSize';
import useFontFamily from 'utils/useFontFamily';

const cssClasses = {
  fontSizeButton:
    'flex items-center justify-center text-white rounded-full p-2 w-8 h-8',
  enabledButton: 'bg-green-500 hover:bg-green-600 cursor-pointer',
  disabledButton: 'bg-gray-400 cursor-default',
  fontButton:
    'text-white bg-green-500 hover:bg-green-600 cursor-pointer p-2 rounded-lg',
  resetButton:
    'text-red-500 bg-white hover:text-red-600 hover:bg-gray-50 cursor-pointer p-2 rounded-lg mb-20',
};

export default function SettingsPage() {
  const { fontSize, increaseFontSize, decreaseFontSize, resetFontSize } =
    useFontSize();
  const { fontFamily, setSerif, setSansSerif, resetFontFamily } =
    useFontFamily();

  const resetSettings = () => {
    resetFontSize();
    resetFontFamily();
  };

  const isMaxSize = fontSize >= 60;
  const isMinSize = fontSize <= 10;

  return (
    <>
      <div className="relative whitespace-pre-line">
        <div className="md:absolute top-0 right-0 mb-4">
          <GoBackButton title={copy.settings.goBackButton} />
        </div>
        <Header>{copy.settings.headline}</Header>
      </div>
      <div className="section">
        <div className="flex flex-col items-center content-center space-y-5 mb-5">
          <div className="flex items-center content-center bg-gray-50 bg-opacity-60 p-4 rounded-lg">
            <div>{copy.preview}</div>
          </div>
          <div className="flex space-x-4">
            <button
              className={`${cssClasses.fontSizeButton} ${
                isMinSize ? cssClasses.disabledButton : cssClasses.enabledButton
              }`}
              onClick={decreaseFontSize}
              disabled={isMinSize}
            >
              -
            </button>
            <span className="text-lg">{fontSize} px</span>
            <button
              className={`${cssClasses.fontSizeButton} ${
                isMaxSize ? cssClasses.disabledButton : cssClasses.enabledButton
              }`}
              onClick={increaseFontSize}
              disabled={isMaxSize}
            >
              +
            </button>
          </div>
          <div className="flex space-x-4">
            <button
              className={`${cssClasses.fontButton} ${
                fontFamily.includes('Lato') ? 'bg-green-700' : ''
              }`}
              style={{ fontFamily: 'Lato, sans-serif' }}
              onClick={setSansSerif}
            >
              Lato
            </button>
            <button
              className={`${cssClasses.fontButton} ${
                fontFamily.includes('NotoSerif') ? 'bg-green-700' : ''
              }`}
              style={{ fontFamily: 'NotoSerif, serif' }}
              onClick={setSerif}
            >
              NotoSerif
            </button>
          </div>
        </div>
        <button className={cssClasses.resetButton} onClick={resetSettings}>
          {copy.resetSettings}
        </button>
        <GoBackButton />
      </div>
    </>
  );
}
