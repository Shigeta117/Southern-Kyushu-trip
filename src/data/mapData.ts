import type { MapPoint, RouteSegment } from './types'
import { dayColors } from './trip'

// 地図用のウェイポイント（マーカー）。order はマーカー番号。
// 2026-08-23 夜に屋久島行きを中止したため、D3・D4 を桜島／熊本に差し替えた。
export const mapPoints: MapPoint[] = [
  // Day 1 — 8/23(日) 熊本 → 阿蘇 → 高千穂 → 宮崎【実績】
  { name: '阿蘇くまもと空港', coord: { lat: 32.8373, lng: 130.8551 }, day: 1, order: 1, kind: 'start' },
  { name: '熊本県庁（ルフィ像）', coord: { lat: 32.7904, lng: 130.7422 }, day: 1, order: 2 },
  { name: 'いまきん食堂（内牧）', coord: { lat: 32.947, lng: 131.08 }, day: 1, order: 3 },
  { name: '大観峰', coord: { lat: 32.9709, lng: 131.1078 }, day: 1, order: 4 },
  { name: 'ウソップ像（阿蘇駅前）', coord: { lat: 32.937, lng: 131.0809 }, day: 1, order: 5 },
  { name: 'フランキー像（高森駅）', coord: { lat: 32.8193, lng: 131.1225 }, day: 1, order: 6 },
  { name: '高千穂峡', coord: { lat: 32.7018, lng: 131.3009 }, day: 1, order: 7 },
  { name: '宮崎・赤江（泊）', coord: { lat: 31.8781, lng: 131.4322 }, day: 1, order: 8, kind: 'stay' },
  // Day 2 — 8/24(月) 宮崎 → えびの高原 → 霧島 → 鹿児島
  { name: 'えびの高原', coord: { lat: 31.9446, lng: 130.853 }, day: 2, order: 9 },
  { name: '霧島神宮', coord: { lat: 31.8589, lng: 130.8722 }, day: 2, order: 10 },
  { name: '鹿児島・小川町（泊）', coord: { lat: 31.5962, lng: 130.5602 }, day: 2, order: 11, kind: 'stay' },
  // Day 3 — 8/25(火) 桜島 → 鹿児島（屋久島から差し替え）
  { name: '桜島港', coord: { lat: 31.5797, lng: 130.6097 }, day: 3, order: 12 },
  { name: '湯之平展望所', coord: { lat: 31.5915, lng: 130.63 }, day: 3, order: 13 },
  { name: '有村溶岩展望所', coord: { lat: 31.5567, lng: 130.6781 }, day: 3, order: 14 },
  { name: '黒神埋没鳥居', coord: { lat: 31.5846, lng: 130.7062 }, day: 3, order: 15 },
  { name: '8/25 の宿【未定】', coord: { lat: 31.5962, lng: 130.5602 }, day: 3, order: 16, kind: 'stay' },
  // Day 4 — 8/26(水) 熊本へ北上 → 成田
  { name: '熊本城', coord: { lat: 32.8061, lng: 130.7059 }, day: 4, order: 17 },
  { name: '阿蘇くまもと空港', coord: { lat: 32.8373, lng: 130.8551 }, day: 4, order: 18, kind: 'goal' },
]

// ルート（線）。ferry/boat は破線で表現。
export const routeSegments: RouteSegment[] = [
  {
    day: 1,
    mode: 'drive',
    color: dayColors.d1,
    coords: [
      { lat: 32.8373, lng: 130.8551 },
      { lat: 32.7904, lng: 130.7422 },
      { lat: 32.947, lng: 131.08 },
      { lat: 32.9709, lng: 131.1078 },
      { lat: 32.937, lng: 131.0809 },
      { lat: 32.8193, lng: 131.1225 },
      { lat: 32.7018, lng: 131.3009 },
      { lat: 31.8781, lng: 131.4322 },
    ],
  },
  {
    day: 2,
    mode: 'drive',
    color: dayColors.d2,
    coords: [
      { lat: 31.8781, lng: 131.4322 },
      { lat: 31.9446, lng: 130.853 },
      { lat: 31.8589, lng: 130.8722 },
      { lat: 31.5962, lng: 130.5602 },
    ],
  },
  {
    day: 3,
    mode: 'ferry',
    color: dayColors.d3,
    coords: [
      { lat: 31.599, lng: 130.568 },
      { lat: 31.5797, lng: 130.6097 },
    ],
  },
  {
    day: 3,
    mode: 'drive',
    color: dayColors.d3,
    coords: [
      { lat: 31.5797, lng: 130.6097 },
      { lat: 31.5915, lng: 130.63 },
      { lat: 31.5846, lng: 130.7062 },
      { lat: 31.5567, lng: 130.6781 },
      { lat: 31.5797, lng: 130.6097 },
    ],
  },
  {
    day: 4,
    mode: 'drive',
    color: dayColors.d4,
    coords: [
      { lat: 31.5962, lng: 130.5602 },
      { lat: 32.8061, lng: 130.7059 },
      { lat: 32.8373, lng: 130.8551 },
    ],
  },
]

if (import.meta.env.DEV) {
  const orders = mapPoints.map((p) => p.order).sort((a, b) => a - b)
  for (let i = 0; i < orders.length; i++) {
    if (orders[i] !== i + 1) {
      console.warn(`[mapData] Missing or duplicate order detected: expected ${i + 1}, found ${orders[i]}`)
    }
  }
}
