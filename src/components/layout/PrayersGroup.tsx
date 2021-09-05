import Link from 'next/link';
import { makeStartCase } from 'utils/text';
import type { PrayerType } from 'components/layout/PrayerPage';

export default function PrayersGroup({ prayers }) {
  const [groupName, prayersInGroup] = prayers;

  return (
    <div className="flex">
      <div className="w-28 mr-3 border-r-1 border-gray-50">
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
