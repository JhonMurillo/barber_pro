module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        barberRed: '#C53030',
        barberBlack: '#0d0d0d',
        barberGray: '#1f1f1f',
        barberGold: '#D4AF37',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['Oswald', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
