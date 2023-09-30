import { useState } from 'react';

let messageTimeout;

export const useFlashMessage = () => {
  const [message, setMessage] = useState(null);

  const showFlashMessage = (msg: string) => {
    if (messageTimeout) {
      clearTimeout(messageTimeout);
    }
    setMessage(msg);
    messageTimeout = setTimeout(() => {
      setMessage(null);
    }, 3000);
  };

  return { message, showFlashMessage };
};
