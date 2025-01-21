/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'main-background':'#121212',
        'bg-button':'#FD6F00',
        'logo-gradient-start': '#FA6E00', // начальный цвет
        'logo-gradient-end': '#E60026', // конечный цвет
      },
       fontFamily: {
        roboto: ['Montserrat'],  // Добавляем шрифт в Tailwind
      },
    },
  },
  plugins: [],
}