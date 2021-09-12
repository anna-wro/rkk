import PrayersGroup from './PrayersGroup';
import { groupByKey } from 'utils/array';
import type { PrayerType } from 'components/layout/PrayerPage';

type PropsType = Readonly<{
  prayers: PrayerType[];
  title: string;
  isCurrentWeek: boolean;
}>;

export default function PrayersInWeek({
  prayers,
  isCurrentWeek,
  title,
}: PropsType) {
  const prayersGrouppedByDay = groupByKey(prayers, 'day');

  return (
    <>
      <h3 className="font-semibold text-lg my-4">{title}</h3>
      {Object.entries(prayersGrouppedByDay).map((prayersFromDay, index) => (
        <PrayersGroup
          key={index}
          prayers={prayersFromDay}
          isCurrentWeek={isCurrentWeek}
        />
      ))}
    </>
  );
}
