import cx from 'classnames';
import { CanticleWrapper } from './CanticleWrapper';

type PsalmType = Readonly<{
  order?: number;
  name: string;
  antiphon: string;
  content: string[];
}>;

export const Canticle = ({ order, name, antiphon, content }: PsalmType) => {
  return (
    <CanticleWrapper order={order} name={name} antiphon={antiphon}>
      {content.map((versicles, index) => (
        <div key={index} className={index % 2 === 1 ? 'pl-7' : null}>
          {versicles}
        </div>
      ))}
    </CanticleWrapper>
  );
};
