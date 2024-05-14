/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'alertGreen' : '#0cca4a',
        'alertRed' : '#ae2a36',
        'white' : '#F7FBFA',
        'back' : '#15171A',
        'front' : '#23232F',
      },
      fontFamily: {
        fira: ['"FiraCode"', "sans-serif"],
        tommy: ['"MadeTommy"', "sans-serif"],
      }
    },
    fontSize: {
        'title': '1.5625rem',
        'subtext' : '0.625rem',
    }, 
  },
  plugins: [],
}


