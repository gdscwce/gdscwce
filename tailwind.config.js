/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gdsc-blue': '#4285F4',
        'gdsc-red': '#DB4437',
        'gdsc-yellow': '#F4B400',
        'gdsc-green': '#0F9D58',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'contact': 'rgba(66, 133, 244,1)0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;',
      },
      padding: {
        '3.5': '0.775rem',
      },
      height: {
        '80vh': 'calc(100vh - 5rem)',
      }
    },
  },
  plugins: [],
}