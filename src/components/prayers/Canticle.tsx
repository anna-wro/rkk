import { CanticleWrapper } from './CanticleWrapper';

type PsalmType = Readonly<{
  order?: number;
  sigla?: string;
  antiphon: string;
  versicles: string[];
}>;

export const Canticle = ({ order, sigla, antiphon, versicles }: PsalmType) => {
  return (
    <CanticleWrapper order={order} sigla={sigla} antiphon={antiphon}>
      {versicles.map((versicle, index) => (
        <div key={index} className={index % 2 === 1 ? 'pl-7' : null}>
          {versicle}
        </div>
      ))}
    </CanticleWrapper>
  );
};
