import { useState } from 'react';
import { SeeMoreArrow } from 'components/layout/SeeMoreArrow';
import { CalendarDataType, getDayOfWeek } from 'utils/date';
import { makeStartCase, formatCalendarNotes } from 'utils/text';

export default function InfoForToday({ data }: { data: CalendarDataType }) {
  function handleClick() {
    setShowMoreInfo(!showMoreInfo);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'Enter') {
      handleClick();
    }
  }

  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const dayOfWeek = getDayOfWeek();

  return (
    <div className="font-light md:mb-4 mt-2 text-sm more-info">
      <div
        className="md:flex justify-between items-center"
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
      >
        <div>
          <div className="font-medium">{makeStartCase(data.prettyDate)}</div>
          {data?.holiday && (
            <div className="font-bold">{data.holiday.toUpperCase()}</div>
          )}
        </div>
        <SeeMoreArrow rotated={showMoreInfo} />
      </div>
      {showMoreInfo && (
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
            <div>
              Czytania są również dostępne na{' '}
              <a
                href="https://starokatolicy.eu/czytania-liturgiczne/"
                className="font-medium"
              >
                naszej stronie.
              </a>
            </div>
          )}
          <ul className="mt-1">
            {data?.notes?.map((note, index) => (
              <li key={index}>{formatCalendarNotes(note)}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
