import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set base path conditionally
export default defineConfig({
  base: process.env.VERCEL ? '/' : '/Dice-Game/',
  plugins: [react()],
})
