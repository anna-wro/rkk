import { Canticle } from './index';
import { Section } from 'components/mdxOverrides';
import { getCalendarData } from 'utils/date';

type MagnificatType = Readonly<{
  antiphon: string;
  isEve: boolean;
}>;

export const Magnificat = ({ antiphon, isEve }: MagnificatType) => {
  const calendar = getCalendarData();
  const getAntiphonToDisplay = () => {
    if (isEve) {
      return calendar?.eve?.antiphon ?? antiphon;
    }
    return calendar?.vespers?.antiphon ?? antiphon;
  };
  const antiphonToDisplay = getAntiphonToDisplay();

  return (
    <>
      <Section sigla="Łk 1, 46-55">Pieśń Maryi</Section>
      <Canticle
        antiphon={antiphonToDisplay}
        versicles={[
          `† Wielbi dusza moja Pana *
         i raduje się duch mój w Bogu, Zbawicielu moim.`,
          `Bo wejrzał na uniżenie swojej Służebnicy. *
        Oto bowiem odtąd błogosławić mnie będą wszystkie pokolenia.`,
          `Gdyż wielkie rzeczy uczynił mi Wszechmocny, *
        a Jego imię jest święte.`,
          `Jego miłosierdzie z pokolenia na pokolenie *
        nad tymi, którzy się Go boją.`,
          `Okazał moc swego ramienia, *
        rozproszył pyszniących się zamysłami serc swoich.`,
          `Strącił władców z tronu, *
        a wywyższył pokornych.`,
          `Głodnych nasycił dobrami, *
        a bogatych z niczym odprawił.`,
          `Ujął się za swoim sługą, Izraelem, *
        pomny na swe miłosierdzie,`,
          `Jak obiecał naszym ojcom, * 
        Abrahamowi i jego potomstwu na wieki.`,
        ]}
      />
    </>
  );
};
