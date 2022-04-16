import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'url'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@renderer': fileURLToPath(new URL('./src/renderer', import.meta.url)),
      '@store': fileURLToPath(new URL('./src/renderer/store', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/renderer/components', import.meta.url)),
      '@router': fileURLToPath(new URL('./src/renderer/router', import.meta.url)),
      '@view': fileURLToPath(new URL('./src/renderer/view', import.meta.url)),
      '@util': fileURLToPath(new URL('./src/renderer/util', import.meta.url)),
      '@api': fileURLToPath(new URL('./src/renderer/api', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/renderer/assets', import.meta.url))
    }
  }
})
