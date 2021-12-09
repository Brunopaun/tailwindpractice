module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:{
      'Rubik': ['Rubik', 'sans-serif']
    },
    extend: {
      zIndex: {
        '-10':'-10',
      },
      colors:{
        primary:{
          'paleviolet': 'hsl(276,100% 81%)',
          'moderateviolet': 'hsl(271, 15%, 43%)',
          'desaturatedarkviolet': 'hsl(271, 15%, 43%)',
          'grayishblue': 'hsl(206, 6%, 79%)',
          'verydarkdesaturatedviolet': 'hsl(271, 36%, 24%)',
          'darkgrayishviolet': 'hsl(270, 7%, 64%)'  
        },
        gradient:{
          'lightmagenta': 'hsl(293, 100%, 63%)',
          'lightviolet': 'hsl(264, 100%, 61%)'
        },
        secondary: {
          'lightgrayishviolet': 'hsl(270, 20%, 96%)',
          'verydarkdesaturatedviolet': 'hsl(271, 36%, 24%)',
          'verylightmagenta': 'hsl(289, 100%, 72%)'
        }
      },
      fontSize:{
        'ss': ['0.60rem', '0.8rem']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
