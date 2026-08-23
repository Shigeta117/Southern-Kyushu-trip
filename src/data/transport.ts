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

/* 2026-08-24 更新: 屋久島行きの中止に伴い全面差し替え。
   高速船・屋久島レンタカー・JAL 乗継券は「取り消し／払戻の手順」として残してある。 */
export const transportCards: TransportCard[] = [
  {
    id: 'rentacar',
    icon: 'car-front',
    title: '🔴 レンタカー ― 8/24 朝に延長交渉（最重要）',
    lead: 'この結論で 8/25 の桜島の足も、8/26 の熊本への移動も、8/25 の宿の場所も決まる。',
    rows: [
      { label: '店', value: '日産レンタカー 鹿児島中央駅前店 099-250-2123（8:00〜20:00）' },
      { label: '現契約', value: '8/23 11:00 熊本空港店 受取 → 8/24 18:00 鹿児島中央駅前店 返却（乗り捨て）' },
      { label: '車両', value: 'ノート e-POWER・3名。契約者はせきけん（変更手続きも本人から）' },
      { label: '登録額', value: '37,840円（NOREC 登録値・乗り捨て料金込み）' },
      { label: '希望', value: '8/26 17:30 阿蘇くまもと空港 返却へ変更＋2日延長' },
      { label: '判断ライン', value: '追加1万円以内（高速代・ガソリン込みで1.5万円以内）なら変更する' },
    ],
    notes: [
      '⭕️ 聞く順番が大事。まず「県外乗り捨て料金がいくら乗っているか」。熊本空港へ戻せばそれが消えるので、延長代と相殺できる。いきなり「延長したらいくら」と聞くと高い見積もりが返ってくる。',
      '⭕️ 変更できた場合 ― 8/26 まで車が使える。桜島も熊本移動も自走で、荷物を積みっぱなしにできる。九州道 鹿児島IC→益城熊本空港IC は 4,240円、ガソリン約1,600円。',
      '❌ 断られた場合 ― 8/24 18:00 に鹿児島中央で返却。以降は下の「車がない場合の足」を使う。',
      '屋久島のレンタカー②（まつばんだ）はキャンセル済み。キャンセル料 6,500円で決着している。',
    ],
    links: [{ label: '日産レンタカー 鹿児島中央駅ステーション', url: 'https://nissan-rentacar.com/shops/3P6A7' }],
  },
  {
    id: 'no-car',
    icon: 'route',
    title: '車がない場合の足（8/25・8/26）',
    lead: 'レンタカーを延長できなかったときの代替。',
    rows: [
      { label: '桜島（8/25）', value: '鹿児島港から旅客フェリー 大人250円・約15分 ＋ 周遊バス「サクラジマアイランドビュー」' },
      { label: '鹿児島 → 熊本 ①', value: '九州新幹線 自由席 6,540円/人・約45分〜1時間' },
      { label: '鹿児島 → 熊本 ②', value: '高速バス「きりしま号」約3時間30分・WEB早割7 で 3,600円〜' },
      { label: '熊本駅前 → 空港', value: '空港リムジンバス 約55分（桜町BTから1,200円。2026/8/1 運賃改定あり・要確認）' },
    ],
    notes: [
      '3名で見ると 新幹線＋リムジンで約23,000円、きりしま号＋リムジンで約14,400円。所要は新幹線ルートで約2時間、バスルートで約4時間半。',
      '8/26 は 19:20 発のジェットスターに対して 17:30 には空港へ入りたい。バスルートを使うなら午前中に鹿児島を出る必要がある。',
      '荷物を持っての移動になるので、8/25 の宿は駅に近いところを選ぶと楽。',
    ],
    links: [
      { label: 'きりしま号（南国交通）', url: 'https://nangoku-kotsu.com/hway/kumamoto/' },
      { label: '産交バス 空港リムジン', url: 'https://www.sankobus.jp/bus/ap-limousine/' },
      { label: 'サクラジマアイランドビュー', url: 'https://www.kagoshima-yokanavi.jp/sightseeingbus' },
    ],
  },
  {
    id: 'sakurajima-ferry',
    icon: 'ship',
    title: '桜島フェリー（8/25 鹿児島⇔桜島）',
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
    id: 'return-flight',
    icon: 'plane-takeoff',
    title: '✅ 帰路（8/26）― ジェットスターで成田へ',
    lead: '8/23 夜に予約済み。羽田ではなく成田。',
    rows: [
      { label: '便', value: '熊本 19:20 → 成田 21:00' },
      { label: '運賃', value: '3名 71,820円（諸費用込み・23,940円/人）' },
      { label: '空港入り', value: '17:30 目標。LCC は搭乗手続きの締切が大手より早い' },
      { label: '翌日', value: '8/27 に千葉の実家で用事。成田のほうが羽田より近い' },
    ],
    notes: [
      '⚠️ 受託手荷物は事前購入が要る。当日空港で足すと割高になるので、予約内容に3人分含まれているかを出発前に確認すること。',
      '成田21:00 着なら京成・JR とも都内方面の最終には間に合う。',
      '価格比較の実測（8/23 夜・1人片道最安）― 8/25 鹿児島→羽田 41,150円 ／ 8/25 熊本→羽田 33,000円 ／ 8/26 熊本→成田 16,990円。出発空港と日付を変えるだけで3名6万円動いた。',
    ],
    links: [{ label: '阿蘇くまもと空港', url: 'https://www.kumamoto-airport.co.jp/' }],
  },
  {
    id: 'cancel-jal',
    icon: 'warn',
    title: '🔴 取り消しが要るもの ― JAL 乗継券（8/26）',
    lead: '屋久島発の券なので、行かない以上は乗れない。放置が一番損をする。',
    rows: [
      { label: 'JAL3756', value: '屋久島 19:00 → 鹿児島 19:35' },
      { label: 'JAL654', value: '鹿児島 20:35 → 羽田 22:25' },
      { label: '運賃', value: 'セイバー乗継 33,670円/人（3名 101,010円）・2026/7/29 発券済み' },
      { label: '取り消し期限', value: '第1区間の出発前＝8/26 19:00 まで' },
      { label: '手数料', value: '税抜運賃額の約5%（3名で5,000円前後）' },
    ],
    notes: [
      '❌ セイバーは予約変更ができない。別の日に振り替えるのではなく「取り消して買い直す」しかない。',
      '⚠️ 乗継運賃なので、払い戻しは全区間同時のみ。一部区間だけ生かすことはできない。',
      '🔴 no show にすると「出発後」扱いで100%。101,010円が丸ごと消える。必ず出発前に取り消すこと。',
      'ダメ元だが「屋久島区間を放棄して鹿児島から第2区間だけ乗れないか」を聞く価値はある。認められれば追加費用なしで帰れた。',
    ],
    links: [
      { label: 'JAL セイバーご利用案内', url: 'https://www.jal.co.jp/jp/ja/dom/fare/rule/saver/' },
      { label: 'JAL 乗継運賃ご利用案内', url: 'https://www.jal.co.jp/jp/ja/dom/fare/rule/transit/' },
      { label: 'JAL 取消手数料 検索', url: 'https://www.jal.co.jp/jp/ja/dom/change/charge/search/' },
    ],
  },
  {
    id: 'refund-boat',
    icon: 'ship',
    title: '払戻が要るもの ― 高速船（8/25）',
    lead: '欠航なら全額戻るが、自動返金ではない。自分で手続きする。',
    rows: [
      { label: '便', value: '112便 鹿児島本港 南ふ頭 8:00 → 宮之浦港 9:50' },
      { label: '運賃', value: '3名 42,000円（片道14,000円×3）・2026/7/30 決済済み' },
      { label: '運航の決定', value: '出港1時間前＝8/25 7:00' },
      { label: '手続き期限', value: '予約確定日（予約番号の付与日）を含む90日間 ＝ 10月末頃まで' },
    ],
    notes: [
      '✅ 悪天候による欠航または条件付運航なら、キャンセル料は不要で全額戻る。',
      '⚠️ 自動返金ではない。払戻フォームか窓口で自分で手続きする。旅行中にやる必要はなく帰ってからで間に合う。',
      'キャンセル料の規定は 7日前まで200円／6〜2日前 10%／前日〜出港60分前 30%／60分前以降 100%。自主キャンセルだとこれが適用されるので、欠航の確定を待つのが正解。',
      '万一「通常運航」した場合だけ、乗らない以上 42,000円は戻らない。8/23 17:00 発表の波は 8/25「4メートル 後 5メートル うねりを伴う」。',
    ],
    links: [
      { label: '運航状況', url: 'https://www.tykousoku.jp/etc/operation.php' },
      { label: '払戻フォーム', url: 'https://www.tykousoku.jp/etc/cancel_refund.php' },
      { label: 'よくある質問（キャンセル料）', url: 'https://www.tykousoku.jp/etc/faq.html' },
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
    area: '大阪・京都メンバー（Nori・ざきさん）',
    go: '伊丹 9:20 ➡ 熊本 10:30（ANA・8/23 搭乗済み）',
    back: '熊本 19:20 ➡ 成田 21:00（ジェットスター・8/26）',
    hint: '帰りは3人まとめて関東へ。関西には戻らない。翌 8/27 に千葉。',
  },
  {
    area: '関東メンバー（せきけん）',
    go: '羽田 ➡ 熊本空港 9:00 頃 着（8/23 搭乗済み・自己手配）',
    back: '熊本 19:20 ➡ 成田 21:00（ジェットスター・8/26）',
    hint: '往路は自己負担で NOREC の計上外。レンタカーの契約者なので、延長の手続きも本人から。',
  },
]
