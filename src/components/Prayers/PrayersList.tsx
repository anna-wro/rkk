import Link from 'next/link';
import { makeStartCase } from 'utils/text';

export default function PrayersList({ prayers }) {
  return (
    <div className="mt-8">
      {prayers.map(prayer => (
        <Link key={prayer.ID} href={prayer.slug} passHref>
          <div className="hover:underline cursor-pointer">
            {makeStartCase(prayer.day)} | Tydzień {prayer.week} | {prayer.type}
          </div>
        </Link>
      ))}
    </div>
  );
}
