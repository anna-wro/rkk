import { ChristianUnityWeek } from './ChristianUnityWeek';
import { getCurrentDate } from 'utils/date';
type PropsType = Readonly<{
  type: 'lauds' | 'vespers' | 'eve' | 'compline';
}>;

export const CustomIntercessions = ({ type }: PropsType) => {
  const { isoDate } = getCurrentDate();
  const [, month, day] = isoDate.split('-').map(Number);
  const isWeekOfPrayerForChristianUnity = month === 1 && day >= 18 && day <= 25;

  return (
    <>
      <div className="mt-3 font-bold">[miejsce na Twoją prośbę]</div>
      {type == 'lauds' && (
        <div className="mt-2">
          Ty wzbudzasz w nas chęci oraz popychasz do działania -{' '}
          <b>
            spraw, aby nam się chciało i umocnij w nas motywację do działania.
          </b>
        </div>
      )}
      {isWeekOfPrayerForChristianUnity && <ChristianUnityWeek />}
    </>
  );
};
