import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'leaflet/dist/leaflet.css'
import './index.css'
import App from './App'

// フォント（Noto Sans JP）は index.html の Google Fonts から読み込み、
// Service Worker でランタイムキャッシュする（必要なサブセットのみ＝軽量・オフライン対応）

const rootEl = document.getElementById('root')
if (!rootEl) throw new Error('Root element #root not found')

createRoot(rootEl).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
