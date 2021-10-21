const colors = require('tailwindcss/colors')

module.exports = {
  corePlugins: {
    order: false,
  },
  theme: {
    extend: {
      order: {
        first: '-9999',
        last: '9999',
        normal: '0',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
      },

      fontFamily: {
        base: ['Inter', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
      colors: {
        gray: colors.blueGray,
        primary: {
          50: '#f7f6fe',
          100: '#efedfc',
          200: '#d6d3f9',
          300: '#beb8f5',
          400: '#8d83ed',
          500: '#5c4ee5',
          600: '#5346ce',
          700: '#453bac',
          800: '#372f89',
          900: '#2d2670',
        },
        yellow: {
          500: '#FF823D',
        },
        black: '#040405',
        brand: '#F5A623',

        'dashboard-active': 'rgba(1, 1, 1, 0.15)',
      },
      spacing: {
        7: '1.75rem',
        9: '2.25rem',
        72: '18rem',
        80: '20rem',
        hero: '80vh',
      },
      screens: {
        xxl: '1440px',
      },
    },
  },
  variants: {
    extend: {
      order: ['hover', 'focus'],
    },
    zIndex: ['hover'],
    textColor: [
      'responsive',
      'hover',
      'focus',
      'active',
      'visited',
      'group-hover',
    ],
    display: [
      'responsive',
      'hover',
      'focus',
      'active',
      'visited',
      'group-hover',
    ],
    borderColor: ['responsive', 'hover', 'focus', 'active', 'focus-within'],
    borderRadius: ['responsive', 'hover', 'first', 'last', 'group-hover'],
    boxShadow: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    borderStyle: ['responsive', 'hover', 'first', 'last'],
    borderWidth: ['responsive', 'last', 'hover', 'focus'],
  },
}
