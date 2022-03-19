import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'
// import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

export default defineConfig({
  plugins: [
    vue()
    /*   createSvgIconsPlugin({
      iconDirs: [fileURLToPath(new URL('./src/renderer/assets/svg', import.meta.url))],
      symbolId: 'icon-[name]'
    }) */
  ],
  resolve: {
    alias: {
      '@renderer': fileURLToPath(new URL('./src/renderer', import.meta.url)),
      '@store': fileURLToPath(new URL('./src/renderer/store', import.meta.url))
    }
  }
})
