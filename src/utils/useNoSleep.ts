import NoSleep from 'nosleep';
import { useEffect, useMemo, useState } from 'react';

export const useNoSleep = (enabled: boolean) => {
  const [alreadyEnabled, setAlreadyEnabled] = useState(false);
  const noSleep = useMemo(() => new NoSleep(), []);

  useEffect(() => {
    if (alreadyEnabled === enabled) {
      return;
    }

    enabled ? noSleep.enable() : noSleep.disable();
    setAlreadyEnabled(enabled);

    return () => {
      noSleep.disable();
    };
  }, [alreadyEnabled, enabled, noSleep]);
};

export default useNoSleep;
