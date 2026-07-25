import type { BudgetRow, OriginPlan } from './types'

// 1人あたり概算（3名グループ・割り勘前提、2026/8/23〜26 の「目安」）
export const commonBudgetRows: BudgetRow[] = [
  { item: '高速船（片道・鹿児島→屋久島）', amount: '14,000円', note: '往復割引は復路券が要るので対象外', confidence: 'high' },
  { item: 'レンタカー①＋乗り捨て（3名割）', amount: '約10,500円', note: 'ワンウェイ17,600円を含む', confidence: 'medium' },
  { item: 'レンタカー②屋久島（3名割）', amount: '約4,500円', note: '港⇄空港 +550円込み', confidence: 'medium' },
  { item: '高速代・ガソリン（3名割）', amount: '約4,000円', note: '延岡〜宮崎2,900円／宮崎〜えびの2,400円ほか', confidence: 'medium' },
  { item: '桜島フェリー（車載・3名割）', amount: '約950円', note: '車両2,350円＋旅客250円×2', confidence: 'high' },
  { item: '宿泊3泊', amount: '約12,000円', note: '宮崎/鹿児島はAirbnb、屋久島は民宿素泊まり', confidence: 'medium' },
  { item: '食事4日', amount: '約18,000円', note: '1日4,000〜6,000円', confidence: 'medium' },
  { item: '観光・協力金', amount: '約3,800円', note: 'ボート1,700／白谷800／尾之間温泉300／駐車場ほか', confidence: 'medium' },
]

export const originPlans: OriginPlan[] = [
  {
    id: 'osaka-kyoto',
    label: '大阪・京都（2名）',
    transport: {
      item: '航空券（オープンジョー）',
      amount: '30,000〜50,000円',
      note: '伊丹→熊本（確保済み） ／ 屋久島→鹿児島→羽田',
      confidence: 'medium',
    },
    total: '約 98,000〜118,000円',
  },
  {
    id: 'kanto',
    label: '関東（1名）',
    transport: {
      item: '往復航空券（乗継）',
      amount: '35,000〜55,000円',
      note: '羽田→熊本 ／ 屋久島→鹿児島→羽田',
      confidence: 'medium',
    },
    total: '約 103,000〜123,000円',
  },
]

export const budgetNote =
  'すべて「目安」です（3名で割り勘）。現地費用だけなら1人あたり約68,000円。4名想定より車関係が1人あたり2〜3割上がっています。8/23〜26 はお盆ピーク（8/10〜18頃）を外しているため、航空券・宿の大幅な上振れは回避できています。帰着は3人とも羽田22:15で、大阪・京都メンバーの関西への帰路は別途必要です。'
