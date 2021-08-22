import React from 'react';

type RolesType = Readonly<{
  children: string;
}>;

// Response
export const R = ({ children }: RolesType) => {
  return (
    <div className="flex font-bold">
      <div className="w-7 flex-shrink-0">W.</div>
      <div>{children}</div>
    </div>
  );
};
