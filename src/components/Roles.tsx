import cx from 'classnames';

type RolesType = Readonly<{
  items: string[];
}>;

export const Roles = ({ items }: RolesType) => {
  return (
    <div className="mb-6">
      {items.map((item, index) => {
        const roleName = index % 2 === 0 ? 'K.' : 'W.';

        return (
          <div
            key={index}
            className={cx('flex my-2', { 'font-bold': roleName === 'W.' })}
          >
            <div className="w-7 flex-shrink-0">{roleName}</div>
            <div>{item}</div>
          </div>
        );
      })}
    </div>
  );
};
