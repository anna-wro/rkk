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
            {/* I don't like it, 
            but that's the effect we have on the main site. 
            Let's discuss it */}
            <div className="font-light hover:text-red cursor-pointer">
              {prayer.type}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
