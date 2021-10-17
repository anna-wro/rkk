import { makeStartCase } from 'utils/text';
import { getCurrentDate } from 'utils/date';
import type { PrayerType } from 'components/layout/PrayerPage';
import CurrentTimeDot from 'components/layout/CurrentTimeDot';

export default function PrayersGroup({ prayers, isCurrentWeek }) {
  const { dayOfWeek: currentDayOfWeek } = getCurrentDate();
  const [groupName, prayersInGroup] = prayers;
  const isToday = isCurrentWeek && groupName === currentDayOfWeek;

  return (
    <div className="flex">
      <div className="relative w-36 mr-3 border-r-1 border-gray-50">
        {isToday && <CurrentTimeDot />}
        {makeStartCase(groupName)}
      </div>
      <div className="pb-4 md:pb-6">
        {prayersInGroup.map((prayer: PrayerType) => (
          <a
            key={prayer.ID}
            href={prayer.slug}
            className="block font-light hover:text-orange-500 cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            {prayer.type}
          </a>
        ))}
      </div>
    </div>
  );
}
