import React from 'react';
import GoBackButton from 'components/layout/GoBackButton';
import { Header } from 'components/mdxOverrides';
import copy from 'consts/copy';
import useFontSize from 'utils/useFontSize';
import useFontFamily from 'utils/useFontFamily';
import useTheme from 'utils/useTheme';

const cssClasses = {
  fontSizeButton:
    'flex items-center justify-center text-white rounded-full p-2 w-8 h-8',
  enabledButton: 'bg-blue-500 hover:bg-blue-600 cursor-pointer',
  disabledButton: 'bg-gray-400 cursor-default',
  fontButton:
    'text-white bg-blue-500 hover:bg-blue-600 cursor-pointer p-2 rounded-lg',
  resetButton:
    'bg-orange-500 text-white hover:bg-orange-600 cursor-pointer p-2 rounded-lg mb-20',
  themeButton:
    'text-white bg-blue-500 hover:bg-blue-600 cursor-pointer p-2 rounded-lg',
};

export default function SettingsPage() {
  const { fontSize, increaseFontSize, decreaseFontSize, resetFontSize } =
    useFontSize();
  const { fontFamily, setSerif, setSansSerif, resetFontFamily } =
    useFontFamily();
  const { theme, resetTheme, toggleTheme } = useTheme();

  const resetSettings = () => {
    resetFontSize();
    resetFontFamily();
    resetTheme();
  };

  return (
    <>
      <div className="relative whitespace-pre-line">
        <div className="md:absolute top-0 right-0 mb-4">
          <GoBackButton title={copy.settings.goBackButton} />
        </div>
        <Header>{copy.settings.headline}</Header>
      </div>
      <div className="section">
        <div className="flex flex-col items-center content-center space-y-5 mb-20">
          <div className="flex items-center content-center bg-gray-50 bg-opacity-60 p-4 rounded-lg mb-2">
            <div>{copy.preview}</div>
          </div>
          <div className="mb-2 font-semibold self-start">
            {copy.fontSizeLabel}
          </div>
          <div className="flex space-x-4">
            <button
              className={`${cssClasses.fontSizeButton} ${
                fontSize <= 10
                  ? cssClasses.disabledButton
                  : cssClasses.enabledButton
              }`}
              onClick={decreaseFontSize}
              disabled={fontSize <= 10}
            >
              -
            </button>
            <span className="text-lg">{fontSize} px</span>
            <button
              className={`${cssClasses.fontSizeButton} ${
                fontSize >= 60
                  ? cssClasses.disabledButton
                  : cssClasses.enabledButton
              }`}
              onClick={increaseFontSize}
              disabled={fontSize >= 60}
            >
              +
            </button>
          </div>
          <div className="mb-2 font-semibold self-start">{copy.fontLabel}</div>
          <div className="flex space-x-4">
            <button
              className={`${cssClasses.fontButton} ${
                fontFamily.includes('Lato') ? 'bg-blue-700' : ''
              }`}
              style={{ fontFamily: 'Lato, sans-serif' }}
              onClick={setSansSerif}
            >
              Lato
            </button>
            <button
              className={`${cssClasses.fontButton} ${
                fontFamily.includes('NotoSerif') ? 'bg-blue-700' : ''
              }`}
              style={{ fontFamily: 'NotoSerif, serif' }}
              onClick={setSerif}
            >
              NotoSerif
            </button>
          </div>
          <div className="mb-2 font-semibold self-start">{copy.theme}</div>
          <button className={cssClasses.themeButton} onClick={toggleTheme}>
            {theme === 'light' ? copy.switchToDark : copy.switchToLight}
          </button>
        </div>
        <button className={cssClasses.resetButton} onClick={resetSettings}>
          {copy.resetSettings}
        </button>
        <GoBackButton />
      </div>
    </>
  );
}
