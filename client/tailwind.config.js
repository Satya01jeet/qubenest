export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#FFD700',
      },
      fontFamily: {
        'winterSelfie': ['winterSelfie', 'sans-serif'],
        'merriweather': ['Merriweather', 'serif'],
      }
    },
  },
  plugins: [],
}