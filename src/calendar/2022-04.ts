import type { CalendarType } from './calendar';

export const April2022: CalendarType = [
  {
    date: '2022-04-01',
    week: 2,
    season: 'lent',
    passages: ['Mdr 2, 1a. 12-22', 'Ps 34', 'J 7, 1-2. 10. 25-30'],
    notes: [
      '[HTML]Marii Egipcjanki[HTML] mn.',
      '[HTML]Melitona z Sardes[HTML] bp.',
    ],
  },
  {
    date: '2022-04-02',
    week: 2,
    season: 'lent',
    passages: ['Jr 11, 18-20', 'Ps 7', 'J 7, 40-53'],
    notes: ['[HTML]Franciszka z Paoli[HTML] mn.'],
  },
  {
    date: '2022-04-03',
    week: 1,
    season: 'lent',
    holidays: ['5. NIEDZIELA PRZYGOTOWANIA PASCHALNEGO'],
    passages: ['Ez 37, 12-14', 'Ps 130', 'Rz 8, 8-11', 'J 11, 1-45'],
    eve: {
      antiphon:
        'Jeśli ziarno pszenicy * nie wpadnie w ziemię i nie obumrze, / zostanie tylko samo; / lecz jeśli obumrze, / przynosi plon obfity.',
    },
    lauds: {
      antiphon: 'Zasnął przyjaciel nasz Łazarz, * lecz idę, aby go obudzić.',
    },
    vespers: {
      antiphon:
        'Panie, gdybyś był tutaj, Łazarz by nie umarł, * ale ja i tak wierzę, że jesteś Synem Bożym.',
    },
  },
  {
    date: '2022-04-04',
    week: 1,
    season: 'lent',
    notes: ['[HTML]Izydora z Sewilli[HTML] bp.'],
    passages: ['Dn 13, 1-9. 15-17. 19-30. 33-62', 'Ps 23', 'J 8, 1-11'],
  },
  {
    date: '2022-04-05',
    week: 1,
    season: 'lent',
    passages: ['Lb 21, 4-9', 'Ps 102', 'J 8, 21-30'],
  },
  {
    date: '2022-04-06',
    week: 1,
    season: 'lent',
    passages: ['Dn 3, 14-20. 91-92. 95', 'Dn 3', 'J 8, 31-42'],
    notes: ['[HTML]Jacquesa Fescha[HTML] w.'],
  },
  {
    date: '2022-04-07',
    week: 1,
    season: 'lent',
    passages: ['Rdz 17, 3-9', 'Ps 105', 'J 8, 51-59'],
  },
  {
    date: '2022-04-08',
    week: 1,
    season: 'lent',
    passages: ['Jr 20, 10-13', 'Ps 18', 'J 10, 31-42'],
  },
  {
    date: '2022-04-09',
    week: 1,
    season: 'lent',
    notes: [
      '[HTML]Achacego z Amidy[HTML] bp.',
      '[HTML]Dietricha Bonhoeffera[HTML] prezb. m. teo.',
    ],
    passages: ['Ez 37, 21-28', 'Jr 31', 'J 11, 45-56'],
  },
  {
    date: '2022-04-10',
    week: 2,
    season: 'pascha',
    holidays: ['NIEDZIELA PALMOWA'],
    passages: [
      'Łk 19, 28-40',
      'Iz 50, 4-7',
      'Ps 22',
      'Flp 2, 6-11',
      'Łk 22, 14-23, 56',
    ],
    links: [
      { name: 'wigilia', slug: 'niedziela-palmowa-wigilia' },
      { name: 'jutrznia', slug: 'niedziela-palmowa-jutrznia' },
      { name: 'nieszpory', slug: 'niedziela-palmowa-nieszpory' },
    ],
  },
  {
    date: '2022-04-11',
    week: 2,
    holidays: ['WIELKI PONIEDZIAŁEK'],
    season: 'pascha',
    passages: ['Iz 42, 1-7', 'Ps 27', 'J 12, 1-11'],
    links: [
      { name: 'jutrznia', slug: 'wielki-poniedzialek-jutrznia' },
      { name: 'nieszpory', slug: 'wielki-poniedzialek-nieszpory' },
    ],
  },
  {
    date: '2022-04-12',
    week: 2,
    season: 'pascha',
    holidays: ['WIELKI WTOREK'],
    passages: ['Iz 49, 1-6', 'Ps 71', 'J 13, 21-33. 36-38'],
    links: [
      { name: 'jutrznia', slug: 'wielki-wtorek-jutrznia' },
      { name: 'nieszpory', slug: 'wielki-wtorek-nieszpory' },
    ],
  },
  {
    date: '2022-04-13',
    week: 2,
    season: 'pascha',
    holidays: ['WIELKA ŚRODA'],
    passages: ['Iz 50, 4-9a', 'Ps 69', 'Mt 26, 14-25'],
    links: [
      { name: 'jutrznia', slug: 'wielka-sroda-jutrznia' },
      { name: 'nieszpory', slug: 'wielka-sroda-nieszpory' },
    ],
  },
  {
    date: '2022-04-14',
    week: 2,
    season: 'pascha',
    holidays: ['WIELKI CZWARTEK'],
    passages: ['Iz 61, 1-3a.6a.8b-9', 'Ps 89', 'Ap 1, 5-8', 'Łk 4, 16-21'], // FIXME: passages for the liturgy
    links: [
      { name: 'jutrznia', slug: 'wielki-czwartek-jutrznia' },
      { name: 'wigilia Wielkiego Piątku', slug: 'wielki-piatek-wigilia' },
    ],
  },
  {
    date: '2022-04-15',
    week: 2,
    season: 'pascha',
    holidays: ['WIELKI PIĄTEK', 'LITURGIA MĘKI PAŃSKIEJ'],
    passages: [
      'Iz 52, 13-53, 12',
      'Ps 31',
      'Hbr 4, 14-16; 5, 7-9',
      'J 18, 1-19, 42',
    ],
    links: [
      { name: 'jutrznia', slug: 'wielki-piatek-jutrznia' },
      { name: 'godzina czytań', slug: 'wielki-piatek-godzina-czytań' },
      { name: 'nieszpory', slug: 'wielki-piatek-nieszpory' },
    ],
  },
  {
    date: '2022-04-16',
    week: 2,
    season: 'pascha',
    holidays: ['WIELKA SOBOTA'],
    notes: [
      'Tego dnia sprawuje się wyłącznie Liturgię Godzin. Po zmroku rozpoczyna się Wigilia Paschalna',
    ],
    passages: [
      'Rdz 1, 1-2, 2',
      'Ps 104 (103), 1-2a. 5-6. 10 . 12. 13-14. 24 . 35c',
      'Rdz 22, 1-18',
      'Ps 16 (15), 5 . 8. 9-10. 11',
      'Wj 14, 15-15, 1',
      'Wj 15, 1. 2. 4-5. 17ab-18',
      'Iz 54, 4a. 5-14',
      'Ps 30 (29), 2 . 4. 5-6a. 11 . 12a . 13b',
      'Iz 55, 1-11',
      'Iz 12, 2. 3-4b. 4cd-5',
      'Ba 3, 9-15. 32-4, 4',
      'Ps 19 (18), 8-9. 10-11',
      'Ez 36, 16-17a. 18-28',
      'Rz 6, 3-11',
      'Ps 118 (117), 1-2. 16-17. 22-23',
      'Łk 24, 1-12',
    ],
    links: [
      { name: 'jutrznia', slug: 'wielka-sobota-jutrznia' },
      { name: 'godzina czytań', slug: 'wielka-sobota-godzina-czytań' },
      { name: 'w ciągu dnia', slug: 'wielka-sobota-w-ciagu-dnia' },
      { name: 'nieszpory', slug: 'wielka-sobota-nieszpory' },
    ],
  },
  {
    date: '2022-04-17',
    week: 2,
    season: 'pascha',
    holidays: ['PASCHA'],
    passages: ['Dz 10, 34a. 37-43', 'Ps 118', '1 Kor 5,6-8', 'J 20, 1-9'],
    notes: [
      'Wieczorem kończy się Triduum Paschalna i rozpoczyna się Oktawa Paschalna',
    ],
    links: [
      { name: 'jutrznia', slug: 'niedziela-zmartwychwstania-jutrznia' },
      { name: 'nieszpory', slug: 'niedziela-zmartwychwstania-nieszpory' },
    ],
  },
  {
    date: '2022-04-18',
    week: 2,
    season: 'pascha',
    holidays: ['PONIEDZIAŁEK PASCHALNY'],
    passages: ['Dz 2, 14. 22-33', 'Ps 16', 'Mt 28, 8-15'],
    links: [
      { name: 'jutrznia', slug: 'oktawa-paschalna-jutrznia' },
      { name: 'nieszpory', slug: 'oktawa-paschalna-nieszpory' },
    ],
  },
  {
    date: '2022-04-19',
    week: 2,
    season: 'pascha',
    holidays: ['WTOREK PASCHALNY'],
    passages: ['Dz 2, 36-41', 'Ps 33', 'J 20, 11-18'],
    links: [
      { name: 'jutrznia', slug: 'oktawa-paschalna-jutrznia' },
      { name: 'nieszpory', slug: 'oktawa-paschalna-nieszpory' },
    ],
  },
  {
    date: '2022-04-20',
    week: 2,
    season: 'pascha',
    holidays: ['ŚRODA PASCHALNA'],
    passages: ['Dz 3, 1-10', 'Ps 105', 'Łk 24, 13-35'],
    links: [
      { name: 'jutrznia', slug: 'oktawa-paschalna-jutrznia' },
      { name: 'nieszpory', slug: 'oktawa-paschalna-nieszpory' },
    ],
  },
  {
    date: '2022-04-21',
    week: 2,
    season: 'pascha',
    holidays: ['CZWARTEK PASCHALNY'],
    passages: ['Dz 3, 11-26', 'Ps 8', 'Łk 24, 35-48'],
    links: [
      { name: 'jutrznia', slug: 'oktawa-paschalna-jutrznia' },
      { name: 'nieszpory', slug: 'oktawa-paschalna-nieszpory' },
    ],
  },
  {
    date: '2022-04-22',
    week: 2,
    season: 'pascha',
    holidays: ['PIĄTEK PASCHALNY'],
    passages: ['Dz 4, 1-12', 'Ps 118', 'J 21, 1-14'],
    links: [
      { name: 'jutrznia', slug: 'oktawa-paschalna-jutrznia' },
      { name: 'nieszpory', slug: 'oktawa-paschalna-nieszpory' },
    ],
  },
  {
    date: '2022-04-23',
    week: 2,
    season: 'pascha',
    holidays: ['SOBOTA PASCHALNA'],
    passages: ['Dz 4, 13-21', 'Ps 118', 'Mk 16, 9-15'],
    notes: ['[HTML]Wojciecha[HTML] bp. i m.'],
    links: [
      { name: 'jutrznia', slug: 'oktawa-paschalna-jutrznia' },
      { name: 'nieszpory', slug: 'oktawa-paschalna-nieszpory' },
    ],
  },
  {
    date: '2022-04-24',
    week: 1,
    season: 'easter', // FIXME: discuss the naming - stay with Pascha in both cases?
    holidays: ['2. NIEDZIELA PASCHALNA'],
    passages: [
      'Dz 5, 12-16',
      'Ps 118',
      'Ap 1, 9-11a. 12-13. 17-19',
      'J 20, 19-31',
    ],
    links: [
      { name: 'jutrznia', slug: 'oktawa-paschalna-jutrznia' },
      { name: 'nieszpory', slug: 'oktawa-paschalna-nieszpory' },
    ],
  },
  {
    date: '2022-04-25',
    week: 1,
    season: 'easter',
    holidays: ['MARKA APOSTOŁA'],
    passages: ['1 P 5,5b-14', 'Ps 89', 'Mk 16, 15-20'],
  },
  {
    date: '2022-04-26',
    week: 1,
    season: 'easter',
    passages: ['Dz 4, 32-37', 'Ps 93', 'J 3, 7b-15'],
  },
  {
    date: '2022-04-27',
    week: 1,
    season: 'easter',
    passages: ['Dz 5, 17-26', 'Ps 34', 'J 3, 16-21'],
  },
  {
    date: '2022-04-28',
    week: 1,
    season: 'easter',
    passages: ['Dz 5, 27-33', 'Ps 34', 'J 3, 31-36'],
    notes: ['[HTML]Joanny Beretty Molli [HTML] w.'],
  },
  {
    date: '2022-04-29',
    week: 1,
    season: 'easter',
    passages: ['Dz 5, 34-42', 'Ps 27', 'J 6, 1-15'],
    notes: ['[HTML]Katarzyny ze Sieny [HTML] zak.'],
  },
  {
    date: '2022-04-30',
    week: 1,
    season: 'easter',
    passages: ['Dz 6, 1-7', 'Ps 33', 'J 6, 16-21'],
    notes: ['[HTML]Jakuba z Paradyża [HTML] mn.'],
  },
];
