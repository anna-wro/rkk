import React from 'react';
import { styles } from './styles';
import copy from 'consts/copy';

interface ResetControlsProps {
  resetSettings: () => void;
}

export const ResetControls: React.FC<ResetControlsProps> = ({
  resetSettings,
}) => (
  <button className={styles.resetButton} onClick={resetSettings}>
    {copy.settings.resetSettings}
  </button>
);
