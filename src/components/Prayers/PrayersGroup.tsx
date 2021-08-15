import Link from 'next/link';
import { makeStartCase } from 'utils/text';

export default function PrayersGroup({ prayers }) {
  const [groupName, prayersInGroup] = prayers;
  return (
    <div className="flex">
      <div className="w-28 mr-4 border-r-1 border-gray-50">
        {makeStartCase(groupName)}
      </div>
      <div className="pb-4 md:pb-6">
        {prayersInGroup.map(prayer => (
          <Link key={prayer.ID} href={prayer.slug} passHref>
            <div className="font-light hover:underline cursor-pointer">
              {prayer.type}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
