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
      { label: '🚗 1台目 受取', value: '8/23(日) 11:00　熊本空港店（益城町大字小谷1802-2 / 096-287-1355）' },
      { label: '🚗 1台目 返却', value: '8/24(月) 18:00　鹿児島中央駅前店（中央町4-43 BLD skyビル 1/2階 / 099-250-2123）' },
      { label: '車両', value: 'ノート e-POWER（クラスアップ可）・乗車3名。契約者はせきけん' },
      { label: '🚙 2台目（屋久島）', value: '8/25(火) 10:00 宮之浦港 → 8/26(水) 17:30 屋久島空港で返却' },
      { label: '屋久島の港⇄空港', value: '+550円（「乗り捨て無料」ではない）' },
    ],
    notes: [
      '⚠️ 1台目の返却 18:00 は契約上のデッドライン。桜島を16:00に出て、フェリー15分＋市内10分で17:30着の計算。フェリーを1本落とすと余裕が消える。',
      '朝返却への逃げ道はない。翌朝 7:40 が高速船の手続き締切で、営業所の開店 8:00 では間に合わないため。',
      '追加運転者の登録は現地で行う。3人分の免許確認と車両説明で15〜30分見ておくこと（走り出しは 11:15〜11:30）。',
      '⚠️ 屋久島の営業所は 18:00 前後に閉まる。19:00 の便に乗るので「18時前後の返却」の確約を取ること（未了）。',
      'ノート e-POWER に3名＋屋久島4日分の荷物が積めるかは当日勝負。入らなければカウンターでクラスアップを相談する（予約上「可」になっている）。',
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
      { label: '✅ 予約', value: '3名分・決済済み（2026/7/30）。運賃 ¥42,000（片道14,000円×3）' },
      { label: '⚠️ 当日の持ち物', value: '「予約番号案内メール」と「決済確認メール」の2通を窓口で提示。出せないと乗れない場合あり' },
      { label: '乗船手続き', value: '出港20分前＝7:40 締切。手荷物15kgまで無料' },
    ],
    notes: [
      '前夜にメール2通をスクショしてオフラインで開けるようにしておく。7:40 締切の朝に探すのは危ない。',
      '運航の最終決定は出港1時間前。判断材料は降水確率ではなく波高で、見るのは「種子島・屋久島地方」の波浪予報。',
      '怪しければ前夜のうちに翌朝の鹿児島空港→屋久島空港 JAC便を押さえる。欠航しやすさは フェリー ＞ 高速船 ＞ 飛行機。',
      'キャンセル料は 6〜2日前 10%／前日〜出港60分前 30%／60分前以降 100%。ただし悪天候による欠航・条件付運航なら無料。',
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
    title: '帰路（8/26）— JAL で3人まとめて東京へ',
    lead: 'JAL の乗継運賃「セイバー乗継」。航空券1枚に2区間が乗っている。',
    rows: [
      { label: 'JAL3756', value: '屋久島 19:00 → 鹿児島 19:35（日本エアコミューター運航・普通席）' },
      { label: 'JAL654', value: '鹿児島 20:35 → 羽田 22:25（普通席）' },
      { label: '乗継時間', value: '鹿児島で1時間' },
      { label: '運賃', value: 'セイバー乗継 33,670円/人（3名 101,010円）。2026/7/29 発券済み' },
    ],
    notes: [
      '⚠️ 屋久島19:00発が当日の最終便。これを逃すと当日中に東京へ帰れない。',
      '❌ セイバーは予約変更ができない。搭乗日当日に空席があっても便の変更は不可。',
      '⚠️ 乗継運賃なので、払い戻しは全区間同時のみ。一部区間だけの払い戻しはできない。',
      '✅ ただし取り消しは「出発前」なら 税抜運賃額の約5% で済む（出発後は100%）。締切は予約便の出発時刻20分前＝8/26 18:40。',
      '⇒ もし 8/25 に島へ渡れなかったら、no show にせず 8/26 18:40 までに必ず全区間を取り消すこと。放置すると「出発後」扱いで100%になる。3名で5,000円前後の損で済むか、101,010円を失うかの分かれ目。',
      '✅ 飛行機自体が天候欠航した場合は会社都合なので、無手数料の振替・払い戻しができる。',
    ],
    links: [
      { label: 'JAL セイバーご利用案内', url: 'https://www.jal.co.jp/jp/ja/dom/fare/rule/saver/' },
      { label: 'JAL 乗継運賃ご利用案内', url: 'https://www.jal.co.jp/jp/ja/dom/fare/rule/transit/' },
      { label: 'JAL 取消手数料 検索', url: 'https://www.jal.co.jp/jp/ja/dom/change/charge/search/' },
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
    icon: 'waves',
    title: '高千穂峡（8/23）― ボートはなし',
    lead: '貸しボートは 8/9 の予約開始に張ったが確保できず。遊歩道から回る。',
    rows: [
      { label: '結果', value: '8/9(日) 9:00 の予約開始で取れず。ネット限定・電話もキャンセル待ちも不可だったため打ち手なし' },
      { label: '副作用', value: '乗船待ちの行列と乗船30分が消える＝D1 のタイムテーブルに余裕が出た' },
      { label: '真名井の滝', value: '遊歩道側からでも見える。滝見台からの眺めが定番' },
    ],
    notes: [
      'ボートが無くなったことで、この日の「時間的な関所」は宮崎Airbnbのチェックイン締切 21:00 だけになった。',
    ],
    links: [{ label: '高千穂峡（観光協会）', url: 'https://takachiho-kanko.info/boat/detail.php' }],
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
    area: '関東メンバー（せきけん・1名）',
    go: '羽田 ➡ 熊本空港 9:00 頃 着',
    back: '屋久島 19:00 ➡ 鹿児島 ➡ 羽田 22:15',
    hint: 'Nori たちの 10:30 着より1時間半早い。待つのは本人了承済み。11:00 にレンタカー店で合流する。',
  },
]
