import React from 'react';

type RolesType = Readonly<{
  children: string;
}>;

// Versicle
export const V = ({ children }: RolesType) => {
  return (
    <div className="flex">
      <div className="w-7 flex-shrink-0">K.</div>
      <div>{children}</div>
    </div>
  );
};
