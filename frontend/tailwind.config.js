/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        colorBlack: '#292727',
        colorBrown: '#3F382B',
        colorGold: '#848F57',
        colorBeige: '#D8CBC4',
        colorBeigeLight: '#EBE6E4',
      },
      fonts: {
        fontPrimary: ['Brown Sugar', 'sans-serif'],
        fontSecondary: ['ABeeZee', 'sans-serif'],
      },
    },
    fontSize: {
      SizeSmall: '16px',
      SizeMedium: '18px',
      SizeLarge: '24px',
      SizeHeading: '54px',
      SizeHeadingXL: '65px',

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
