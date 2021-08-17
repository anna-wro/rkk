import cx from 'classnames';

type RolesType = Readonly<{
  versicles: string[];
}>;

export const Versicles = ({ versicles }: RolesType) => {
  return (
    <div className="mb-6">
      {versicles.map((versicle, index) => {
        const initial = index % 2 === 0 ? 'K.' : 'W.';

        return (
          <div
            key={index}
            className={cx('flex my-2 whitespace-pre-line', {
              'font-bold': initial === 'W.',
            })}
          >
            <div className="w-7 flex-shrink-0">{initial}</div>
            <div>{versicle}</div>
          </div>
        );
      })}
    </div>
  );
};
