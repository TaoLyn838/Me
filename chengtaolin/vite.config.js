import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
// `base` must match the GitHub Pages sub-path (https://taolyn838.github.io/Me/).
// Override with VITE_BASE=/ when building for a root domain.
export default defineConfig({
  base: process.env.VITE_BASE ?? '/Me/',
  plugins: [react(), svgr()],
})
