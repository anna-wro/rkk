import { V, R, PrayerForPeace } from './index';

type PropsType = Readonly<{
  variant: 1 | 2;
}>;

export const ComplineBlessingAndConcludingVersicle = ({
  variant,
}: PropsType) => {
  return (
    <div className="section">
      <V>
        {variant === 1
          ? 'Noc spokojną i śmierć szczęśliwą niech nam da Bóg wszechmogący, Ojciec i Syn, i Duch Święty.'
          : 'Niech nas błogosławi i strzeże Bóg wszechmogący i miłosierny: Ojciec i Syn, i Duch Święty, a pokój Pański niech zawsze będzie z nami.'}
      </V>
      <R>Amen.</R>
      <PrayerForPeace />
    </div>
  );
};
