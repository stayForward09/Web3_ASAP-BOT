/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,

      // Site colors
      mainBg: "#13131A",
      subBg: "#1C1C24",
      blueText: "#00D2FF",
      inactiveColor: "#92929D",
    },
    screens: {
      // => @media (min-width: 350px) { ... }
      'xsm': '350px',
      // => @media (min-width: 400px) { ... }
      'ssm': '400px',
      // => @media (min-width: 500px) { ... }
      'smm': '500px',
      // => @media (min-width: 640px) { ... }
      'sm': '640px',
      // => @media (min-width: 768px) { ... }
      'md': '768px',
      // => @media (min-width: 1024px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1280px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1500px) { ... }
      '1.5xl': '1400px',
      // => @media (min-width: 1500px) { ... }
      '2xl': '1500px',
      // => @media (min-width: 1600px) { ... }
      '3xl': '1600px',
      // => @media (min-width: 1700px) { ... }
      '4xl': '1700px',
      // => @media (min-width: 1800px) { ... }
      '5xl': '1800px',
    },
    fontFamily: {
      "body": ["Poppins", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        opacity: 'opacity .5s ease-out 1',
      },
      keyframes: {
        opacity: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        }
      }
    },
  },
  plugins: [],
}