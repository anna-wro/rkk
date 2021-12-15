import cx from 'classnames';
import StyledLink from 'components/layout/StyledLink';
import { makeStartCase } from 'utils/text';
import CurrentTimeDot from 'components/layout/CurrentTimeDot';

type LinkPropsType = Readonly<{ ID: string; slug: string; type: string }>;

type LinksGroupPropsType = Readonly<{
  title: string;
  description?: string;
  isToday?: boolean;
  links: ReadonlyArray<LinkPropsType>;
  className?: string;
}>;

export function LinksGroup({
  title,
  description,
  isToday,
  links,
  className,
}: LinksGroupPropsType) {
  return (
    <div className="flex">
      <div className={cx('relative mr-3 border-r-1 border-gray-50', className)}>
        {isToday && <CurrentTimeDot />}
        <>
          {makeStartCase(title)}{' '}
          {description && (
            <div className="font-light text-sm">{description}</div>
          )}
        </>
      </div>
      <div className="pb-4 md:pb-6">
        {links?.map((link: LinkPropsType) => (
          <div key={link.ID} className="font-light">
            <StyledLink href={`/${link.slug}`} name={link.type} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LinksGroup;
