import React from 'react';
import GoBackButton from 'components/layout/GoBackButton';
import { Header } from 'components/mdxOverrides';
import copy from 'consts/copy';
import useFontSize from 'utils/useFontSize';
import useFontFamily from 'utils/useFontFamily';
import useTheme from 'utils/useTheme';
import { styles } from './styles';

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
              className={`${styles.fontSizeButton} ${
                fontSize <= 10 ? styles.disabledButton : styles.enabledButton
              }`}
              onClick={decreaseFontSize}
              disabled={fontSize <= 10}
            >
              -
            </button>
            <span className="text-lg">{fontSize} px</span>
            <button
              className={`${styles.fontSizeButton} ${
                fontSize >= 60 ? styles.disabledButton : styles.enabledButton
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
              className={`${styles.fontButton} ${
                fontFamily.includes('Lato') ? 'bg-blue-700' : ''
              }`}
              style={{ fontFamily: 'Lato, sans-serif' }}
              onClick={setSansSerif}
            >
              Lato
            </button>
            <button
              className={`${styles.fontButton} ${
                fontFamily.includes('NotoSerif') ? 'bg-blue-700' : ''
              }`}
              style={{ fontFamily: 'NotoSerif, serif' }}
              onClick={setSerif}
            >
              NotoSerif
            </button>
          </div>
          <div className="mb-2 font-semibold self-start">{copy.theme}</div>
          <button className={styles.themeButton} onClick={toggleTheme}>
            {theme === 'light' ? copy.switchToDark : copy.switchToLight}
          </button>
        </div>
        <button className={styles.resetButton} onClick={resetSettings}>
          {copy.resetSettings}
        </button>
        <GoBackButton />
      </div>
    </>
  );
}
