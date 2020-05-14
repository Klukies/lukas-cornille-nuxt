/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      colors: {
        orange: {
          ...colors.orange,
          '700': '#d36135',
        },
      },
      fontSize: {
        '7xl': '5rem',
      },
      padding: {
        '72': '18rem',
      },
    },
  },
  variants: {},
  plugins: [],
};
