import { Section } from 'components/mdxOverrides';

type MagnificatType = Readonly<{
  sigla: string;
  passage: string;
}>;

export const Passage = ({ passage, sigla }: MagnificatType) => {
  return (
    <>
      <Section sigla={sigla} spacedTop="mt-0">
        Czytanie
      </Section>
      <div>{passage}</div>
    </>
  );
};
