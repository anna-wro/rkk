import { Canticle } from './index';
import { Section } from 'components/mdxOverrides';

type NuncDimittisType = Readonly<{
  antiphon: string;
}>;

export const NuncDimittis = ({ antiphon }: NuncDimittisType) => {
  return (
    <>
      <Section>Pieśń Symeona</Section>
      <Canticle
        sigla="Łk 2, 29-32"
        antiphon={antiphon}
        versicles={[
          `† Teraz, o Panie, pozwól odejść słudze swemu w pokoju, * 
          według słowa Twojego,`,
          `Bo moje oczy ujrzały Twoje zbawienie, *
        któreś przygotował wobec wszystkich narodów:`,
          `Światło na oświecenie pogan *
        i chwałę ludu Twego, Izraela.`,
          `Chwała Ojcu i Synowi, *
        i Duchowi Świętemu.`,
          `Jak była na początku, teraz i zawsze, * 
          i na wieki wieków. Amen.`,
        ]}
      />
    </>
  );
};
