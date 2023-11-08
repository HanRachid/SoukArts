/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        colorBlack: '#292727',
        colorBrown: '#3F382B',
        colorGold: '#B48F57',
        colorBeige: '#D8CBC4',
        colorBeigeLight: '#EBE6E4',
      },
      fontFamily: {
        fontPrimary: ['Brown Sugar', 'sans-serif'],
        fontSecondary: ['ABeeZee', 'sans-serif'],
      },
    }
  },
  plugins: [],
};
