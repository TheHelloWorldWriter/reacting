import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/hello-react/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    // Oxc minifier is the default in Vite 8
    minify: 'oxc',

    // Vite 8 default: baseline-widely-available (Chrome 111+, Edge 111+, Firefox 114+, Safari 16.4+)
    // Using esnext for even smaller bundles (assumes native dynamic imports, minimal transpiling)
    target: 'esnext',

    // Disable source maps in production for smaller output
    sourcemap: false,
  },
})
