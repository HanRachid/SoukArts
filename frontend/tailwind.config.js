/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      colorBlack: '#292727',
      colorBrown: '#3F382B',
      colorGold: '#B48F57',
      colorBeige: '#D8CBC4',
      colorBeigeLight: '#EBE6E4',
    },
    sizes:{
      fontSizeSmall: '16px',
      fontSizeMedium: '18px',
      fontSizeLarge: '24px',
      fontSizeHeading: '54px',
      fontSizeHeadingXL: '65px',
    },
    fonts: {
     fontPrimary: ['Brown Sugar', 'sans-serif'],
     fontSecondary: ['ABeeZee', 'sans-serif'],
    }
  },
  plugins: [],
};
