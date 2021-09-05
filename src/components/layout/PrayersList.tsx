import { copy } from 'consts/copy';
import { getCurrentWeekNumber } from 'utils/date';
import type { PrayerType } from 'components/layout/PrayerPage';
import PrayersInWeek from 'components/layout/PrayersInWeek';

type PropsType = Readonly<{
  prayers: PrayerType[];
}>;

export default function PrayersList({ prayers }: PropsType) {
  const currentWeek = getCurrentWeekNumber();
  const firstWeek = prayers.filter(prayer => prayer.week === '1');
  const secondWeek = prayers.filter(prayer => prayer.week === '2');

  return (
    <div className="flex justify-center flex-col md:flex-row md:space-x-24">
      <div>
        <PrayersInWeek
          prayers={firstWeek}
          isCurrentWeek={currentWeek === '1'}
          title={copy.firstWeekTitle}
        />
      </div>
      <div className="mt-10 md:m-0">
        <PrayersInWeek
          prayers={secondWeek}
          isCurrentWeek={currentWeek === '2'}
          title={copy.secondWeekTitle}
        />
      </div>
    </div>
  );
}
