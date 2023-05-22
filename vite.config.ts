import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // strategies: 'injectManifest',
      includeAssets: ['favicon.ico', 'maskable.png', 'assets/loading_gif2.gif', 'robots.txt', 'assets/icon-dark-theme.svg', 'assets/icon-light-theme.svg', 'sw.js'], // Ensure 'sw.js' is included here
      registerType: 'autoUpdate',
      manifest: <any>{
        fileName: 'manifest.json',
      },

    })
  ],
})
