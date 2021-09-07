import cx from 'classnames';
import PrayersGroup from './PrayersGroup';
import { groupByKey } from 'utils/array';
import type { PrayerType } from 'components/layout/PrayerPage';
import CurrentWeekDot from 'components/layout/CurrentWeekDot';

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
    <div
      style={{ scrollMarginTop: '24px' }}
      id={isCurrentWeek ? 'currentWeek' : undefined}
    >
      <div
        className={cx('font-semibold text-lg my-4', {
          'text-gray-500': !isCurrentWeek,
        })}
      >
        {title} {isCurrentWeek && <CurrentWeekDot />}
      </div>
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
