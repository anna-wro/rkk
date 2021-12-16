import Layout from 'components/layout/Layout';
import InfoForToday from 'components/layout/InfoForToday';
import { getCalendarData } from 'utils/date';
import SettingsPage from 'components/settings/SettingsPage';
import { copy } from 'consts/copy';

export default function CustomPrayersIndex() {
  const calendar = getCalendarData();
  return (
    <Layout title={copy.settings.headline}>
      {calendar && <InfoForToday data={calendar} />}
      <SettingsPage />
    </Layout>
  );
}
