import { useState } from 'react';
import { SeeMoreArrow } from 'components/layout/SeeMoreArrow';
import { ExtendedInfo } from 'components/layout/ExtendedInfo';
import { CalendarDataType } from 'utils/date';
import { makeStartCase } from 'utils/text';

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
      {showMoreInfo && <ExtendedInfo data={data} />}
    </div>
  );
}
