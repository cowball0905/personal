/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{vue,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        sans: ['SUSE','sans-serif']
      },
      gridTemplateColumns:{
        '70/30':'70/28%'
      }

    },
  },
  plugins: [],
}

