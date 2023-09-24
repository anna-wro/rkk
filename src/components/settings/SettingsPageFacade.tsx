import React from 'react';
import GoBackButton from 'components/layout/GoBackButton';
import { Header } from 'components/mdxOverrides';
import copy from 'consts/copy';
import useFontSize from 'utils/useFontSize';
import useFontFamily from 'utils/useFontFamily';
import useTheme from 'utils/useTheme';
import { FontSizeControls } from './FontSizeControls';
import { FontFamilyControls } from './FontFamilyControls';
import { ThemeControls } from './ThemeControls';
import { ResetControls } from './ResetControls';

export default function SettingsPageFacade() {
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
          <FontSizeControls
            fontSize={fontSize}
            increaseFontSize={increaseFontSize}
            decreaseFontSize={decreaseFontSize}
          />
          <div className="mb-2 font-semibold self-start">{copy.fontLabel}</div>
          <FontFamilyControls
            fontFamily={fontFamily}
            setSerif={setSerif}
            setSansSerif={setSansSerif}
          />
          <div className="mb-2 font-semibold self-start">{copy.theme}</div>
          <ThemeControls theme={theme} toggleTheme={toggleTheme} />
        </div>
        <ResetControls resetSettings={resetSettings} />
        <GoBackButton />
      </div>
    </>
  );
}
