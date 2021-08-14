import PrayersGroup from './PrayersGroup';
import { groupByKey } from 'utils/array';
import { copy } from 'copy';

export default function PrayersList({ prayers }) {
  const firstWeek = prayers.filter(prayer => prayer.week === '1');
  const firstWeekGroupedByDay = groupByKey(firstWeek, 'day');
  const secondWeek = prayers.filter(prayer => prayer.week === '2');
  const secondWeekGroupedByDay = groupByKey(secondWeek, 'day');

  return (
    <div className="flex justify-center flex-col md:flex-row md:space-x-24">
      <div>
        <div className="font-semibold text-lg my-2">{copy.firstWeekTitle}</div>
        {Object.entries(firstWeekGroupedByDay).map((prayersFromDay, index) => (
          <PrayersGroup key={index} prayers={prayersFromDay} />
        ))}
      </div>
      <div className="mt-10 md:m-0">
        <div className="font-semibold text-lg my-2">{copy.secondWeekTitle}</div>
        {Object.entries(secondWeekGroupedByDay).map((prayersFromDay, index) => (
          <PrayersGroup key={index} prayers={prayersFromDay} />
        ))}
      </div>
    </div>
  );
}
