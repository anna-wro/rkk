import { V, R } from './index';
import { styles } from 'consts/styles';

export const LordsPrayer = () => {
  return (
    <div className={styles.marginTop}>
      <V>{`Ojcze nasz, któryś jest w niebie,
        święć się imię Twoje;
        przyjdź królestwo Twoje;
        bądź wola Twoja jako w niebie, tak i na ziemi.
        Chleba naszego powszedniego daj nam dzisiaj;
        i odpuść nam nasze winy, jako i my odpuszczamy naszym winowajcom;
        i nie wystawiaj nas na próbę`}</V>
      <R>{`ale nas zbaw ode złego.
        Albowiem Twoje jest Królestwo i moc,
        i chwała na wieki wieków. Amen.`}</R>
    </div>
  );
};
