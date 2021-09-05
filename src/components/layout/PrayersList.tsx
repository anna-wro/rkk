import cx from 'classnames';
import PrayersGroup from './PrayersGroup';
import { groupByKey } from 'utils/array';
import { copy } from 'consts/copy';
import { getCurrentWeekNumber } from 'utils/date';
import type { PrayerType } from 'components/layout/PrayerPage';
import CurrentWeekDot from 'components/layout/CurrentWeekDot';

type PropsType = Readonly<{
  prayers: PrayerType[];
}>;

export default function PrayersList({ prayers }: PropsType) {
  const currentWeek = getCurrentWeekNumber();
  const firstWeek = prayers.filter(prayer => prayer.week === '1');
  const firstWeekGroupedByDay = groupByKey(firstWeek, 'day');
  const secondWeek = prayers.filter(prayer => prayer.week === '2');
  const secondWeekGroupedByDay = groupByKey(secondWeek, 'day');

  return (
    <div className="flex justify-center flex-col md:flex-row md:space-x-24">
      <div>
        <div
          className={cx('font-semibold text-lg my-4', {
            'text-gray-500': currentWeek !== '1',
          })}
        >
          {copy.firstWeekTitle} {currentWeek === '1' && <CurrentWeekDot />}
        </div>
        {Object.entries(firstWeekGroupedByDay).map((prayersFromDay, index) => (
          <PrayersGroup key={index} prayers={prayersFromDay} />
        ))}
      </div>
      <div className="mt-10 md:m-0">
        <div
          className={cx('font-semibold text-lg my-4', {
            'text-gray-500': currentWeek !== '2',
          })}
        >
          {copy.secondWeekTitle} {currentWeek === '2' && <CurrentWeekDot />}
        </div>
        {Object.entries(secondWeekGroupedByDay).map((prayersFromDay, index) => (
          <PrayersGroup key={index} prayers={prayersFromDay} />
        ))}
      </div>
    </div>
  );
}
