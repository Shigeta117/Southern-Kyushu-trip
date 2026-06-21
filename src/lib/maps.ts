import type { Coord } from '../data/types'

/** Googleマップで地点を開く URL（座標優先、なければ名称検索） */
export function mapsUrl(coord?: Coord, query?: string): string {
  if (coord) {
    return `https://www.google.com/maps/search/?api=1&query=${coord.lat},${coord.lng}`
  }
  if (query && query.trim()) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
  }
  return 'https://www.google.com/maps'
}

/** Googleマップの経路案内（現在地→目的地） */
export function directionsUrl(coord?: Coord, query?: string): string {
  if (coord) {
    return `https://www.google.com/maps/dir/?api=1&destination=${coord.lat},${coord.lng}`
  }
  if (query && query.trim()) {
    return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`
  }
  return 'https://www.google.com/maps'
}
