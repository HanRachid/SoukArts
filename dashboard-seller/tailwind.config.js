/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT"
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        colorBlack: "#292727",
        colorBrown: "#3F382B",
        colorGold: "#B48F57",
        colorBeige: "#D8CBC4",
        colorBeigeLight: "#EBE6E4",
        colorLight: "#EBE6E3",
        'gold': {
          '50': '#f7f5ef',
          '100': '#ece5d5',
          '200': '#dbcdad',
          '300': '#c6ad7e',
          '400': '#b48f57',
          '500': '#a67e4c',
          '600': '#8f653f',
          '700': '#734e35',
          '800': '#614232',
          '900': '#543a2f',
          '950': '#301d18',
      },
      },
      fontSize: {
        small: "1rem",
        medium: "1.125rem",
        large: "1.5rem",
        extraLarge: "2.5rem",
        heading: "3.375rem",
        headingXl: "4.0625rem",
      },
      fontFamily: {
        primary: ["BrownSugar", "sans-serif"],
        secondary: ["ABeeZee", "sans-serif"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
});
