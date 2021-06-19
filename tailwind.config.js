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
    extend: {
      colors: {
        rkkGreen: { DEFAULT: '#88BB2D' }, // from the website
        rkkYellow: { DEFAULT: '#F9C301' },
        rkkRed: { DEFAULT: '#FF0102' },
        rkkOrange: { DEFAULT: '#E88008' },
      },
    },
  },
  variants: {},
  plugins: [],
};
