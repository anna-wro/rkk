import { Section } from 'components/mdxOverrides';

type MagnificatType = Readonly<{
  sigla: string;
  passage: string;
}>;

export const Passage = ({ passage, sigla }: MagnificatType) => {
  return (
    <>
      <Section inline spacedTop="mt-0">
        Czytanie
      </Section>
      | {sigla}
      <div>{passage}</div>
    </>
  );
};
