/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      inter: ["inter", "sans-serif"],
      montserrat: ["montserrat", "sans-serif"],
      lato_bl: ["lato-bold", "sans-serif"],
    },
  },
  plugins: [],
};
