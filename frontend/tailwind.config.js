/** @type {import('tailwindcss').Config} */

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
      },
      fontSize: {
        small: "16px",
        medium: "18px",
        large: "24px",
        heading: "54px",
        'heading-xl': "65px",
      },
      fontFamily: {
        primary: ["BrownSugar", "sans-serif"],
        secondary: ["ABeeZee", "sans-serif"],
      },
    },
  },
  plugins: [],
};
