import { Section } from 'components/mdxOverrides';
import React from 'react';

type PassageType = Readonly<{
  sigla: string;
  passage: React.ReactNode;
  type?: string;
  uppercase?: boolean;
}>;

export const Passage = ({
  passage,
  sigla,
  type = '',
  uppercase = true,
}: PassageType) => {
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
      <Section sigla={sigla} spacedTop="mt-0" uppercase={uppercase}>
        {headline}
      </Section>
      <div className="space-y-2">{passage}</div>
    </>
  );
};
