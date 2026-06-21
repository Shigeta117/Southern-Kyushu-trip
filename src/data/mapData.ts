import type { MapPoint, RouteSegment } from './types'
import { dayColors } from './trip'

// 地図用のウェイポイント（マーカー）。order はマーカー番号。
export const mapPoints: MapPoint[] = [
  // Day 1
  { name: '熊本駅', coord: { lat: 32.7895, lng: 130.6884 }, day: 1, order: 1, kind: 'start' },
  { name: '草千里ヶ浜', coord: { lat: 32.8829, lng: 131.056 }, day: 1, order: 2 },
  { name: '大観峰', coord: { lat: 32.9709, lng: 131.1078 }, day: 1, order: 3 },
  { name: '高千穂峡', coord: { lat: 32.715, lng: 131.3034 }, day: 1, order: 4 },
  { name: '高千穂（泊）', coord: { lat: 32.7083, lng: 131.3081 }, day: 1, order: 5, kind: 'stay' },
  // Day 2
  { name: 'えびの高原', coord: { lat: 31.9446, lng: 130.853 }, day: 2, order: 6 },
  { name: '霧島神宮', coord: { lat: 31.8589, lng: 130.8722 }, day: 2, order: 7 },
  { name: '高千穂河原', coord: { lat: 31.891, lng: 130.8775 }, day: 2, order: 8 },
  { name: '湯之平展望所', coord: { lat: 31.5972, lng: 130.6378 }, day: 2, order: 9 },
  { name: '有村溶岩展望所', coord: { lat: 31.5567, lng: 130.6781 }, day: 2, order: 10 },
  { name: '桜島港', coord: { lat: 31.5797, lng: 130.6097 }, day: 2, order: 11 },
  { name: '鹿児島市・天文館（泊）', coord: { lat: 31.591, lng: 130.556 }, day: 2, order: 12, kind: 'stay' },
  // Day 3
  { name: '鹿児島本港（高速船）', coord: { lat: 31.587, lng: 130.5705 }, day: 3, order: 13 },
  { name: '屋久島 宮之浦港', coord: { lat: 31.3963, lng: 130.556 }, day: 3, order: 14 },
  { name: '白谷雲水峡', coord: { lat: 30.359, lng: 130.517 }, day: 3, order: 15, kind: 'stay' },
  // Day 4
  { name: '西部林道', coord: { lat: 30.353, lng: 130.417 }, day: 4, order: 16 },
  { name: '永田いなか浜', coord: { lat: 30.3833, lng: 130.417 }, day: 4, order: 17 },
  { name: '大川の滝', coord: { lat: 30.2436, lng: 130.4314 }, day: 4, order: 18 },
  { name: '中間ガジュマル', coord: { lat: 30.2356, lng: 130.466 }, day: 4, order: 19 },
  { name: '千尋の滝', coord: { lat: 30.2725, lng: 130.555 }, day: 4, order: 20 },
  { name: '屋久島空港', coord: { lat: 30.3856, lng: 130.6589 }, day: 4, order: 21, kind: 'goal' },
]

// ルート（線）。ferry/boat は破線で表現。
export const routeSegments: RouteSegment[] = [
  {
    day: 1,
    mode: 'drive',
    color: dayColors.d1,
    coords: [
      { lat: 32.7895, lng: 130.6884 },
      { lat: 32.8829, lng: 131.056 },
      { lat: 32.9709, lng: 131.1078 },
      { lat: 32.715, lng: 131.3034 },
      { lat: 32.7083, lng: 131.3081 },
    ],
  },
  {
    day: 2,
    mode: 'drive',
    color: dayColors.d2,
    coords: [
      { lat: 32.7083, lng: 131.3081 },
      { lat: 31.9446, lng: 130.853 },
      { lat: 31.8589, lng: 130.8722 },
      { lat: 31.891, lng: 130.8775 },
      { lat: 31.5972, lng: 130.6378 },
      { lat: 31.5567, lng: 130.6781 },
      { lat: 31.5797, lng: 130.6097 },
    ],
  },
  {
    day: 2,
    mode: 'ferry',
    color: dayColors.d2,
    coords: [
      { lat: 31.5797, lng: 130.6097 },
      { lat: 31.591, lng: 130.556 },
    ],
  },
  {
    day: 3,
    mode: 'boat',
    color: dayColors.d3,
    coords: [
      { lat: 31.587, lng: 130.5705 },
      { lat: 30.9, lng: 130.56 },
      { lat: 31.3963, lng: 130.556 },
    ],
  },
  {
    day: 3,
    mode: 'drive',
    color: dayColors.d3,
    coords: [
      { lat: 31.3963, lng: 130.556 },
      { lat: 30.359, lng: 130.517 },
    ],
  },
  {
    day: 4,
    mode: 'drive',
    color: dayColors.d4,
    coords: [
      { lat: 31.3963, lng: 130.556 },
      { lat: 30.353, lng: 130.417 },
      { lat: 30.3833, lng: 130.417 },
      { lat: 30.2436, lng: 130.4314 },
      { lat: 30.2356, lng: 130.466 },
      { lat: 30.2725, lng: 130.555 },
      { lat: 30.3856, lng: 130.6589 },
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
