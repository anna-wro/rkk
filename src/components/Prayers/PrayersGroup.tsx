import Link from 'next/link';
import { makeStartCase } from 'utils/text';

export default function PrayersGroup({ prayers }) {
  const [groupName, prayersInGroup] = prayers;
  return (
    <div className="mt-8 flex">
      <div className="w-28 mr-4">{makeStartCase(groupName)}</div>
      <div>
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
