import cx from 'classnames';

type RoleType = Readonly<{
  name: string;
  antiphon: string;
  children: string[];
}>;

export const Psalm = ({ name, antiphon, children }: RoleType) => {
  return (
    <div className={cx('flex mb-2')}>
      <div className="w-7 flex-shrink-0">{antiphon}</div>
      <div>{children}</div>
    </div>
  );
};
