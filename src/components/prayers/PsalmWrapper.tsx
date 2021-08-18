import cx from 'classnames';

type PsalmHeaderType = Readonly<{
  order: number;
  name: string;
  antiphon: string;
  children: React.ReactNode;
}>;

export const PsalmWrapper = ({
  order,
  name,
  antiphon,
  children,
}: PsalmHeaderType) => {
  return (
    <div className={cx('mb-2')}>
      {order}
      {name}
      {antiphon}
      <div>{children}</div>
      {antiphon}
    </div>
  );
};
