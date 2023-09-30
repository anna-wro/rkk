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
import { OptionalContentControls } from './OptionalContentControls';
import useOptionalContent from 'utils/useOptionalContent';
import { useFlashMessage } from 'components/FlashMessageContext';
import { useDebounce } from 'utils/useDebounce';

export default function SettingsPageFacade() {
  const showFlashMessage = useFlashMessage();

  const debouncedShowSavedMessage = useDebounce(() => {
    showFlashMessage(copy.settings.preferencesSaved);
  }, 300);

  const debouncedShowDefaultMessage = useDebounce(() => {
    showFlashMessage(copy.settings.preferencesDefault);
  }, 300);

  const { fontSize, increaseFontSize, decreaseFontSize, resetFontSize } =
    useFontSize();
  const { fontFamily, setSerif, setSansSerif, resetFontFamily } =
    useFontFamily();
  const { theme, resetTheme, toggleTheme } = useTheme();
  const {
    optionalContent,
    toggleIntercessions,
    toggleExaminationOfConscience,
    resetOptionalContent,
  } = useOptionalContent();

  const handleIncreaseFontSize = () => {
    increaseFontSize();
    debouncedShowSavedMessage();
  };

  const handleDecreaseFontSize = () => {
    decreaseFontSize();
    debouncedShowSavedMessage();
  };

  const handleSetSerif = () => {
    setSerif();
    debouncedShowSavedMessage();
  };

  const handleSetSansSerif = () => {
    setSansSerif();
    debouncedShowSavedMessage();
  };

  const handleToggleTheme = () => {
    toggleTheme();
    debouncedShowSavedMessage();
  };

  const handleToggleIntercessions = () => {
    toggleIntercessions();
    debouncedShowSavedMessage();
  };

  const handleToggleExaminationOfConscience = () => {
    toggleExaminationOfConscience();
    debouncedShowSavedMessage();
  };

  const resetSettings = () => {
    resetFontSize();
    resetFontFamily();
    resetTheme();
    resetOptionalContent();
    debouncedShowDefaultMessage();
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
            <div>{copy.settings.preview}</div>
          </div>
          <div className="mb-2 font-semibold self-start">
            {copy.settings.fontSizeLabel}
          </div>
          <FontSizeControls
            fontSize={fontSize}
            increaseFontSize={handleIncreaseFontSize}
            decreaseFontSize={handleDecreaseFontSize}
          />
          <div className="mb-2 font-semibold self-start">
            {copy.settings.fontLabel}
          </div>
          <FontFamilyControls
            fontFamily={fontFamily}
            setSerif={handleSetSerif}
            setSansSerif={handleSetSansSerif}
          />
          <div className="mb-2 font-semibold self-start">
            {copy.settings.theme}
          </div>
          <ThemeControls theme={theme} toggleTheme={handleToggleTheme} />
          <div className="mb-2 font-semibold self-start">
            {copy.settings.optionalContentLabel}
          </div>
          <OptionalContentControls
            optionalContent={optionalContent}
            toggleIntercessions={handleToggleIntercessions}
            toggleExaminationOfConscience={handleToggleExaminationOfConscience}
          />
        </div>
        <ResetControls resetSettings={resetSettings} />
        <GoBackButton />
      </div>
    </>
  );
}
