import { CalendarDataType, getCurrentDate } from 'utils/date';
import { formatCalendarNotes } from 'utils/text';
import { copy } from 'consts/copy';
import cx from 'classnames';
import StyledLink from './StyledLink';

export function ExtendedInfo({ data }: { data: CalendarDataType }) {
  const { dayOfWeek } = getCurrentDate();
  const [intro, linkToReadings] = copy.sundayReadings.split('[HTML]');
  const hasLinks = data?.links?.length > 0;

  return (
    <div>
      <div className={cx('mt-2', { 'extended-info': hasLinks })}>
        <ul>
          {data?.passages?.map((passage, index) => (
            <li key={index}>
              <StyledLink
                href={`https://wbiblii.pl/szukaj/${passage}`}
                name={passage}
              />
            </li>
          ))}
        </ul>
        {hasLinks && (
          <ul className="border-l-1 border-gray-50 pl-4 mb-1">
            {data?.linksTitle && <p>{formatCalendarNotes(data.linksTitle)}</p>}
            {data.links.map((link, index) => (
              <li key={index}>
                <StyledLink name={link.name} href={link.slug} />
              </li>
            ))}
          </ul>
        )}
      </div>
      {dayOfWeek === 'niedziela' && (
        <div className="mt-1">
          {intro}{' '}
          <span className="font-medium">
            <StyledLink
              name={linkToReadings}
              href="https://starokatolicy.eu/czytania-liturgiczne/"
            />
          </span>
        </div>
      )}
      <ul className="mt-1">
        {data?.notes?.map((note, index) => (
          <li key={index}>{formatCalendarNotes(note)}</li>
        ))}
      </ul>
    </div>
  );
}
