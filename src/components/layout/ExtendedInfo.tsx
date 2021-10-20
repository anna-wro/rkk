import Link from 'next/link';
import { CalendarDataType, getCurrentDate } from 'utils/date';
import { formatCalendarNotes } from 'utils/text';
import { copy } from 'consts/copy';

export function ExtendedInfo({ data }: { data: CalendarDataType }) {
  const { dayOfWeek } = getCurrentDate();
  const [intro, linkToReadings] = copy.sundayReadings.split('[HTML]');

  return (
    <div>
      <div className="mt-2 flex">
        <ul className="mr-6 md:mr-10">
          {data?.passages?.map((passage, index) => (
            <li key={index}>
              <a
                href={`https://wbiblii.pl/szukaj/${passage}`}
                className="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 rounded-sm"
              >
                {passage}
              </a>
            </li>
          ))}
        </ul>
        {data?.files && (
          <ul className="border-l-1 border-gray-50 pl-3">
            {data.files.map((file, index) => (
              <li key={index}>
                <Link href={file.slug} passHref>
                  <a
                    href="niedziela-chrystusa-migranta"
                    className="inline-block hover:underline cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 rounded-sm"
                  >
                    {file.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
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
