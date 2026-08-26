import React from 'react';
import copy from 'consts/copy';
import { styles } from './styles';

interface Props {
  onCleared?: () => void;
}

export const ClearCacheControls: React.FC<Props> = ({ onCleared }) => {
  const handleClearCache = () => {
    try {
      // remove known app keys
      const keysToRemove = [
        'fontSize',
        'fontFamily',
        'theme',
        'optionalContent',
      ];
      keysToRemove.forEach(k => localStorage.removeItem(k));
      // optionally, clear all localStorage entries related to the app prefix if used
      // localStorage.clear(); // <-- avoid full clear to be less destructive

      // Force a reload to fetch data again
      // Use location.reload(true) is deprecated; use reload without cache by updating URL
      // We'll reload normally which should re-run data fetching on start
      if (typeof window !== 'undefined') {
        window.location.reload();
      }
    } catch (e) {
      /* Error clearing cache. Optionally, handle error reporting here. */
    } finally {
      if (onCleared) onCleared();
    }
  };

  // Use explicit class string to avoid TypeScript errors if styles type is narrow
  const className =
    styles.clearCacheButton ||
    'text-white cursor-pointer px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 mb-6';

  return (
    <button className={className} onClick={handleClearCache}>
      {copy.settings['clearCache'] || 'Wyczyść cache'}
    </button>
  );
};

export default ClearCacheControls;
