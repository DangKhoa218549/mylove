import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/mylovemylove/', // Ví dụ: /mylove/
  plugins: [react()],
})
