import React from 'react';
import { styles } from './styles';

interface ThemeControlsProps {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeControls: React.FC<ThemeControlsProps> = ({
  theme,
  toggleTheme,
}) => (
  <button className={styles.themeButton} onClick={toggleTheme}>
    {theme === 'light' ? 'Przełącz na ciemny' : 'Przełącz na jasny'}
  </button>
);
