module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'white': '#ccc'
      },
      maxWidth: {
        hd: '1920px'
      }
    },
  },
  plugins: [],
}
