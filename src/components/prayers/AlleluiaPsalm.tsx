import { CanticleWrapper } from './CanticleWrapper';

type PartType = [string, string];

type AlleluiaType = Readonly<{
  order: number;
  name: string;
  antiphon: string;
  versicles: PartType[];
}>;

export const AlleluiaPsalm = ({
  versicles,
  order,
  name,
  antiphon,
}: AlleluiaType) => {
  const versiclesWithGloriaPatri = [
    ...versicles,
    ['Chwała Ojcu i Synowi,', 'i Duchowi Świętemu.'],
    ['Jak była na początku, teraz i zawsze,', 'i na wieki wieków. Amen.'],
  ];

  return (
    <CanticleWrapper order={order} name={name} antiphon={antiphon}>
      {versiclesWithGloriaPatri.map((versicle, index) => (
        <div key={index} className="mb-3">{`Alleluja.
        ${versicle[0]} * 
        (W. Alleluja)
        ${versicle[1]}
        W. Alleluja (alleluja).`}</div>
      ))}
    </CanticleWrapper>
  );
};
