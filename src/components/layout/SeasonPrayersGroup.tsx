import { getCurrentDate } from 'utils/date';
import LinksGroup from 'components/layout/LinksGroup';

export default function SeasonPrayersGroup({ prayers, isCurrentWeek }) {
  const { dayOfWeek: currentDayOfWeek } = getCurrentDate();
  const [groupName, prayersInGroup] = prayers;
  const isToday = isCurrentWeek && groupName === currentDayOfWeek;

  const links = prayersInGroup.map(prayer => {
    return { ID: prayer.ID, slug: prayer.slug, type: prayer.type };
  });

  return (
    <LinksGroup
      title={groupName}
      isToday={isToday}
      links={links}
      className="w-36"
    />
  );
}
