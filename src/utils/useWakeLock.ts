import { useEffect } from 'react';
import { useWakeLock as useWakeLockHook } from 'react-screen-wake-lock';

export const useWakeLock = () => {
  const { request, release } = useWakeLockHook();

  useEffect(() => {
    const visibilityChangeHandler = () => {
      if (!document.hidden) request();
      else release();
    };

    request();
    document.addEventListener('visibilitychange', visibilityChangeHandler);

    return () => {
      release();
      document.removeEventListener('visibilitychange', visibilityChangeHandler);
    };
  }, [release, request]);
};
