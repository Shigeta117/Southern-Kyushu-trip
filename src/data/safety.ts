import type { Hazard, Hospital, LinkItem } from './types'

export const emergencyNumbers = [
  { label: '警察（事件・事故）', tel: '110' },
  { label: '消防・救急・火災', tel: '119' },
  { label: '海の事故・海難', tel: '118' },
]

export const hazards: Hazard[] = [
  {
    icon: 'ship',
    title: '台風・欠航（最大リスク）',
    body: '8月下旬は台風シーズン。8/25の高速船が欠航すると屋久島に渡れず、帰りの便も屋久島発なので旅程全体が同時に崩れる。予備日はない。しかも「船だけ欠航・飛行機は平常運航」の場合は旅客都合扱いで、帰りの航空券は運賃の100%が取消手数料になり実質戻らない。⇒ 8/25は何としても島へ渡ること。高速船が怪しければ前夜のうちに鹿児島空港→屋久島空港のJAC便を押さえる。飛行機ごと欠航するレベルの台風なら、その時点でANAの無手数料振替・払戻が使えるので、D3・D4を鹿児島＋指宿に差し替える「プランB」へ。',
  },
  {
    icon: 'flame',
    title: '阿蘇 中岳火口は見学不可',
    body: '2026/6/21 16:00 に噴火警戒レベルが1→2へ引上げられ、火口から概ね1km圏内が立入禁止。阿蘇山公園道路経由の火口見学・火口シャトルバスは停止中。D1は草千里・大観峰中心で組んである。過去にレベル2→1へ戻った前例もあるので、出発直前に気象庁と aso-volcano.jp で再確認を。',
  },
  {
    icon: 'warn',
    title: 'えびの高原・県道1号の変則規制',
    body: '硫黄山の噴火警戒レベルは1（2023年12月に引下げ済み）だが、火口周辺250m・西噴気孔周辺100mは常時立入禁止。加えて県道1号の一部区間は「土日 9:00〜17:00 のみ通行可」という変則規制がある。8/24は月曜なので通れない区間がある前提で、えびのIC 側からアクセスし、当日朝に規制情報を確認すること。',
  },
  {
    icon: 'rain',
    title: '屋久島の雨',
    body: '「月に35日雨が降る」多雨地帯。登山用レインウェア上下と荷物の完全防水が必須。雨でも苔むす森は最も美しい——“雨前提”で備える。白谷雲水峡は沢の増水時、無理せず引き返す判断を最優先に。',
  },
  {
    icon: 'wind',
    title: '桜島の降灰',
    body: '風向き次第で降灰に遭う。マスク・帽子・サングラスで保護。運転時は視界悪化に注意（乾いた灰はワイパー前に散水）。MBC降灰予報で当日の風向きを確認し、降灰側の展望所は時間をずらす。',
  },
  {
    icon: 'thermometer',
    title: '熱中症',
    body: '8月下旬の南九州は高温多湿でWBGTが高い。こまめな水分・塩分、帽子、休憩を徹底。炎天下の車内放置は厳禁。熱中症警戒アラート（WBGT33以上）を確認。草千里と屋久島の一周ドライブは日陰が少ない。',
  },
  {
    icon: 'car',
    title: '夜間・狭路の運転',
    body: 'D1夜の R218（高千穂→延岡）は山間部でカーブ・トンネルが続き街灯が少ない。初見の夜間運転なので速度控えめに。D4午前の西部林道は世界遺産内の狭路で、ヤクザル・ヤクシカが出る。すれ違いに時間を取られるので、帰りの便から逆算して午前中に抜けておく。',
  },
]

export const hospitals: Hospital[] = [
  { area: '熊本・阿蘇（D1）', name: '熊本医療センター / 熊本大学病院', note: '県内の救命救急センター。阿蘇は山間部で医療機関が少ない' },
  { area: '宮崎（D1泊）', name: '宮崎大学医学部附属病院 / 県立宮崎病院', note: '高度救命救急センター。赤江から市街方面' },
  { area: '鹿児島市（D2泊）', name: '鹿児島市立病院 / 鹿児島大学病院', note: '3次救急。桜島・天文館での急病時' },
  { area: '屋久島（D3-4）', name: '屋久島徳洲会病院（約140床）', note: '島で唯一の入院機能。重症は本土搬送に。島では無理をしない' },
]

export const officialLinks: LinkItem[] = [
  { label: '気象庁 噴火警報・火山', url: 'https://www.jma.go.jp/bosai/volcano/' },
  { label: '阿蘇火山 火口規制情報', url: 'https://www.aso-volcano.jp/' },
  { label: '気象庁 台風情報', url: 'https://www.jma.go.jp/bosai/map.html#contents=typhoon' },
  { label: 'MBC 桜島降灰予報', url: 'https://www.mbc.co.jp/weather/kouhai.php' },
  { label: '環境省 熱中症（WBGT）', url: 'https://www.wbgt.env.go.jp/' },
  { label: '高速船 運航状況', url: 'https://www.tykousoku.jp/etc/operation.php' },
  { label: '桜島フェリー 運航状況', url: 'https://www.city.kagoshima.lg.jp/sakurajima-ferry/unko_jokyo/unkojyokyo.html' },
  { label: '屋久島観光協会 交通運航状況', url: 'https://yakukan.jp/safe-travel/transportation.html' },
  { label: '屋久島レク森協議会（白谷規制）', url: 'https://y-rekumori.com/' },
  { label: 'えびの市 登山道・道路規制', url: 'https://www.city.ebino.lg.jp/soshiki/kankoshoko/3/5234.html' },
  { label: '高千穂峡 ボート予約', url: 'https://eipro.jp/takachiho1/' },
  { label: '屋久島徳洲会病院', url: 'https://www.yakushimatokushukai.com/' },
]
