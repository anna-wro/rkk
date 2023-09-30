import React from 'react';

export const FlashMessage = ({ text }: { text: string }) => (
  <div className="fixed top-0 right-0 w-full bg-green-500 py-2 px-4 text-center text-white text-md">
    {text}
  </div>
);
