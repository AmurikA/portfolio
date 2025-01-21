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
        'describe-gray':"#707070"
      },
        keyframes: {
        'fade-slide': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-slide': 'fade-slide 1s ease-in-out',
      },
       fontFamily: {
        roboto: ['Montserrat'],  // Добавляем шрифт в Tailwind
      },
    },
  },
  plugins: [],
}