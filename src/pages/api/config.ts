import { calendar } from 'calendar/calendar';

export default function handler(req, res) {
  res.status(200).json(calendar);
}
