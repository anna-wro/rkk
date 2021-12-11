import type { CalendarType } from './calendar';

export const January2022: CalendarType = [
  {
    date: '2022-01-01',
    week: 1,
    season: 'christmas',
    passages: [],
    holidays: ['OKTAWA NARODZENIA PAŃSKIEGO'],
    notes: [],
    lauds: {
      sigla: 'Iz 7, 14',
      passage:
        'Dlatego Pan sam da wam znak: Oto Panna pocznie i porodzi Syna, i nazwie Go imieniem Emmanuel.',
    },
    vespers: {
      sigla: 'Flp 2, 9-11',
      passage:
        'Dlatego też Bóg Go nad wszystko wywyższył i darował Mu imię ponad wszelkie imię, aby na imię Jezusa zgięło się każde kolano istot niebieskich i ziemskich i podziemnych. I aby wszelki język wyznał, że Jezus Chrystus jest PANEM – ku chwale Boga Ojca.',
    },
    links: [
      { name: 'jutrznia', slug: 'narodzenie-panskie-jutrznia' },
      { name: 'nieszpory', slug: 'narodzenie-panskie-nieszpory' },
    ],
  },
];
