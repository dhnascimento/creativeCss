/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
    content: ["./src/**/*.{html,js}", "./index.html", './{html,js}'],
    theme: {
      extend: {
        colors: {
            'nyanza': '#D0E3CC',
            'light-yellow': '#F7FFDD',
            'mindaro': '#FCFDAF',
            'flax': '#EFD780',
            'earth-yellow': '#DBA159'
        },
        textShadow: {
          sm: '0 1px 2px var(--tw-shadow-color)',
          DEFAULT: '0 2px 4px var(--tw-shadow-color)',
          lg: '0 8px 16px var(--tw-shadow-color)',
        },
      },
    },
    plugins: [
      plugin(function ({ matchUtilities, theme }) {
        matchUtilities(
          {
            'text-shadow': (value) => ({
              textShadow: value,
            }),
          },
          { values: theme('textShadow') }
        )
      }),
    ],
  }