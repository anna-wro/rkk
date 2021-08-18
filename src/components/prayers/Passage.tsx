import { Section } from 'components/mdxOverrides';

type MagnificatType = Readonly<{
  sigla: string;
  passage: string;
}>;

export const Passage = ({ passage, sigla }: MagnificatType) => {
  console.log('inside');
  return (
    <>
      <div>
        <Section inline>Czytanie</Section> | {sigla}
      </div>
      {passage}
    </>
  );
};
