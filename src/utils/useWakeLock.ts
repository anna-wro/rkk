import { useEffect } from 'react';
import { useWakeLock as useWakeLockHook } from 'react-screen-wake-lock';

export const useWakeLock = () => {
  const { request, release } = useWakeLockHook();

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden) request();
      else release();
    };

    request();
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      release();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [release, request]);
};
