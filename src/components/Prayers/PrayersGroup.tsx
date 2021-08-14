import Link from 'next/link';
import { makeStartCase } from 'utils/text';

export default function PrayersGroup({ prayers }) {
  const [groupName, prayersInGroup] = prayers;
  return (
    <div className="mt-2">
      {makeStartCase(groupName)}
      {prayersInGroup.map(prayer => (
        <Link key={prayer.ID} href={prayer.slug} passHref>
          <div className="font-light hover:underline cursor-pointer">
            {prayer.day} | {prayer.type}
          </div>
        </Link>
      ))}
    </div>
  );
}
