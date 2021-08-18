import cx from 'classnames';
import React from 'react';

type SectionType = Readonly<{
  inline?: boolean;
  children: React.ReactNode;
}>;

export const Header = ({ children }) => (
  <h1 className="font-bold text-xl mt-4 mb-6 md:mr-32">{children}</h1>
);

export const Section = ({ children, inline }: SectionType) => (
  <h2
    className={cx('font-bold text-l tracking-wide uppercase mt-6 mb-2', {
      'inline-block': inline,
    })}
  >
    {children}
  </h2>
);

export const ListItem = ({ children }) => <li className="pl-3">{children}</li>;

export const List = ({ children }) => (
  <ol className="list-decimal mb-3 ml-4 space-y-2">{children}</ol>
);
