/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
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
  plugins: [daisyui],
};
