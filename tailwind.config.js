/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        white: '#FFFFFF',
        textColor: '#323244',
        neutral: '#928A9F',
        borderColor: '#E6E7E9',
        buttonColor: ' #928A9F',
        buttonBackground: '#E7E6EA',
        haveAnAccount: '#615474',
        password: '#6200EE',
        serviceHero: '#F6F2FE',
        lightPurple: '#F3EFF8',
        strokeBg: '#5900D9'
     
      },
      backgroundImage: {
        'purpleGradient': 'linear-gradient(270deg, #EFE6FD 0%, #B78AF7 100%)',
      },
    },
  },
  plugins: [],
}

