import { DateTime } from 'luxon';
// import { calendar } from 'consts/calendar';

const calendar = [
  { date: '2021-09-01', week: '1', season: 'ordinary' },
  { date: '2021-09-02', week: '1', season: 'ordinary' },
  { date: '2021-09-03', week: '1', season: 'ordinary' },
  { date: '2021-09-04', week: '1', season: 'ordinary' },
  { date: '2021-09-05', week: '2', season: 'ordinary' },
  { date: '2021-09-06', week: '2', season: 'ordinary' },
  { date: '2021-09-07', week: '2', season: 'ordinary' },
  { date: '2021-09-08', week: '2', season: 'ordinary' },
  { date: '2021-09-09', week: '2', season: 'ordinary' },
  { date: '2021-09-10', week: '2', season: 'ordinary' },
  { date: '2021-09-11', week: '2', season: 'ordinary' },
  { date: '2021-09-12', week: '1', season: 'ordinary' },
  { date: '2021-09-13', week: '1', season: 'ordinary' },
  { date: '2021-09-14', week: '1', season: 'ordinary' },
  { date: '2021-09-15', week: '1', season: 'ordinary' },
  { date: '2021-09-16', week: '1', season: 'ordinary' },
  { date: '2021-09-17', week: '1', season: 'ordinary' },
  { date: '2021-09-18', week: '1', season: 'ordinary' },
  { date: '2021-09-19', week: '2', season: 'ordinary' },
  { date: '2021-09-20', week: '2', season: 'ordinary' },
  { date: '2021-09-21', week: '2', season: 'ordinary' },
  { date: '2021-09-22', week: '2', season: 'ordinary' },
  { date: '2021-09-23', week: '2', season: 'ordinary' },
  { date: '2021-09-24', week: '2', season: 'ordinary' },
  { date: '2021-09-25', week: '2', season: 'ordinary' },
  { date: '2021-09-26', week: '1', season: 'ordinary' },
  { date: '2021-09-27', week: '1', season: 'ordinary' },
  { date: '2021-09-28', week: '1', season: 'ordinary' },
  { date: '2021-09-29', week: '1', season: 'ordinary' },
  { date: '2021-09-30', week: '1', season: 'ordinary' },
];

export const getCurrentWeekNumber = () => {
  const dateNow = DateTime.now();
  const formattedDate = dateNow.toFormat('yyyy-LL-dd');
  const currentData = calendar.find(item => item.date === formattedDate);

  //   TODO handle Saturday evenings case
  return currentData.week || 1;
};
