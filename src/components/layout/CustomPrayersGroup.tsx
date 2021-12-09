import { getCurrentDate } from 'utils/date';
import LinksGroup from 'components/layout/LinksGroup';

export function CustomPrayersGroup({ prayers }) {
  const [title, prayersInGroup] = prayers;
  let prayerISODate, formattedPrayerDate;

  if (prayersInGroup[0]?.date) {
    prayerISODate = prayersInGroup[0]?.date.ISO;
    formattedPrayerDate = prayersInGroup[0]?.date.formatted;
  }

  const { isoDate: currentISODate } = getCurrentDate();
  const isToday = currentISODate === prayerISODate;

  const links = prayersInGroup.map(prayer => {
    return { ID: prayer.ID, slug: prayer.slug, type: prayer.type };
  });

  return (
    <LinksGroup
      className="w-40 pb-4 md:pb-6"
      title={title}
      description={formattedPrayerDate ? `(${formattedPrayerDate})` : null}
      isToday={isToday}
      links={links}
    />
  );
}
