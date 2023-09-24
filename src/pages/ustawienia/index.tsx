import Layout from 'components/layout/Layout';
import { InfoForDayFacade } from 'components/layout/InfoForDayFacade';
import SettingsPageFacade from 'components/settings/SettingsPageFacade';
import { copy } from 'consts/copy';

export default function CustomPrayersIndex() {
  return (
    <Layout title={copy.settings.headline}>
      <InfoForDayFacade />
      <SettingsPageFacade />
    </Layout>
  );
}
