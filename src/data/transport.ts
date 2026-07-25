import type { LinkItem } from './types'
import type { IconName } from '../components/Icon'

export interface TransportCard {
  id: string
  icon: IconName
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
      { label: '🚗 1台目（九州本土）', value: '8/23(日) 11:00 熊本空港 → 8/24(月) 夕方 鹿児島市内で返却' },
      { label: '🚙 2台目（屋久島）', value: '8/25(火) 10:00 宮之浦港 → 8/26(水) 17:30 屋久島空港で返却' },
      { label: '乗り捨て料金（熊本→鹿児島）', value: 'オリックス南九州 鹿児島市内 17,600円／鹿児島空港 13,200円' },
      { label: '屋久島の港⇄空港', value: '+550円（「乗り捨て無料」ではない）' },
    ],
    notes: [
      '⚠️ 1台目は必ず 8/24 の夜に返す。翌朝 7:40 が高速船の手続き締切で、営業所の開店 8:00 では間に合わない。',
      '返却は鹿児島中央駅前か天文館周辺の営業所を選ぶ。空港返却は乗り捨て料が4,400円安いが、空港→市内バス（1,400円×3名）でほぼ相殺され、40分損する。',
      '⚠️ 屋久島の営業所は 18:00 前後に閉まる。19:00 の便に乗るので、予約時に「18時前後の返却」を確約しておくこと。',
      '3名なので車格はコンパクト〜ミドルで足りるが、スーツケース3個が積めるか確認を。',
    ],
    links: [
      { label: 'オリックス南九州 ワンウェイ料金', url: 'https://mrl.iwasaki-group.com/oneway.html' },
      { label: 'トヨタ ワンウェイ料金シミュレーション', url: 'https://rent.toyota.co.jp/service/service_option/oneway/simulation.aspx' },
      { label: 'まつばんだレンタカー（屋久島）', url: 'https://yakushima.co.jp/car_rental/' },
    ],
  },
  {
    id: 'kosokusen',
    icon: 'ship',
    title: '高速船 トッピー＆ロケット（8/25 鹿児島→屋久島）',
    lead: '112便（直行）を取る。111便は種子島経由で遅い。',
    rows: [
      { label: '✅ 112便（直行）', value: '鹿児島本港 南ふ頭 8:00 → 宮之浦港 9:50（1時間50分）' },
      { label: '❌ 111便（種子島経由）', value: '7:30 → 10:20 着。後発の112便より遅く着く' },
      { label: '運賃', value: '片道 14,000円（往復割引25,900円は復路券が必要なため今回は対象外）' },
      { label: '予約', value: '乗船2ヶ月前の同日9:00〜。8/25便は6/25に開放済み＝今すぐ取れる' },
      { label: '乗船手続き', value: '出港20分前＝7:40 締切。手荷物15kgまで無料' },
    ],
    notes: [
      '台風時は欠航（波高3m超が目安）。運航最終決定は出港1時間前が目安。',
      '前夜の時点で運航が怪しければ、その晩のうちに翌朝の鹿児島空港→屋久島空港 JAC便を押さえる。欠航しやすさは フェリー ＞ 高速船 ＞ 飛行機。',
    ],
    links: [
      { label: '運賃・時刻表', url: 'https://www.tykousoku.jp/fare_time/' },
      { label: '乗船予約', url: 'https://www.tykousoku.jp/reserve/' },
      { label: '運航状況', url: 'https://www.tykousoku.jp/etc/operation.php' },
    ],
  },
  {
    id: 'return-flight',
    icon: 'plane-takeoff',
    title: '帰路（8/26）— 3人まとめて東京へ',
    lead: '券はANAの通し予約。ただし運航は2レグとも別会社。',
    rows: [
      { label: 'NH4338', value: '屋久島 19:00 → 鹿児島 19:35（日本エアコミューター運航）' },
      { label: 'NH2480', value: '鹿児島 20:30 → 羽田 22:15（ソラシドエア運航）' },
      { label: '乗継時間', value: '鹿児島で55分' },
    ],
    notes: [
      '⚠️ 屋久島19:00発が当日の最終便。これを逃すと当日中に東京へ帰れない。',
      '✅ 飛行機が天候欠航した場合は「ANAに起因する」扱いで、無手数料の振替・払戻ができる。乗り継ぎ便も同時に処理可能。',
      '❌ 船だけ欠航して飛行機が平常運航の場合は旅客都合。ANAは一部区間だけの変更・払戻を受け付けず、第1区間を乗り遅れると運賃額（税抜）の100%が取消手数料になる（消費税とPFCのみ返金）＝実質ゼロ。',
      '⇒ つまり「屋久島に渡れない」＝帰りの券がほぼ丸損。8/25は何としても島へ渡る。高速船が欠航しそうなら鹿児島空港→屋久島空港のJAC便（8:35 / 10:30 / 13:25 / 15:10 / 17:45）へ即座に切り替える。',
    ],
    links: [
      { label: 'ANA 変更・払い戻しのルール', url: 'https://www.ana.co.jp/ja/jp/guide/plan/fare/domestic/charge-list/changes-refunds-rule/' },
      { label: 'ANA 遅延・欠航時の振替／払戻', url: 'https://ana-support.my.site.com/jajp/s/article/answers2496ja' },
      { label: '鹿児島空港 屋久島行 時刻表', url: 'https://www.koj-ab.co.jp/flight/monthly/kum_d.html' },
    ],
  },
  {
    id: 'sakurajima-ferry',
    icon: 'ship',
    title: '桜島フェリー（8/24 桜島⇔鹿児島市）',
    rows: [
      { label: '所要', value: '約15分（約3.5km）' },
      { label: '旅客', value: '大人250円 / 小児130円' },
      { label: '車両航送', value: '4m未満1,700円 / 5m未満2,350円（運転手1名分の旅客運賃込）' },
      { label: '運航', value: '4:00〜23:30・予約不要' },
    ],
    notes: [
      '2025年10月1日から深夜0〜3時台の8便を廃止。24時間運航ではなくなっている。',
      '支払いは現金・クレジット・交通系IC・電子マネー対応。',
    ],
    links: [
      { label: '運賃（鹿児島市）', url: 'https://www.city.kagoshima.lg.jp/senpaku/speigyou/unchinkaisuukenteikiken.html' },
      { label: '運航状況', url: 'https://www.city.kagoshima.lg.jp/sakurajima-ferry/unko_jokyo/unkojyokyo.html' },
    ],
  },
  {
    id: 'takachiho-boat',
    icon: 'ticket',
    title: '高千穂峡 貸しボート（8/23・要予約）',
    lead: '3名ちょうど1艇。この旅で唯一「予約開始日が先」のアイテム。',
    rows: [
      { label: '料金', value: '8/23は日曜＝繁忙期 1艇30分 5,100円（平日4,100円）' },
      { label: '定員', value: '3名（未就学児を含む場合のみ最大4名）' },
      { label: '📅 予約開始', value: '8/9(日) 9:00 ちょうど' },
      { label: '予約締切', value: '8/21(金) 9:00' },
      { label: '営業', value: '8:30〜17:00・最終受付 16:30（混雑時は繰上げ）' },
    ],
    notes: [
      'ネット予約制。電話予約もキャンセル待ちも不可。',
      '増水・点検・地震時は運休。当日朝に運航状況を確認。',
    ],
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
    area: '大阪・京都メンバー（2名）',
    go: '伊丹 9:20 ➡ 熊本 10:30（ANA・確保済み）',
    back: '屋久島 19:00 ➡ 鹿児島 ➡ 羽田 22:15',
    hint: '帰りは3人まとめて東京へ。関西には戻らない。',
  },
  {
    area: '関東メンバー（1名）',
    go: '羽田 ➡ 熊本空港（到着時刻 未確定）',
    back: '屋久島 19:00 ➡ 鹿児島 ➡ 羽田 22:15',
    hint: '到着が11:30を過ぎるとD1の予定を削る必要が出る。時刻が決まり次第このしおりを更新すること。',
  },
]
