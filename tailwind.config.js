/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Roboto Mono', 'sans-serif']
    },
    fontWeight: {
      extralight: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    },
    extend: {
      colors: {
        primary: '#6fe1ff',
        secondary: '#f67b39',
        terciary: '#10bba8',
        darken: '#242424',
        lighten: '#fefe',
        shadow: '#363636',
      }
    },
  },
  plugins: [],
}
