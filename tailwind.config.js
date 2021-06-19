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
      green: { DEFAULT: '#88BB2D' },
      yellow: { DEFAULT: '#F9C301' },
      red: { DEFAULT: '#FF0102' },
      orange: { DEFAULT: '#E88008' },
      gray: { DEFAULT: '#777777' },
      dark: '#2E293B',
      white: '#FFFFFF',
      transparent: 'transparent',
    },
    fontFamily: {
      main: ['Lato', 'sans-serif'],
    },
  },
  variants: {},
  plugins: [],
};
