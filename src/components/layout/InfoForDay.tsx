import { ExtendedInfo } from './ExtendedInfo';
import { CalendarDataType } from 'utils/date';
import { makeStartCase } from 'utils/text';

export function InfoForDay({
  data,
  controls,
}: {
  data: CalendarDataType;
  controls: React.ReactNode;
}) {
  return (
    <>
      <div className="font-light text-sm  justify-between items-center">
        <div>
          <div className="flex w-full justify-between">
            <div className="font-medium">{makeStartCase(data.prettyDate)}</div>
            {controls}
          </div>
          {data?.holidays?.map(holiday => (
            <div className="font-bold" key={holiday}>
              {holiday.toUpperCase()}
            </div>
          ))}
        </div>
      </div>
      <ExtendedInfo data={data} />
    </>
  );
}
