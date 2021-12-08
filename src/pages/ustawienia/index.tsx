import Layout from 'components/layout/Layout';
import InfoForToday from 'components/layout/InfoForToday';
import { getCalendarData } from 'utils/date';
import SettingsPage from 'components/settings/SettingsPage';

export default function CustomPrayersIndex() {
  const calendar = getCalendarData();
  return (
    <Layout>
      {calendar && <InfoForToday data={calendar} />}
      <SettingsPage />
    </Layout>
  );
}
