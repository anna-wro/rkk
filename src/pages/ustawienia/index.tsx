import Layout from 'components/layout/Layout';
import { InfoForDayFacade } from 'components/layout/InfoForDayFacade';
import SettingsPage from 'components/settings/SettingsPage';
import { copy } from 'consts/copy';

export default function CustomPrayersIndex() {
  return (
    <Layout title={copy.settings.headline}>
      <InfoForDayFacade />
      <SettingsPage />
    </Layout>
  );
}
