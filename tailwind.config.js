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
        'gray' : '#6F737E',
      },
      fontFamily: {
        fira: ['FiraCode'],
        tommy: ['MadeTommy'],
        tommybold: ['MadeTommyBold'],
        chivo: ['Chivo'],
      },
      boxShadow: {
        'white': '0 4px 2px -2px rgba(247, 251, 250, 0.45)',
        'green': '0 4px 4px 0px rgba(12, 202, 74, 0.45)',
        'red': '0 4px 4px 0px rgba(235, 64, 52, 0.45)',
        'dark': '0 4px 4px 0px rgba(35, 35, 47, 0.45)',
      }
    },
    fontSize: {
        'title': '1.5625rem',
        'subtext' : '0.625rem',
    }, 
  },
  plugins: [],
}


