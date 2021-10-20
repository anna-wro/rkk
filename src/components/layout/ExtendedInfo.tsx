import { CalendarDataType, getCurrentDate } from 'utils/date';
import { formatCalendarNotes } from 'utils/text';
import { copy } from 'consts/copy';
import StyledLink from './StyledLink';

export function ExtendedInfo({ data }: { data: CalendarDataType }) {
  const { dayOfWeek } = getCurrentDate();
  const [intro, linkToReadings] = copy.sundayReadings.split('[HTML]');

  return (
    <div>
      <div className="mt-2 flex">
        <ul className="mr-6 md:mr-10">
          {data?.passages?.map((passage, index) => (
            <li key={index}>
              <StyledLink
                href={`https://wbiblii.pl/szukaj/${passage}`}
                name={passage}
              />
            </li>
          ))}
        </ul>
        {data?.links && (
          <ul className="border-l-1 border-gray-50 pl-3">
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
