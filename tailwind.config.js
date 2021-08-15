module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      green: {
        DEFAULT: '#88BB2D',
        50: '#EBF6D8',
        100: '#E0F1C3',
        200: '#CBE79A',
        300: '#B6DD71',
        400: '#A1D348',
        500: '#88BB2D',
        600: '#6A9223',
        700: '#4C6919',
        800: '#2E400F',
        900: '#101705',
      },
      yellow: {
        DEFAULT: '#F9C301',
        50: '#FFF8E1',
        100: '#FFF3C7',
        200: '#FFE794',
        300: '#FEDC62',
        400: '#FED12F',
        500: '#F9C301',
        600: '#C69B01',
        700: '#937301',
        800: '#614C00',
        900: '#2E2400',
      },
      red: {
        DEFAULT: '#FF0102',
        50: '#FFE6E7',
        100: '#FFCDCD',
        200: '#FF9A9A',
        300: '#FF6768',
        400: '#FF3435',
        500: '#FF0102',
        600: '#CD0001',
        700: '#9A0001',
        800: '#670000',
        900: '#340000',
      },
      orange: {
        DEFAULT: '#E88008',
        50: '#FEECD8',
        100: '#FDE0BF',
        200: '#FBC88E',
        300: '#F9B15D',
        400: '#F8992B',
        500: '#E88008',
        600: '#B76506',
        700: '#854A05',
        800: '#542E03',
        900: '#231301',
      },
      gray: {
        DEFAULT: '#777777',
        50: '#EAEAEA',
        100: '#DDDDDD',
        200: '#C3C3C3',
        300: '#AAAAAA',
        400: '#919191',
        500: '#777777',
        600: '#5E5E5E',
        700: '#444444',
        800: '#2A2A2A',
        900: '#111111',
      },
      dark: '#000000',
      white: '#FFFFFF',
      transparent: 'transparent',
    },
  },
  extend: {
    borderWidth: { 1: '1px' },
  },
  fontFamily: {
    main: ['Lato', 'sans-serif'],
  },
  darkMode: 'media',
  variants: {},
  plugins: [],
};
