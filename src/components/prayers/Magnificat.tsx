import { Canticle } from './index';
import { Section } from 'components/mdxOverrides';

type AlleluiaType = Readonly<{
  antiphon: string;
}>;

export const Magnificat = ({ antiphon }: AlleluiaType) => {
  return (
    <div>
      <Section>Pieśń Maryi</Section>
      <Canticle
        name="Łk 1, 46-55"
        antiphon={antiphon}
        content={[
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
          `Chwała Ojcu i Synowi, *
        i Duchowi Świętemu.`,
          `Jak była na początku, teraz i zawsze, 
        * i na wieki wieków. Amen.`,
        ]}
      />
    </div>
  );
};
