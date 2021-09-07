import Link from 'next/link';
import { makeStartCase } from 'utils/text';
import { getDayOfWeek } from 'utils/date';
import type { PrayerType } from 'components/layout/PrayerPage';

export default function PrayersGroup({ prayers, isCurrentWeek }) {
  const today = getDayOfWeek();
  const [groupName, prayersInGroup] = prayers;
  console.log({ groupName });

  return (
    <div className="flex">
      <div className="w-28 mr-3 border-r-1 border-gray-50">
        <div>{makeStartCase(groupName)}</div>
        {isCurrentWeek && groupName === today && (
          <div className="inline-block rounded-full bg-green text-white uppercase px-2 py-1 text-xs">
            Dzisiaj
          </div>
        )}
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
