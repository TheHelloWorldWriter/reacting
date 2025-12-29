import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    // Oxc minifier is already the default in rolldown-vite
    minify: 'oxc',

    // Target modern browsers for smaller bundle
    target: 'esnext',

    // Disable source maps in production for smaller output
    sourcemap: false,
  },
})
