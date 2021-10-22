import { Section } from 'components/mdxOverrides';
import React from 'react';

type PassageType = Readonly<{
  sigla: string;
  passage: React.ReactNode;
  type?: string;
}>;

export const Passage = ({ passage, sigla, type = '' }: PassageType) => {
  let headline;

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

  return (
    <>
      <Section sigla={sigla} spacedTop="mt-0">
        {headline}
      </Section>
      <div className="space-y-2">{passage}</div>
    </>
  );
};
