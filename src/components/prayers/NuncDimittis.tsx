import { Canticle } from './index';
import { Section } from 'components/mdxOverrides';

type NuncDimittisType = Readonly<{
  variant?: 1 | 2;
}>;

export const NuncDimittis = ({ variant = 1 }: NuncDimittisType) => {
  const antiphon =
    variant === 1
      ? 'Strzeż nas, Panie, gdy czuwamy, * podczas snu nas osłaniaj, / abyśmy czuwali z Chrystusem / i odpoczywali w pokoju.'
      : 'Panie, Dobry Pasterzu, * Ty, który zawsze czuwasz, / nie opuszczaj swojego ludu.';

  return (
    <>
      <Section inline>Pieśń Symeona</Section> | Łk 2, 29-32
      <Canticle
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
