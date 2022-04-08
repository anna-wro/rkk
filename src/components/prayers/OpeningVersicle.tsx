import { V, R } from './index';
import { getCalendarData } from 'utils/date';

export const OpeningVersicle = () => {
  const calendar = getCalendarData();
  const displayAlleluia =
    calendar?.season !== 'lent' && calendar?.season !== 'pascha';

  return (
    <>
      <V>† Boże, wejrzyj ku wspomożeniu memu.</V>
      <R>{`Panie, pośpiesz ku ratunkowi memu.
        Chwała Ojcu i Synowi, i Duchowi Świętemu.
        Jak była na początku, teraz i zawsze,
        i na wieki wieków. Amen. ${displayAlleluia ? 'Alleluja.' : ''}`}</R>
    </>
  );
};
