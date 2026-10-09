import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      react: fileURLToPath(new URL('./node_modules/react', import.meta.url)),
      'react-dom': fileURLToPath(new URL('./node_modules/react-dom', import.meta.url)),
      'framer-motion': fileURLToPath(new URL('./node_modules/framer-motion', import.meta.url)),
      firebase: fileURLToPath(new URL('./node_modules/firebase', import.meta.url)),
      '@supabase/supabase-js': fileURLToPath(new URL('./node_modules/@supabase/supabase-js', import.meta.url)),
      '@react-three/fiber': fileURLToPath(new URL('./node_modules/@react-three/fiber', import.meta.url)),
      '@react-three/drei': fileURLToPath(new URL('./node_modules/@react-three/drei', import.meta.url)),
      three: fileURLToPath(new URL('./node_modules/three', import.meta.url)),
    },
  },
})
