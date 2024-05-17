/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'tablet': '768px',

      'desktop': '1280px',
    },
    extend: {
      colors: {
        'alertGreen' : '#0cca4a',
        'alertRed' : '#ae2a36',
        'white' : '#F7FBFA',
        'back' : '#15171A',
        'front' : '#23232F',
        'gray' : '#6F737E',
        'button' : '#1E2D4C',
        'buttonPressed' : '#314C7D',
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
        'button': '0 4px 4px 0px rgba(30, 45, 76, 0.45)',
      }
    },
    fontSize: {
        'title': '1.5625rem',
        'subtext' : '0.625rem',
        'header': '.975rem',
    }, 
  },
  plugins: [],
}


