import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    include: '**/*.jsx'
  })],
  resolve: {
    extensions: ['.js', '.jsx', '.json', 'ts', 'tsx'],
  },
  server: {
    port: 8080
  }
})
