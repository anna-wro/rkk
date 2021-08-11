export default function PrayersList({ prayers }) {
  return (
    <div className="mt-8">
      {prayers.map((prayer, index) => (
        <div key={index}>{prayer[0].data.text}</div>
      ))}
    </div>
  );
}
