import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    json: {
    stringify: true
  },
  plugins: [react()],
    base: '/portfolio/' // Замените на имя вашего репозитория
})