import cx from 'classnames';

type RoleType = Readonly<{
  name: string;
  antiphon: string;
  content: string[];
}>;

export const Psalm = ({ name, antiphon, content }: RoleType) => {
  return (
    <div className={cx('mb-2')}>
      {name}
      {antiphon}
      <div className="space-y-1">
        {content.map((part, index) => (
          <div key={index} className={index % 2 === 0 ? 'pl-7' : null}>
            {part}
          </div>
        ))}
      </div>
    </div>
  );
};
