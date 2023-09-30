import React, { createContext, useContext, useState } from 'react';
import { FlashMessage } from './settings/FlashMessage';

let messageTimeout;
const FlashMessageContext = createContext(null);

export const useFlashMessage = () => {
  return useContext(FlashMessageContext);
};

export const FlashMessageProvider = ({ children }) => {
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

  return (
    <FlashMessageContext.Provider value={showFlashMessage}>
      {children}
      {message && <FlashMessage text={message} />}
    </FlashMessageContext.Provider>
  );
};
