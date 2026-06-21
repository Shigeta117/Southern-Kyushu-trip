import { useEffect, useRef, useState } from 'react'
import L from 'leaflet'
import { mapPoints, routeSegments } from '../data/mapData'
import { dayColors } from '../data/trip'
import { directionsUrl } from '../lib/maps'
import { SectionHeading } from './SectionHeading'

type Filter = 0 | 1 | 2 | 3 | 4 // 0 = 全行程

const filters: { id: Filter; label: string; color: string }[] = [
  { id: 0, label: '全行程', color: '#0f172a' },
  { id: 1, label: 'D1', color: dayColors.d1 },
  { id: 2, label: 'D2', color: dayColors.d2 },
  { id: 3, label: 'D3', color: dayColors.d3 },
  { id: 4, label: 'D4', color: dayColors.d4 },
]

function markerIcon(color: string, order: number): L.DivIcon {
  return L.divIcon({
    className: 'trip-marker',
    html: `<div style="background:${color};width:26px;height:26px;border-radius:50%;border:3px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;color:#fff;font-size:12px;font-weight:700;font-family:sans-serif;">${order}</div>`,
    iconSize: [26, 26],
    iconAnchor: [13, 13],
    popupAnchor: [0, -13],
  })
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] ?? c,
  )
}

export function TripMap() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const mapRef = useRef<L.Map | null>(null)
  const layerRef = useRef<L.LayerGroup | null>(null)
  const [filter, setFilter] = useState<Filter>(0)

  // 地図の初期化（一度だけ）
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return
    const map = L.map(containerRef.current, {
      scrollWheelZoom: false,
      attributionControl: true,
    }).setView([31.4, 130.8], 7)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19,
    }).addTo(map)
    mapRef.current = map
    return () => {
      map.remove()
      mapRef.current = null
      layerRef.current = null
    }
  }, [])

  // フィルタに応じてマーカー・ルートを再描画
  useEffect(() => {
    const map = mapRef.current
    if (!map) return

    layerRef.current?.remove()
    const group = L.layerGroup().addTo(map)
    layerRef.current = group

    const points = filter === 0 ? mapPoints : mapPoints.filter((p) => p.day === filter)
    const segments = filter === 0 ? routeSegments : routeSegments.filter((s) => s.day === filter)

    segments.forEach((seg) => {
      L.polyline(
        seg.coords.map((c) => [c.lat, c.lng] as [number, number]),
        {
          color: seg.color,
          weight: 4,
          opacity: 0.75,
          dashArray: seg.mode === 'drive' ? undefined : '6, 10',
        },
      ).addTo(group)
    })

    points.forEach((p) => {
      const popup = `<div style="font-weight:700;margin-bottom:4px;">${escapeHtml(p.name)}</div>
        <div style="font-size:12px;color:#64748b;margin-bottom:6px;">Day ${p.day}</div>
        <a href="${directionsUrl(p.coord)}" target="_blank" rel="noopener noreferrer" style="color:#16a34a;font-weight:700;font-size:13px;">経路案内を開く →</a>`
      L.marker([p.coord.lat, p.coord.lng], { icon: markerIcon(dayToColor(p.day), p.order) })
        .bindPopup(popup)
        .addTo(group)
    })

    if (points.length > 0) {
      const bounds = L.latLngBounds(points.map((p) => [p.coord.lat, p.coord.lng] as [number, number]))
      map.fitBounds(bounds, { padding: [40, 40], maxZoom: filter === 0 ? 8 : 12 })
    }
  }, [filter])

  return (
    <section id="map" className="section-anchor">
      <SectionHeading icon="map-pinned" title="ルートマップ" sub="日別フィルタ・ピンから経路案内へ" />

      <div className="flex flex-wrap gap-2 mb-3">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFilter(f.id)}
            className={`px-3.5 py-1.5 rounded-full text-sm font-bold border transition-colors ${
              filter === f.id
                ? 'text-white border-transparent'
                : 'text-slate-600 bg-white border-slate-200 active:bg-slate-50'
            }`}
            style={filter === f.id ? { backgroundColor: f.color } : undefined}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="bg-white p-2 rounded-2xl shadow-sm border border-slate-200">
        <div ref={containerRef} className="h-[55vh] min-h-[320px] max-h-[480px] w-full rounded-xl overflow-hidden" />
      </div>
      <p className="text-xs text-slate-400 mt-2">
        ピンをタップ → 「経路案内」でGoogleマップが開きます。一度表示した地図はオフラインでも再表示できます。
      </p>
    </section>
  )
}

// 日番号からテーマ色を引く
function dayToColor(day: number): string {
  switch (day) {
    case 1:
      return dayColors.d1
    case 2:
      return dayColors.d2
    case 3:
      return dayColors.d3
    default:
      return dayColors.d4
  }
}
