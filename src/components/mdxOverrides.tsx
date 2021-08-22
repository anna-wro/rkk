import cx from 'classnames';
import React from 'react';

type SectionType = Readonly<{
  sigla?: string;
  spacedTop?: string;
  children: React.ReactNode;
}>;

export const Header = ({ children }) => (
  <h1 className="font-bold text-xl mt-4 mb-6 md:mr-32">{children}</h1>
);

export const Section = ({
  children,
  sigla,
  spacedTop = 'mt-6',
}: SectionType) => (
  <h2
    className={cx('font-bold text-l tracking-wide uppercase mb-2', spacedTop, {
      'inline-block': sigla,
    })}
  >
    {children}{' '}
    {sigla && <span className="font-light normal-case">| {sigla}</span>}
  </h2>
);

export const ListItem = ({ children }) => <li className="pl-3">{children}</li>;

export const Intercessions = ({ children }) => (
  <ol className="space-y-2 -ml-3">{children}</ol>
);

export const List = ({ children }) => (
  <ol className="list-decimal mb-3 ml-4 space-y-2">{children}</ol>
);
