import { Canticle } from './index';
import { Section } from 'components/mdxOverrides';

type NuncDimittisType = Readonly<{
  antiphon: string;
}>;

export const NuncDimittis = ({ antiphon }: NuncDimittisType) => {
  return (
    <>
      <Section>Pieśń Symeona</Section>
      <Canticle name="" antiphon={antiphon} content={[`Teraz o Panie...`]} />
    </>
  );
};
