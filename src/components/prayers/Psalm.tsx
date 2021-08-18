import cx from 'classnames';
import { PsalmWrapper } from './PsalmWrapper';

type PsalmType = Readonly<{
  order: number;
  name: string;
  antiphon: string;
  content: string[];
}>;

export const Psalm = ({ order, name, antiphon, content }: PsalmType) => {
  return (
    <PsalmWrapper order={order} name={name} antiphon={antiphon}>
      {content.map((versicles, index) => (
        <div key={index} className={index % 2 === 1 ? 'pl-7' : null}>
          {versicles}
        </div>
      ))}
    </PsalmWrapper>
  );
};
