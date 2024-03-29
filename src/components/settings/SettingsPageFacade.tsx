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
import { useFlashMessage } from 'components/useFlashMessage';
import { FlashMessage } from './FlashMessage';

export default function SettingsPageFacade() {
  const { message, showFlashMessage } = useFlashMessage();
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
    showFlashMessage(copy.settings.preferencesSaved);
  };

  const handleDecreaseFontSize = () => {
    decreaseFontSize();
    showFlashMessage(copy.settings.preferencesSaved);
  };

  const handleSetSerif = () => {
    setSerif();
    showFlashMessage(copy.settings.preferencesSaved);
  };

  const handleSetSansSerif = () => {
    setSansSerif();
    showFlashMessage(copy.settings.preferencesSaved);
  };

  const handleToggleTheme = () => {
    toggleTheme();
    showFlashMessage(copy.settings.preferencesSaved);
  };

  const handleToggleIntercessions = () => {
    toggleIntercessions();
    showFlashMessage(copy.settings.preferencesSaved);
  };

  const handleToggleExaminationOfConscience = () => {
    toggleExaminationOfConscience();
    showFlashMessage(copy.settings.preferencesSaved);
  };

  const resetSettings = () => {
    resetFontSize();
    resetFontFamily();
    resetTheme();
    resetOptionalContent();
    showFlashMessage(copy.settings.preferencesDefault);
  };

  return (
    <div className="mt-4">
      {message && <FlashMessage text={message} />}
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
    </div>
  );
}
