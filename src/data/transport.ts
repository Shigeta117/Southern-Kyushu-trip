import type { LinkItem } from './types'

export interface TransportCard {
  id: string
  icon: string
  title: string
  lead?: string
  rows: { label: string; value: string }[]
  notes?: string[]
  links?: LinkItem[]
}

export const transportCards: TransportCard[] = [
  {
    id: 'rentacar',
    icon: 'car-front',
    title: 'レンタカー戦略（重要）',
    lead: '海を渡るため、レンタカーは「2回」に分けて借ります。',
    rows: [
      { label: '🚗 1台目（九州本土）', value: '1日目午前 熊本空港/駅 → 2日目夕方 鹿児島市内で返却' },
      { label: '🚙 2台目（屋久島）', value: '3日目午前 屋久島の港 → 4日目午後 屋久島空港で返却' },
      { label: '乗り捨て料金の目安', value: '熊本→鹿児島は 約13,000〜22,000円（鹿児島空港返却が最安傾向）' },
    ],
    notes: [
      '県外ワンウェイ（乗り捨て）は有料。会社・車種・営業所で可否と料金が変わるため事前確認を。',
      '夏の繁忙期（特にお盆）は在庫が逼迫。早期予約必須。',
    ],
    links: [
      { label: 'トヨタ ワンウェイ料金シミュレーション', url: 'https://rent.toyota.co.jp/service/service_option/oneway/simulation.aspx' },
      { label: 'オリックス南九州 ワンウェイ料金', url: 'https://mrl.iwasaki-group.com/oneway.html' },
      { label: 'まつばんだレンタカー（屋久島）', url: 'https://yakushima.co.jp/car_rental/' },
    ],
  },
  {
    id: 'kosokusen',
    icon: 'ship',
    title: '高速船 トッピー＆ロケット（鹿児島⇔屋久島）',
    rows: [
      { label: '所要', value: '直行 約1時間50分（寄港便は約2.5〜2.8h）' },
      { label: '運賃', value: '片道 約14,000円／往復割引 25,900円（7日間有効）' },
      { label: '本数', value: '夏ダイヤ 1日5便程度' },
      { label: '予約', value: '乗船2ヶ月前〜前日。夏は早めに' },
    ],
    notes: ['台風時は欠航リスクあり。運航最終決定は出港1時間前が目安。毎朝、運航状況を確認。'],
    links: [
      { label: '運賃・時刻表', url: 'https://www.tykousoku.jp/fare_time/' },
      { label: '乗船予約', url: 'https://www.tykousoku.jp/reserve/' },
      { label: '運航状況', url: 'https://www.tykousoku.jp/etc/operation.php' },
    ],
  },
  {
    id: 'sakurajima-ferry',
    icon: 'ship',
    title: '桜島フェリー（桜島⇔鹿児島市）',
    rows: [
      { label: '所要', value: '約15分（約3.5km）' },
      { label: '旅客', value: '大人250円 / 小児130円' },
      { label: '車両航送', value: '4m未満1,700円 / 5m未満2,350円（運転手1名込）' },
      { label: '運航', value: '4:00〜23:30・予約不要（2025年10月に24時間運航は廃止）' },
    ],
    notes: ['支払いは現金・クレジット・交通系IC・電子マネー対応。'],
    links: [
      { label: '運賃（鹿児島市）', url: 'https://www.city.kagoshima.lg.jp/sakurajima-ferry/unchin/unchin.html' },
      { label: '運航状況', url: 'https://www.city.kagoshima.lg.jp/sakurajima-ferry/unko_jokyo/unkojyokyo.html' },
    ],
  },
  {
    id: 'takachiho-boat',
    icon: 'ticket',
    title: '高千穂峡 貸しボート（要予約）',
    rows: [
      { label: '料金', value: '1艇30分 平日4,100円／繁忙期5,100円（定員3名）' },
      { label: '予約', value: 'ネット予約制（2週間前9:00〜2日前9:00）・電話不可' },
    ],
    notes: ['8月は完全予約制で当日券なしの日も。増水・点検（1/4/7/10月）・地震時は運休。'],
    links: [
      { label: '貸しボート予約サイト', url: 'https://eipro.jp/takachiho1/' },
      { label: '高千穂峡（観光協会）', url: 'https://takachiho-kanko.info/boat/detail.php' },
    ],
  },
]

export interface AccessPlan {
  area: string
  go: string
  back: string
  hint?: string
}

export const accessPlans: AccessPlan[] = [
  {
    area: '東京メンバー',
    go: '羽田 ➡ 熊本空港（早朝便）',
    back: '屋久島空港 ➡ 鹿児島空港（乗継）➡ 羽田',
  },
  {
    area: '大阪メンバー',
    go: '伊丹 ➡ 熊本空港 または 新幹線で熊本駅',
    back: '屋久島空港 ➡ 伊丹空港（直行便あり！）',
    hint: '屋久島→伊丹の直行便が使えるので乗継リスクが低い。',
  },
  {
    area: '京都メンバー',
    go: '京都駅 ➡ 熊本駅（新幹線 さくら/みずほ）',
    back: '屋久島 ➡ 伊丹（直行）➡ リムジンバス/新快速で京都',
  },
]
