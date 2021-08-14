import PrayersGroup from './PrayersGroup';
import { groupByKey } from 'utils/array';
import { copy } from 'copy';

export default function PrayersList({ prayers }) {
  const firstWeek = prayers.filter(prayer => prayer.week === '1');
  const firstWeekGroupedByDay = groupByKey(firstWeek, 'day');
  // const secondWeek = prayers.filter(prayer => prayer.week === '2');
  // const secondWeekGroupedByDay = groupByKey(secondWeek, 'day');

  return (
    <div className="mt-8">
      <div className="font-medium">{copy.firstWeekTitle}</div>
      {Object.entries(firstWeekGroupedByDay).map((prayersFromDay, index) => (
        <PrayersGroup key={index} prayers={prayersFromDay} />
      ))}
      {/* <div className="font-medium">{copy.secondWeekTitle}</div>
      {Object.entries(secondWeekGroupedByDay).map((prayersFromDay, index) => (
        <PrayersGroup key={index} prayers={prayersFromDay} />
      ))} */}
    </div>
  );
}
