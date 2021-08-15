import Link from 'next/link';

export default function PrayersList({ prayers }) {
  return (
    <div className="mt-8">
      {prayers.map(prayer => (
        <Link key={prayer.ID} href={prayer.slug} passHref>
          <div className="hover:underline cursor-pointer">
            {prayer.blocks[0].data.text}
          </div>
        </Link>
      ))}
    </div>
  );
}
