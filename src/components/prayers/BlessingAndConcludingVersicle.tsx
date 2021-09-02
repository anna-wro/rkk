import { V, R } from './index';
import { styles } from 'consts/styles';

export const BlessingAndConcludingVersicle = () => {
  return (
    <div className={styles.marginTop}>
      <V>
        Niech nas Pan błogosławi, broni od wszelkiego zła i doprowadzi do życia
        wiecznego.
      </V>
      <R>Amen.</R>
      <V>Pomoc Boża niech będzie zawsze z nami.</V>
      <R>I z naszymi braćmi i siostrami nieobecnymi. Amen.</R>
    </div>
  );
};
