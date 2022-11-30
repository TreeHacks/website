/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      'animation': {
        'text': 'text 5s ease infinite',
      },
      'keyframes': {
        'text': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
      }
    },
    fontFamily: {
      'CerealBD': ['CerealBD', ...defaultTheme.fontFamily.sans],
      'CerealBK': ['CerealBK', ...defaultTheme.fontFamily.sans],
      'CerealBlk': ['CerealBlk', ...defaultTheme.fontFamily.sans],
      'CerealLt': ['CerealLt', ...defaultTheme.fontFamily.sans],
      'CerealMd': ['CerealMd', ...defaultTheme.fontFamily.sans],
      'CerealXBd': ['CerealXBd', ...defaultTheme.fontFamily.sans],
    }
  },
  plugins: [],
}
