/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      bodoni: ["Bodoni Moda", "serif"],
      opensans: ["Open Sans", "sans-serif"],
    }
  },
  plugins: [],
  darkMode: 'class',
}
