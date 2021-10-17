import { useState } from 'react';
import { SeeMoreArrow } from 'components/layout/SeeMoreArrow';
import { ExtendedInfo } from 'components/layout/ExtendedInfo';
import { CalendarDataType } from 'utils/date';
import { makeStartCase } from 'utils/text';

export default function InfoForToday({ data }: { data: CalendarDataType }) {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  function handleClick() {
    setShowMoreInfo(!showMoreInfo);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'Enter') {
      handleClick();
    }
  }

  return (
    <div className="font-light md:mb-4 mt-3 text-sm more-info">
      <div className="md:flex justify-between items-center">
        <div>
          <div className="font-medium">{makeStartCase(data.prettyDate)}</div>
          {data?.holidays?.map(holiday => (
            <div className="font-bold" key={holiday}>
              {holiday.toUpperCase()}
            </div>
          ))}
          {data?.date === '2021-10-17' && (
            <a
              href="niedziela-chrystusa-migranta"
              className="inline-block hover:underline cursor-pointer"
            >
              Modlitwy na ten dzień
            </a>
          )}
        </div>
        <SeeMoreArrow
          rotated={showMoreInfo}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
        />
      </div>
      {showMoreInfo && <ExtendedInfo data={data} />}
    </div>
  );
}
