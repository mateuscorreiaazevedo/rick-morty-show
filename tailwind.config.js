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
        primary: '#53aaeb',
        'primary-alpha': 'rgba(85, 170, 235, 0.5)',
        secondary: '#e43457',
        darken: '#242424',
        lighten: '#fefe',
        'gray-scale': '#363636',
        'gray-alpha': 'rgba(54, 54, 54, 0.6)'
      }
    },
  },
  plugins: [],
}
