import React from 'react';

type WeeklyRotationType = Readonly<{
  children: React.ReactChildren[];
}>;

export const WeeklyRotation = ({ children }: WeeklyRotationType) => {
  const currentDate = new Date();
  const yearStartDate = new Date(currentDate.getFullYear(), 0, 1);
  const days = Math.floor(
    (currentDate.getTime() - yearStartDate.getTime()) / (24 * 60 * 60 * 1000),
  );
  const weekNumber = Math.ceil(days / 14);

  return <>{children[weekNumber % children.length]}</>;
};
