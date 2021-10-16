import { Section } from 'components/mdxOverrides';
import React from 'react';

type PassageType = Readonly<{
  sigla: string;
  passage: React.ReactNode;
  type?: 'first' | 'second';
}>;

export const Passage = ({ passage, sigla, type }: PassageType) => {
  let headline = 'Czytanie';

  switch (type) {
    case 'first':
      headline = 'Czytanie pierwsze';
      break;
    case 'second':
      headline = 'Czytanie drugie';
      break;
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
