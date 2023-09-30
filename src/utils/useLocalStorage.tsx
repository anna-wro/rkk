import { useCallback } from 'react';

export const useLocalStorage = () => {
  const getItem = useCallback((key: string): string | null => {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  }, []);

  const setItem = useCallback((key: string, value: string): void => {
    try {
      localStorage.setItem(key, value);
    } catch {}
  }, []);

  return { getItem, setItem };
};
