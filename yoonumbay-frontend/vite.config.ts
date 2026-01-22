import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // ← Ajoutez cette importation

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // ← Ajoutez cet alias
    },
  },
})