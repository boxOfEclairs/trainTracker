/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
    "./src/components/*.{js,ts,jsx,tsx}",
  ],
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
        'dark' : '#15171A',
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
        'green': '0 -1px 4px 0px rgba(21, 23, 26, 0.25), 0 2px 4px 0px rgba(12, 202, 74, 0.45)',
        'red': '0 0px 4px 0px rgba(21, 23, 26, 0.25), 0 2px 4px 0px rgba(235, 64, 52, 0.45)',
        'dark': '0px 4px 4px 0px rgba(21, 23, 26, 0.25)',
        'shadow': '0px -1px 4px 0px rgba(21, 23, 26, 0.25), 0px 2px 4px 0px rgba(21, 23, 26, 0.45)',
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

