import { useCallback } from 'react';

export const useLocalStorage = (onSave?: () => void) => {
  const getItem = useCallback((key: string): string | null => {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  }, []);

  const setItem = useCallback(
    (key: string, value: string): void => {
      try {
        localStorage.setItem(key, value);
        onSave?.();
      } catch {}
    },
    [onSave],
  );

  return { getItem, setItem };
};
