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
        fira: ['"FiraCode"', "sans-serif"],
        tommy: ['"MadeTommy"', "sans-serif"],
      },
      boxShadow: {
        'default': '0 4px 4px 0px rgba(247, 251, 250, 0.25)',
      }
    },
    fontSize: {
        'title': '1.5625rem',
        'subtext' : '0.625rem',
    }, 
  },
  plugins: [],
}


