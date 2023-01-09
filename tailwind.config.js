/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // boxShadowColor: {
      //   'gdsc-gradient': 'linear-gradient(90deg, #4285F4 0%, #DB4437 20%, #F4B400 40%, #0F9D58 60%, #4285F4 80%)',
      //   'gdsc-gradient-reverse': 'linear-gradient(90deg, #4285F4 0%, #0F9D58 20%, #F4B400 40%, #DB4437 60%, #4285F4 80%)',
      // },
      colors: {
        'gdsc-blue': '#4285F4',
        'gdsc-red': '#DB4437',
        'gdsc-yellow': '#F4B400',
        'gdsc-green': '#0F9D58',
        'gdsc-gradient': 'linear-gradient(90deg, #4285F4 0%, #DB4437 20%, #F4B400 40%, #0F9D58 60%, #4285F4 80%)',
        'gdsc-gradient-reverse': 'linear-gradient(90deg, #4285F4 0%, #0F9D58 20%, #F4B400 40%, #DB4437 60%, #4285F4 80%)',

      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'contact': 'rgba(66, 133, 244,1)0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;',
        'footer': '0px 5px 12px rgba(0, 0, 0, 0.35)'
      },
      padding: {
        '3.5': '0.775rem',
      },
      height: {
        '80vh': 'calc(100vh - 5rem)',
        '50vh': 'calc(100vh - 22rem)',
      }
    },
  },
  plugins: [],
}