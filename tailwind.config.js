/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    container: {
      center:'true',
    },
    fontFamily: {
      lexand: 'Lexend Deca',
      shouldersDisplay : 'Big Shoulders Display',
    },
    colors: {
      brightOrange: 'hsl(31, 77%, 52%)',
      darkCyan: 'hsl(184, 100%, 22%)',
      veryDarkCyan: 'hsl(179, 100%, 13%)',
      parWhite: 'hsla(0, 0%, 100%, 0.75)',
      headingGray: 'hsla(0, 0%, 100%, 0.75)',

    },
    extend: {},
  },
  plugins: [],
}
