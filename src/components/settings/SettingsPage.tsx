import React from 'react';
import GoBackButton from 'components/layout/GoBackButton';
import { Header } from 'components/mdxOverrides';
import copy from 'consts/copy';
import useFontSize from 'utils/useFontSize';

export default function SettingsPage() {
  const { fontSize, increaseFontSize, decreaseFontSize } = useFontSize();

  const buttonClass =
    'flex items-center content-center text-white bg-green hover:bg-green-600 rounded-full p-2 w-6 h-6 cursor-pointer';

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
          <button className={buttonClass} onClick={decreaseFontSize}>
            -
          </button>
          <button className={buttonClass} onClick={increaseFontSize}>
            +
          </button>
        </div>
        <GoBackButton />
      </div>
    </>
  );
}
