import cx from 'classnames';
import Link from 'next/link';
import { makeStartCase } from 'utils/text';
import { getDayOfWeek } from 'utils/date';
import type { PrayerType } from 'components/layout/PrayerPage';
import CurrentTimeDot from 'components/layout/CurrentTimeDot';

export default function PrayersGroup({ prayers, isCurrentWeek }) {
  const currentDayOfWeek = getDayOfWeek();
  const [groupName, prayersInGroup] = prayers;
  const isToday = isCurrentWeek && groupName === currentDayOfWeek;
  console.log({ groupName });

  return (
    <div className="flex">
      <div
        className="relative w-36 mr-3 border-r-1 border-gray-50"
        style={{ scrollMarginTop: '24px' }}
        id={isToday ? 'today' : undefined}
      >
        {isToday && <CurrentTimeDot />}
        {makeStartCase(groupName)}
      </div>
      <div className="pb-4 md:pb-6">
        {prayersInGroup.map((prayer: PrayerType) => (
          <Link key={prayer.ID} as={prayer.slug} href={`[slug]`} passHref>
            <div className="font-light hover:text-orange-500 cursor-pointer">
              {prayer.type}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
