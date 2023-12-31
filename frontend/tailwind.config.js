/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import withMT from "@material-tailwind/react/utils/withMT";
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        colorBlack: "#292727",
        colorBrown: "#3F382B",
        black: {
          50: "#f6f5f5",
          100: "#e7e6e6",
          200: "#d2cfd0",
          300: "#b2aeaf",
          400: "#8b8586",
          500: "#706a6b",
          600: "#605a5b",
          700: "#514d4d",
          800: "#474343",
          900: "#3e3b3b",
          950: "#292727",
        },
        gold: {
          50: "#f7f5ef",
          100: "#ece5d5",
          200: "#dbcdad",
          300: "#c6ad7e",
          400: "#b48f57",
          500: "#a67e4c",
          600: "#8f653f",
          700: "#734e35",
          800: "#614232",
          900: "#543a2f",
          950: "#301d18",
        },
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
  daisyui: {
    themes: ["light"],
  },
});
