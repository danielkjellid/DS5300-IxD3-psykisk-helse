module.exports = {
  theme: {
    extend: {
      colors: {
        'ps-orange': '#E86354',
      },
      screens: {
        xs: '412px',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/custom-forms')],
  purge: {
    content: ['./public/**/*.html', './src/**/*.vue'],
    options: {
      whitelistPatterns: [
        /-(leave|enter|appear)(|-(to|from|active))$/,
        /^(?!(|.*?:)cursor-move).+-move$/,
        /^router-link(|-exact)-active$/,
      ],
    },
  },
}
