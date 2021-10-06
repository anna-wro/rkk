import { V, R } from './index';
import type { SeasonType } from '../../calendar/calendar';

type PropsType = Readonly<{
  season?: SeasonType;
}>;

export const BlessingAndConcludingVersicle = ({ season }: PropsType) => {
  return (
    <div className="section">
      <V>
        Niech nas Pan błogosławi, broni od wszelkiego zła i doprowadzi do życia
        wiecznego.
      </V>
      <R>Amen.</R>
      {season === 'advent' && (
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
