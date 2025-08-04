import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set base path conditionally
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/Dice-Game/' : '/',
  plugins: [react()],
})
