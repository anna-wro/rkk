import { useEffect, useState } from 'react';
import { CalendarDataType, getSelectedDate } from 'utils/date';
import { formatCalendarNotes } from 'utils/text';
import { copy } from 'consts/copy';
import cx from 'classnames';
import StyledLink from './StyledLink';

export function ExtendedInfo({ data }: { data: CalendarDataType }) {
  const { dayOfWeek } = getSelectedDate();
  const [intro, linkToReadings] = copy.sundayReadings.split('[HTML]');

  const [passages, setPassages] = useState([]);
  const [linksTitle, setLinksTitle] = useState('');
  const [linksToDisplay, setLinksToDisplay] = useState([]);
  const hasLinks = linksToDisplay.length > 0;

  useEffect(() => {
    setPassages(data?.passages);
    setLinksTitle(data?.linksTitle ?? copy.linksTitle);
    setLinksToDisplay([
      ...(data?.links?.length > 0 ? data.links : []),
      ...(data?.season === 'lent' && dayOfWeek === 'piątek'
        ? [
            { name: 'Droga krzyżowa klasyczna', slug: 'droga-krzyzowa' },
            {
              name: 'Droga krzyżowa biblijna',
              slug: 'droga-krzyzowa-biblijna',
            },
          ]
        : []),
      ...(data?.holidays?.length > 0 && data?.season !== 'lent'
        ? [{ name: 'Iubilate Domino', slug: 'iubilate-domino' }]
        : []),
    ]);
  }, [data, dayOfWeek]);

  return (
    <div className="font-light text-sm">
      <div
        className={cx('mt-2 ', {
          'extended-info': hasLinks,
        })}
      >
        <ul style={{ minWidth: 120 }}>
          {passages?.map((passage, index) => (
            <li key={index}>
              <StyledLink
                href={`https://wbiblii.pl/szukaj/${passage}`}
                name={passage}
                internal={false}
              />
            </li>
          ))}
        </ul>
        {hasLinks && (
          <ul className="'mt-2 border-l-1 border-gray-50 pl-4 mb-1">
            <div>{formatCalendarNotes(linksTitle)}</div>
            {linksToDisplay.map((link, index) => (
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
      <ul className="mt-1 'mt-2">
        {data?.notes?.map((note, index) => (
          <li key={index}>{formatCalendarNotes(note)}</li>
        ))}
      </ul>
    </div>
  );
}
