import React from 'react';
import { styles } from './styles';

interface ResetControlsProps {
  resetSettings: () => void;
}

export const ResetControls: React.FC<ResetControlsProps> = ({
  resetSettings,
}) => (
  <button className={styles.resetButton} onClick={resetSettings}>
    Przywróć domyślne ustawienia
  </button>
);
