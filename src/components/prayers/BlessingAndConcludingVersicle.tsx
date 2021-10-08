import { V, R } from './index';
import { getCalendarData } from 'utils/date';

export const BlessingAndConcludingVersicle = () => {
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
      <V>Pomoc Boża niech będzie zawsze z nami.</V>
      <R>I z naszymi braćmi i siostrami nieobecnymi. Amen.</R>
    </div>
  );
};
