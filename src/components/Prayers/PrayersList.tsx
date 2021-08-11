import Prayer from 'components/Prayers/Prayer';

export default function PrayersList({ prayers }) {
  return (
    <div className="mt-8">
      {prayers.map((prayer, index) => (
        <div key={index}>{prayer.blocks[0].data.text}</div>
      ))}

      {/* TODO: display prayer on a separate page */}
      {/* <Prayer prayer={prayers[0]} /> */}
    </div>
  );
}
