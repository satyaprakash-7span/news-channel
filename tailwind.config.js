module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      padding: ['hover'],
      maxHeight: ['focus'],
      divideColor: ['group-hover'],
      backgroundColor: ['group-focus'],
      scale: ['focus-within'],
      animation: ['motion-safe'],
    },
  },
  plugins: [],
}
