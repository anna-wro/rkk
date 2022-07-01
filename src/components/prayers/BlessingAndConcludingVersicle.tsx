import { V, R, SynodalPrayer } from './index';
import { getCalendarData } from 'utils/date';

type PropsType = Readonly<{
  withAlleluia?: boolean;
}>;

export const BlessingAndConcludingVersicle = ({ withAlleluia }: PropsType) => {
  const calendar = getCalendarData();

  return (
    <div className="section">
      <V>
        Niech nas Pan błogosławi, broni od wszelkiego zła i doprowadzi do życia
        wiecznego.
      </V>
      <R>Amen.</R>
      {calendar?.season === 'advent' && (
        <div className="my-2">
          <V>Maranatha. Przyjdź Panie Jezu.</V>
          <R>Maranatha. Przyjdź Panie Jezu.</R>
        </div>
      )}
      <V>
        {`Pomoc Boża niech będzie zawsze z nami. ${
          withAlleluia ? ' Alleluja.' : ''
        }`}
      </V>
      <R>
        {`I z naszymi braćmi i siostrami nieobecnymi. Amen. ${
          withAlleluia ? ' Alleluja.' : ''
        }`}
      </R>
      <SynodalPrayer />
    </div>
  );
};
