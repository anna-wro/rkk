import { CalendarDataType, getCurrentDate } from 'utils/date';
import { formatCalendarNotes } from 'utils/text';
import { copy } from 'consts/copy';

export function ExtendedInfo({ data }: { data: CalendarDataType }) {
  const { dayOfWeek } = getCurrentDate();
  const [intro, linkToReadings] = copy.sundayReadings.split('[HTML]');

  return (
    <div>
      <ul className="mt-2">
        {data?.passages?.map((passage, index) => (
          <li key={index}>
            <a
              href={`https://wbiblii.pl/szukaj/${passage}`}
              className="hover:underline"
            >
              {passage}
            </a>
          </li>
        ))}
      </ul>
      {dayOfWeek === 'niedziela' && (
        <div className="mt-1">
          {intro}{' '}
          <a
            href="https://starokatolicy.eu/czytania-liturgiczne/"
            className="font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 rounded-sm"
          >
            {linkToReadings}
          </a>
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
