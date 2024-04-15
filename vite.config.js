import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // add this line only for deployment
  base: "/job-listings",
  plugins: [react()],
  build: {
    outDir: "dist",
  },
})
