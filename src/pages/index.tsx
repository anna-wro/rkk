import { useEffect } from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import * as PusherPushNotifications from '@pusher/push-notifications-web';
import Layout from 'components/layout/Layout';
import InfoForToday from 'components/layout/InfoForToday';
import PrayersList from 'components/layout/PrayersList';
import { getSeasonPrayerDataFromFilename } from 'utils/getSeasonPrayerDataFromFilename';
import { SEASON_PRAYERS_PATH, seasonPrayersFilePaths } from 'utils/mdxUtils';
import { getCalendarData } from 'utils/date';

export default function Home({ prayers }) {
  const calendar = getCalendarData();

  useEffect(() => {
    try {
      const beamsClient = new PusherPushNotifications.Client({
        instanceId: process.env.NEXT_PUBLIC_BEAMS_INSTANCE_ID,
      });

      // todo add option to disable/enable notifications
      beamsClient
        .start()
        .then(() => beamsClient.addDeviceInterest('hello'))
        // eslint-disable-next-line no-console
        .then(() => console.log('Successfully registered and subscribed!'));
    } catch {}
  }, []);

  return (
    <Layout>
      {calendar && <InfoForToday data={calendar} />}
      <PrayersList prayers={prayers} />
    </Layout>
  );
}

export function getStaticProps() {
  const prayers = seasonPrayersFilePaths
    .map(filePath => {
      const prayerData = getSeasonPrayerDataFromFilename({ filePath });
      const source = fs.readFileSync(path.join(SEASON_PRAYERS_PATH, filePath));
      const { content, data } = matter(source);

      return { content, data, ...prayerData };
    })
    .sort((a, b) => a.ID - b.ID);

  return { props: { prayers } };
}
