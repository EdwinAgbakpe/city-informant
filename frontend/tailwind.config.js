module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: '#49a078',
        blue: '#008bc2',
        red: '#db3a34',
        paper: '#ebf5ee',
        black: '#1e1e24',
        silver: '#aeaeb9',
      },
      maxWidth: {
        content: 'max-content',
      },
    },
    fontFamily: {
      sans: 'Josefin\\ Sans',
      hand: 'Comforter\\ Brush',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
