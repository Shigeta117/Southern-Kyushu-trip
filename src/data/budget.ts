import type { BudgetRow, OriginPlan } from './types'

// 1人あたり概算（4名グループ・割り勘前提、2026年夏想定の「目安」）
export const commonBudgetRows: BudgetRow[] = [
  { item: '高速船（往路片道）', amount: '約14,000円', note: '往復なら25,900円', confidence: 'high' },
  { item: 'レンタカー2台（4名割り）', amount: '7,500〜12,500円', note: '乗り捨て料金込み', confidence: 'medium' },
  { item: '桜島フェリー（車載・割り勘）', amount: '約500円', note: '誤差範囲', confidence: 'high' },
  { item: '宿泊3泊', amount: '21,000〜45,000円', note: '高千穂/鹿児島/屋久島', confidence: 'medium' },
  { item: '食事（4日）', amount: '16,000〜32,000円', note: '1日4,000〜8,000円', confidence: 'medium' },
  { item: '観光・協力金', amount: '6,000〜14,000円', note: 'ボート/神楽/白谷500円 等', confidence: 'medium' },
  { item: 'ガソリン・高速・予備', amount: '2,000〜4,000円', note: '4名割り', confidence: 'medium' },
]

export const originPlans: OriginPlan[] = [
  {
    id: 'tokyo',
    label: '東京 / 羽田',
    transport: {
      item: '往復航空券（乗継）',
      amount: '30,000〜55,000円',
      note: '羽田→熊本 ＋ 屋久島→鹿児島→羽田',
      confidence: 'medium',
    },
    total: '約 130,000〜215,000円',
  },
  {
    id: 'osaka',
    label: '大阪 / 伊丹',
    transport: {
      item: '往復航空券（オープンジョー）',
      amount: '24,000〜45,000円',
      note: '伊丹→熊本 ／ 屋久島→伊丹 直行',
      confidence: 'medium',
    },
    total: '約 110,000〜175,000円',
  },
  {
    id: 'kyoto',
    label: '京都 / 新幹線',
    transport: {
      item: '新幹線＋空路',
      amount: '30,000〜46,000円',
      note: '京都→熊本 新幹線 ／ 屋久島→大阪 空路',
      confidence: 'medium',
    },
    total: '約 105,000〜170,000円',
  },
]

export const budgetNote =
  'すべて「目安」です（4名で割り勘・2026年夏想定）。料金は変動するため、必ず各公式で最新を確認してください。お盆ピーク（8/10〜18頃）は航空券・宿が +20〜60% 上振れします。早割・早期予約で大きく圧縮できます。'
