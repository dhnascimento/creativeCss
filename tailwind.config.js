/** @type {import('tailwindcss').Config} */
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
        }
      },
    },
    plugins: [],
  }