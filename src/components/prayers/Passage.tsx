import { Section } from 'components/mdxOverrides';
import React from 'react';
import { Note } from './Note';

type PassageType = Readonly<{
  sigla: string;
  passage?: React.ReactNode;
  type?: string;
  uppercase?: boolean;
  className?: string;
  headline?: string;
  intro?: string;
  outro?: string;
  acclamation?: string;
  title?: string;
  children?: React.ReactNode;
}>;

export const Passage = ({
  passage,
  sigla,
  type = '',
  uppercase = true,
  headline,
  intro,
  outro,
  acclamation,
  title,
  children,
  className,
}: PassageType) => {
  if (!headline) {
    switch (type) {
      case 'first':
        headline = 'Czytanie pierwsze';
        break;
      case 'second':
        headline = 'Czytanie drugie';
        break;
      default:
        headline = `Czytanie ${type}`;
    }
  }

  if (!passage) {
    passage = children;
  }

  return (
    <div className={className}>
      <Section sigla={sigla} spacedTop="mt-0" uppercase={uppercase}>
        {headline}
      </Section>
      {acclamation && (
        <div className="flex my-2">
          <div className="flex-shrink-0 font-bold">Aklamacja:</div>
          <div className="ml-2">{acclamation}</div>
        </div>
      )}
      {title && <Note>{title}</Note>}
      <div className="space-y-2">
        {intro && <p>{intro}</p>}
        {passage}
        {outro && <p>{outro}</p>}
      </div>
      {acclamation && (
        <div className="flex my-2">
          <div className="flex-shrink-0 font-bold">Aklamacja:</div>
          <div className="ml-2">{acclamation}</div>
        </div>
      )}
    </div>
  );
};
