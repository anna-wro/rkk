import cx from 'classnames';

type RoleType = Readonly<{
  type: 'k' | 'w';
  children: React.ReactElement;
}>;

export const Header = ({ children }) => (
  <div className="font-bold text-xl mt-4 mb-6 md:mr-32">{children}</div>
);

export const Role = ({ type, children }: RoleType) => {
  const roleName = `${type.toUpperCase()}.`;

  return (
    <div className={cx('flex mb-2', { 'font-bold': type === 'w' })}>
      <div className="w-7 flex-shrink-0">{roleName}</div>
      <div>{children}</div>
    </div>
  );
};
