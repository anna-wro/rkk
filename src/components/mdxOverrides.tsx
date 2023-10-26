import cx from 'classnames';
import React from 'react';

type SectionType = Readonly<{
  sigla?: string;
  spacedTop?: string;
  uppercase?: boolean;
  children: React.ReactNode;
}>;

export const Header = ({ children }) => (
  <h1 className="font-bold text-xl mb-6 md:mr-32 section">{children}</h1>
);

export const Section = ({
  children,
  sigla,
  spacedTop = 'section',
  uppercase = true,
}: SectionType) => (
  <h2
    className={cx('font-bold text-l tracking-wide mb-2', {
      [spacedTop]: spacedTop,
      uppercase: uppercase,
      'inline-block': sigla,
    })}
  >
    {children}{' '}
    {sigla && <span className="font-light normal-case">| {sigla}</span>}
  </h2>
);

export const ListItem = ({ children }) => (
  <li className="pl-3">
    <div className="flex items-center">{children}</div>
  </li>
);

export const Intercessions = ({ children }) => (
  <ol className="space-y-2 -ml-3">{children}</ol>
);

export const List = ({ children }) => (
  <ol className="list-decimal mb-3 ml-4 space-y-2">{children}</ol>
);
