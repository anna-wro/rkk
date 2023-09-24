import React from 'react';
import { styles } from './styles';

interface FontFamilyControlsProps {
  fontFamily: string;
  setSerif: () => void;
  setSansSerif: () => void;
}

export const FontFamilyControls: React.FC<FontFamilyControlsProps> = ({
  fontFamily,
  setSerif,
  setSansSerif,
}) => (
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
);
