import Link from 'next/link';
import { makeStartCase } from 'utils/text';
import { getCurrentDate } from 'utils/date';
import CurrentTimeDot from 'components/layout/CurrentTimeDot';
import type { CustomPrayerType } from 'components/layout/CustomPrayersList';

export function CustomPrayersGroup({ prayers }) {
  const [title, prayersInGroup] = prayers;
  let prayerISODate, formattedPrayerDate;

  if (prayersInGroup[0]?.date) {
    prayerISODate = prayersInGroup[0]?.date.ISO;
    formattedPrayerDate = prayersInGroup[0]?.date.formatted;
  }

  const { isoDate: currentISODate } = getCurrentDate();
  const isToday = currentISODate === prayerISODate;

  return (
    <div className="flex">
      <div className="relative w-36 mr-3 border-r-1 border-gray-50">
        {isToday && <CurrentTimeDot />}
        <>
          {makeStartCase(title)}{' '}
          {formattedPrayerDate && (
            <div className="font-light text-sm">({formattedPrayerDate})</div>
          )}
        </>
      </div>
      <div className="pb-4 md:pb-6">
        {prayersInGroup?.map((prayer: CustomPrayerType) => (
          <Link key={prayer?.ID} href={prayer?.slug} passHref>
            <div className="font-light hover:text-orange-500 cursor-pointer">
              {prayer.type}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
