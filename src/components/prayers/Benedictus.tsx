import { Canticle } from './index';
import { Section } from 'components/mdxOverrides';
import { getCalendarData } from 'utils/date';

type BenedictusType = Readonly<{
  antiphon: string;
}>;

export const Benedictus = ({ antiphon }: BenedictusType) => {
  const calendar = getCalendarData();

  return (
    <>
      <Section sigla="Łk 1, 68-79">Pieśń Zachariasza</Section>
      <Canticle
        antiphon={calendar?.lauds?.antiphon ?? antiphon}
        versicles={[
          `† Błogosławiony Pan, Bóg Izraela, * 
          bo lud swój nawiedził i wyzwolił.`,
          `I wzbudził dla nas moc zbawczą *
          w domu swego sługi Dawida.`,
          `Jak zapowiedział od dawna *
          przez usta swych świętych proroków,`,
          `Że nas wybawi od naszych nieprzyjaciół *
          i z ręki wszystkich, którzy nas nienawidzą;`,
          `Że naszym ojcom okaże miłosierdzie *
          i wspomni na swe święte przymierze,`,
          `Na przysięgę, którą złożył *
          ojcu naszemu Abrahamowi.`,
          `Da nam, że z mocy nieprzyjaciół wyrwani, * 
          służyć Mu będziemy bez trwogi,`,
          `W pobożności i sprawiedliwości przed Nim *
          po wszystkie dni nasze.`,
          `A ty, dziecię, zwać się będziesz prorokiem Najwyższego, * 
          gdyż pójdziesz przed Panem przygotować Mu drogi.`,
          `Jego ludowi dasz poznać zbawienie *
          przez odpuszczenie grzechów.`,
          `Dzięki serdecznej litości naszego Boga, *
          z jaką nas nawiedzi z wysoka Wschodzące Słońce,`,
          `By oświecić tych, co w mroku i cieniu śmierci mieszkają, *
          aby nasze kroki skierować na drogę pokoju.`,
        ]}
      />
    </>
  );
};
