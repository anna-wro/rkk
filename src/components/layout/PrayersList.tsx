import { copy } from 'consts/copy';
import { getCalendarData } from 'utils/date';
import type { PrayerType } from 'components/layout/PrayerPage';
import PrayersInWeek from 'components/layout/PrayersInWeek';

type PropsType = Readonly<{
  prayers: PrayerType[];
}>;

export default function PrayersList({ prayers }: PropsType) {
  const calendar = getCalendarData();
  const currentWeek = calendar?.week || 3;

  const firstWeek = prayers.filter(prayer => prayer.week === 1);
  const secondWeek = prayers.filter(prayer => prayer.week === 2);

  return (
    <div className="flex justify-between flex-col md:flex-row">
      {firstWeek.length > 0 && (
        <div>
          <PrayersInWeek
            prayers={firstWeek}
            isCurrentWeek={currentWeek === 1}
            title={copy.firstWeekTitle}
          />
        </div>
      )}
      {secondWeek.length > 0 && (
        <div className="mt-4 md:m-0">
          <PrayersInWeek
            prayers={secondWeek}
            isCurrentWeek={currentWeek === 2}
            title={copy.secondWeekTitle}
          />
        </div>
      )}
    </div>
  );
}
