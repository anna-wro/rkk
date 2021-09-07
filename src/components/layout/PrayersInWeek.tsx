import cx from 'classnames';
import PrayersGroup from './PrayersGroup';
import { groupByKey } from 'utils/array';
import type { PrayerType } from 'components/layout/PrayerPage';
import CurrentTimeDot from 'components/layout/CurrentTimeDot';

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
    <div style={{ scrollMarginTop: '24px' }}>
      <div className="font-semibold text-lg my-4">{title}</div>
      {Object.entries(prayersGrouppedByDay).map((prayersFromDay, index) => (
        <PrayersGroup
          key={index}
          prayers={prayersFromDay}
          isCurrentWeek={isCurrentWeek}
        />
      ))}
    </div>
  );
}
