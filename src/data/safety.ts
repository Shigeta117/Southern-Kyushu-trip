import type { Hazard, Hospital, LinkItem } from './types'

export const emergencyNumbers = [
  { label: '警察（事件・事故）', tel: '110' },
  { label: '消防・救急・火災', tel: '119' },
  { label: '海の事故・海難', tel: '118' },
]

export const hazards: Hazard[] = [
  {
    icon: 'rain',
    title: '屋久島の雨',
    body: '「月に35日雨が降る」多雨地帯。登山用レインウェア上下と荷物の完全防水が必須。雨でも苔むす森は最も美しい——“雨前提”で備える。',
  },
  {
    icon: 'wind',
    title: '桜島の降灰',
    body: '風向き次第で降灰に遭う。マスク・帽子・サングラスで保護。運転時は視界悪化に注意（乾いた灰はワイパー前に散水）。MBC降灰予報で確認。',
  },
  {
    icon: 'flame',
    title: '火山警戒レベル',
    body: '桜島は噴火警戒レベル3（入山規制・目安）が継続。阿蘇 中岳火口は2026年6月時点で見学閉鎖中。出発前・当日朝に気象庁と aso-volcano.jp で必ず確認。',
  },
  {
    icon: 'thermometer',
    title: '熱中症',
    body: '高温多湿でWBGTが高い。こまめな水分・塩分、帽子、休憩を徹底。炎天下の車内放置は厳禁。熱中症警戒アラート（WBGT33以上）を確認。',
  },
  {
    icon: 'ship',
    title: '台風・欠航',
    body: '7〜9月は台風で航空便・高速船・フェリーが欠航しうる。屋久島は予備日と代替交通、キャンセル規定の確認を。足止めに備え現金・常備薬も。',
  },
]

export const hospitals: Hospital[] = [
  { area: '熊本（D1）', name: '熊本医療センター / 熊本大学病院', note: '県内の救命救急センター。阿蘇は山間部で医療機関が少ない' },
  { area: '鹿児島市（D2-3）', name: '鹿児島市立病院 / 鹿児島大学病院', note: '3次救急。桜島・天文館での急病時' },
  { area: '屋久島（D3-4）', name: '屋久島徳洲会病院（約140床）', note: '島で唯一の入院機能。重症は本土搬送に。島では無理をしない' },
]

export const officialLinks: LinkItem[] = [
  { label: '気象庁 噴火警報・火山', url: 'https://www.jma.go.jp/bosai/volcano/' },
  { label: '阿蘇火山 火口規制情報', url: 'https://www.aso-volcano.jp/' },
  { label: 'MBC 桜島降灰予報', url: 'https://www.mbc.co.jp/weather/kouhai.php' },
  { label: '環境省 熱中症（WBGT）', url: 'https://www.wbgt.env.go.jp/' },
  { label: '高速船 運航状況', url: 'https://www.tykousoku.jp/etc/operation.php' },
  { label: '桜島フェリー 運航状況', url: 'https://www.city.kagoshima.lg.jp/sakurajima-ferry/unko_jokyo/unkojyokyo.html' },
  { label: '屋久島観光協会 交通運航状況', url: 'https://yakukan.jp/safe-travel/transportation.html' },
  { label: '屋久島レク森協議会（白谷規制）', url: 'https://y-rekumori.com/' },
  { label: '高千穂峡 ボート予約', url: 'https://eipro.jp/takachiho1/' },
  { label: '屋久島徳洲会病院', url: 'https://www.yakushimatokushukai.com/' },
]
