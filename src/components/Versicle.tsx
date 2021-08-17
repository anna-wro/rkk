import cx from 'classnames';

type RolesType = Readonly<{
  initial: 'k' | 'w';
  content: string;
}>;

export const Versicle = ({ initial, content }: RolesType) => {
  const initialToDisplay = `${initial.toUpperCase()}.`;

  return (
    <div
      className={cx('flex', {
        'font-bold': initial === 'w',
      })}
    >
      <div className="w-7 flex-shrink-0">{initialToDisplay}</div>
      <div>{content}</div>
    </div>
  );
};
