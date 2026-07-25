// アプリ全体で使う型定義（外部データではなく静的データだが、型で一貫性を担保）
import type { IconName } from '../components/Icon'

export type Confidence = 'high' | 'medium' | 'low'

export type BadgeKind = 'food' | 'reserve' | 'warn' | 'info' | 'tip'

export interface Coord {
  lat: number
  lng: number
}

export interface Badge {
  kind: BadgeKind
  text: string
}

/** 各スポット内の個別地点（Googleマップのピン/ナビ用） */
export interface Place {
  name: string
  coord?: Coord
  query?: string
  note?: string
}

export interface Spot {
  id: string
  time?: string
  title: string
  /** Icon コンポーネントのキー（src/components/Icon.tsx の iconMap 参照） */
  icon: IconName
  lead?: string
  places?: Place[]
  badges?: Badge[]
  tip?: string
}

export type DayId = 'd1' | 'd2' | 'd3' | 'd4'

export interface Day {
  id: DayId
  label: string
  title: string
  subtitle: string
  /** テーマ色（マーカー・アクセント） */
  color: string
  spots: Spot[]
}

export type RouteMode = 'drive' | 'ferry' | 'boat'

export interface MapPoint {
  name: string
  coord: Coord
  day: number
  /** 表示順（マーカー番号） */
  order: number
  kind?: 'start' | 'goal' | 'stay' | 'spot'
}

export interface RouteSegment {
  day: number
  mode: RouteMode
  color: string
  coords: Coord[]
}

export interface BudgetRow {
  item: string
  amount: string
  note?: string
  confidence?: Confidence
}

export interface OriginPlan {
  id: string
  label: string
  transport: BudgetRow
  total: string
}

/** 予約・準備タスクの切迫度（見出しの色分けに使う） */
export type TodoUrgency = 'now' | 'confirm' | 'dated' | 'before'

export interface TodoItem {
  /** localStorage 保存キー（並び替え・文言修正に強い安定ID） */
  id: string
  label: string
  detail?: string
  /** 担当が決まっているものだけ */
  owner?: string
  link?: LinkItem
}

export interface TodoGroup {
  id: string
  title: string
  icon: IconName
  urgency: TodoUrgency
  lead?: string
  items: TodoItem[]
}

export interface PackingItem {
  /** localStorage 保存キー（並び替え・追加に強い安定ID） */
  id: string
  label: string
}

export interface PackingGroup {
  id: string
  title: string
  icon: IconName
  items: PackingItem[]
}

export interface LinkItem {
  label: string
  url: string
}

export interface Hazard {
  icon: IconName
  title: string
  body: string
}

export interface Hospital {
  area: string
  name: string
  note: string
}
