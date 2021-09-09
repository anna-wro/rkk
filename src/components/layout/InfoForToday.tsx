import type { CalendarDataType } from 'utils/date';
import { makeStartCase } from 'utils/text';

export default function InfoForToday({ data }: { data: CalendarDataType }) {
  // TODO handle [html] in notes
  return (
    <div className="font-light mb-6 text-sm">
      <div className="font-medium">{makeStartCase(data.prettyDate)}</div>
      {data?.holiday && (
        <div className="font-bold">{data.holiday.toUpperCase()}</div>
      )}
      {data?.passages?.map((passage, index) => (
        <div key={index}>{passage}</div>
      ))}
      {data?.notes?.map((note, index) => (
        <div key={index}>{note}</div>
      ))}
    </div>
  );
}
