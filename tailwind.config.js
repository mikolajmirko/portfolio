const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      black: '#424242',
      yellow: {
        100: '#FAD872',
        200: '#EBC451'
      },
      blueGray: colors.blueGray,
      gray: colors.gray,
      amber: colors.amber,
      sky: colors.sky,
      indigo: colors.indigo,
      violet: colors.violet
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      zIndex: {
        60: '60'
      },
      animation: {
        blob: 'blob 8s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px,0px) scale(1)',
          },
          '33%': {
            transform: 'translate(40px,-40px) scale(1.2)',
          },
          '66%': {
            transform: 'translate(-20px,20px) scale(0.8)',
          },
          '100%': {
            transform: 'translate(0px,0px) scale(1)',
          },
        },
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
