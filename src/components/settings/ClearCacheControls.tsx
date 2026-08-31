import React, { useEffect, useRef } from 'react';
import copy from 'consts/copy';
import { styles } from './styles';

const CACHE_CLEARED_FLAG = 'cacheClearedFlag';

interface Props {
  onCleared?: () => void;
}

export const ClearCacheControls: React.FC<Props> = ({ onCleared }) => {
  const onClearedRef = useRef(onCleared);

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      sessionStorage.getItem(CACHE_CLEARED_FLAG)
    ) {
      sessionStorage.removeItem(CACHE_CLEARED_FLAG);
      if (onClearedRef.current) onClearedRef.current();
    }
  }, []);

  const handleClearCache = () => {
    try {
      const keysToRemove = [
        'fontSize',
        'fontFamily',
        'theme',
        'optionalContent',
      ];
      keysToRemove.forEach(k => localStorage.removeItem(k));

      if (typeof window !== 'undefined') {
        sessionStorage.setItem(CACHE_CLEARED_FLAG, '1');
        window.location.reload();
      }
    } catch (e) {
      /* Error clearing cache. Optionally, handle error reporting here. */
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
