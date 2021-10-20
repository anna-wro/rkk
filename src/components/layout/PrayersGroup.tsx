import Link from 'next/link';
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
          <Link key={prayer.ID} as={prayer.slug} href={`[slug]`} passHref>
            <a href={prayer.slug} className="block font-light focus-visible">
              {prayer.type}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
