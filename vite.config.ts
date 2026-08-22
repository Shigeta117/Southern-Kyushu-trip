import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// base は Vercel（ルートドメイン配信）向けに '/' を指定。
export default defineConfig({
  base: '/',
  // 開発ポートは brain の life/dev-ports.md が正本。このリポの割り当ては 3170 番台。
  // strictPort を外すと Vite が黙って隣の番号へ逃げ、割り当て表が嘘になる。
  // 埋まっていたら落として原因を調べる（隣へずらさない）。
  server: { port: 3170, strictPort: true },
  preview: { port: 3171, strictPort: true },
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icon.svg', 'apple-touch-icon.png'],
      manifest: {
        name: '南九州＆屋久島 3泊4日 旅のしおり',
        short_name: '旅のしおり',
        description: '熊本・阿蘇・高千穂・宮崎・霧島・桜島・鹿児島・屋久島をめぐる2026/8/23-26 3泊4日のモバイル旅のしおり',
        lang: 'ja',
        theme_color: '#1d2e1a',
        background_color: '#f7f4ec',
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
