import React from 'react';
import { styles } from './styles';

interface FontSizeControlsProps {
  fontSize: number;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
}

export const FontSizeControls: React.FC<FontSizeControlsProps> = ({
  fontSize,
  increaseFontSize,
  decreaseFontSize,
}) => (
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
);
