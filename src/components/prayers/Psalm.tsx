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
    <div className={cx('mb-2')}>
      <PsalmWrapper order={order} name={name} antiphon={antiphon}>
        <div className="space-y-1">
          {content.map((versicles, index) => (
            <div key={index} className={index % 2 === 0 ? 'pl-7' : null}>
              {versicles}
            </div>
          ))}
        </div>
      </PsalmWrapper>
    </div>
  );
};
