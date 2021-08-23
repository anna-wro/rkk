import { CanticleWrapper } from './CanticleWrapper';

type PsalmType = Readonly<{
  order?: number;
  sigla?: string;
  antiphon: string;
  versicles: string[];
  withGloriaPatri?: boolean;
}>;

export const Canticle = ({
  order,
  sigla,
  antiphon,
  versicles,
  withGloriaPatri = true,
}: PsalmType) => {
  const versiclesToDisplay = withGloriaPatri
    ? [
        ...versicles,
        `Chwała Ojcu i Synowi, *
  i Duchowi Świętemu.`,
        `Jak była na początku, teraz i zawsze, *
  i na wieki wieków. Amen.`,
      ]
    : versicles;

  return (
    <CanticleWrapper order={order} sigla={sigla} antiphon={antiphon}>
      {versiclesToDisplay.map((versicle, index) => (
        <div key={index} className={index % 2 === 1 ? 'pl-7' : null}>
          {versicle}
        </div>
      ))}
    </CanticleWrapper>
  );
};
