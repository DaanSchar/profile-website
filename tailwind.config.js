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
    },
    screens: {
      'xs': '300px',
      'sm': '470px',
      'md': '720px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
  darkMode: 'class',
}
