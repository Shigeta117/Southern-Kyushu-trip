import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// base は相対指定。GitHub Pages のサブパス（例 /repo-name/）配信でも、
// リポジトリ名が変わっても壊れない。独自ドメイン/ルート配信なら '/' に変更可。
export default defineConfig({
  base: './',
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icon.svg', 'apple-touch-icon.png'],
      manifest: {
        name: '南九州＆屋久島 3泊4日 旅のしおり',
        short_name: '旅のしおり',
        description: '熊本・阿蘇・高千穂・霧島・桜島・鹿児島・屋久島をめぐる3泊4日のモバイル旅のしおり',
        lang: 'ja',
        theme_color: '#14532d',
        background_color: '#f8fafc',
        display: 'standalone',
        orientation: 'portrait',
        icons: [
          { src: 'icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
          { src: 'icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
          { src: 'icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
          { src: 'icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
        ],
      },
      workbox: {
        // アプリシェル（JS/CSS/HTML/アイコン）のみプリキャッシュ。
        // フォント・地図タイルは下の runtimeCaching で必要分だけ取得（軽量化）。
        globPatterns: ['**/*.{js,css,html,svg,png}'],
        runtimeCaching: [
          {
            // 一度表示した地図タイルはオフラインでも再表示できる
            urlPattern: /^https:\/\/[a-d]\.basemaps\.cartocdn\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'map-tiles',
              expiration: { maxEntries: 800, maxAgeSeconds: 60 * 60 * 24 * 30 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            // Google Fonts のCSS
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'StaleWhileRevalidate',
            options: { cacheName: 'google-fonts-stylesheets' },
          },
          {
            // Google Fonts の本体（woff2）。必要なサブセットのみキャッシュ
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-webfonts',
              expiration: { maxEntries: 30, maxAgeSeconds: 60 * 60 * 24 * 365 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
        ],
      },
    }),
  ],
})
