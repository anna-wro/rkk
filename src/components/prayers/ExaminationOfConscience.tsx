import React from 'react';
import { V, R, Note } from './index';
import { Section } from 'components/mdxOverrides';
import useOptionalContent from 'utils/useOptionalContent';

export const ExaminationOfConscience: React.FC = () => {
  const { optionalContent } = useOptionalContent();

  if (optionalContent.examinationOfConscience) {
    return (
      <div className="mt-2 mb-6 space-y-2">
        <Section>Rachunek sumienia</Section>
        <V>
          Przed Bogiem stojąc, w obecności naszych sióstr i braci, świętych na
          ziemi i w niebie oraz aniołów Bożych, otwórzmy nasze serca przed ich
          Stwórcą i wyznajmy nasze grzechy Bogu.
        </V>
        <div className="my-3 font-bold">[chwila ciszy]</div>
        <V>
          {`Nasz Pan Jezus Chrystus powiedział: Pierwsze przykazanie jest to: Słuchaj, Izraelu, Bóg nasz, Pan, jest jedyny. Będziesz miłował Pana, Boga swego, całym swoim sercem, całą swoją duszą, całym swoim umysłem i ze wszystkich sił. 
          Drugie jest to: Miłuj bliźniego swego jak siebie samego. Nie ma innego przykazania większego od tych. Na tych dwóch przykazaniach opiera się całe Prawo i Prorocy.`}
        </V>
        <R>Amen! Panie zmiłuj się nad nami.</R>
      </div>
    );
  }

  return (
    <Note className="my-6">
      Kompletę można poprzedzić w tym miejscu czytaniem duchowym. Następnie
      przewidziany jest rachunek sumienia.
    </Note>
  );
};

export default ExaminationOfConscience;
