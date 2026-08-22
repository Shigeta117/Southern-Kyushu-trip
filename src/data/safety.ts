import type { Hazard, Hospital, LinkItem } from './types'

export const emergencyNumbers = [
  { label: '警察（事件・事故）', tel: '110' },
  { label: '消防・救急・火災', tel: '119' },
  { label: '海の事故・海難', tel: '118' },
]

export const hazards: Hazard[] = [
  {
    icon: 'ship',
    title: '8/25 の高速船（最大リスク）',
    body: '台風18号ソウデル（非常に強い）は 8/25 15:00 に屋久島の南 605km、8/26 に 577km を通る予報で、九州には来ない。危ないのは台風そのものではなく先に届くうねりのほう。種子島・屋久島地方の波浪予報は 8/23「1m 後 1.5m」→ 8/24「1.5m 後 3m うねりを伴う」と上がる（8/22 17:00 発表）。⇒ 判断は降水確率ではなく波高で行う。運航の最終決定は出港1時間前。怪しければ前夜のうちに鹿児島空港→屋久島空港のJAC便（8:35 / 10:30 / 13:25 / 15:10 / 17:45）へ切り替える。渡れなかったときの損害は3重で、①帰りの航空券は「船だけ欠航・飛行機は平常運航」だと旅客都合扱いになり運賃の100%が取消手数料 ②宿（たけすぎ ¥24,900）は天候理由でも当日100% ③船代 ¥42,000 だけは欠航なら無料で戻る。飛行機ごと欠航するレベルなら ANA の無手数料振替が使えるので、その時はD3・D4を鹿児島＋指宿に差し替える「プランB」へ。',
  },
  {
    icon: 'flame',
    title: '阿蘇はレベル3（入山規制）',
    body: '2026/8/14 15:45 にレベル2→3へ引上げ。規制範囲が火口から概ね1km→2kmへ拡大した。できないのは火口見学、中岳・高岳・烏帽子岳・杵島岳の登山、阿蘇山上ターミナルと山上広場駐車場、そして南阿蘇村側からの南登山道（県道111号）＝全面通行止めで通り抜け不可。できるのは草千里ヶ浜・草千里展望所の見学と阿蘇火山博物館で、国道57号・265号・325号も通常どおり通れる。D1は草千里・大観峰中心で組んであるので行程は成立する。8/22 に再確認して変更なし。レベル4に上がると草千里も規制圏に入りうるので、D1の朝にもう一度 aso-volcano.jp を見ること。',
  },
  {
    icon: 'warn',
    title: 'えびの高原へは「えびのIC → 県道30号」で入る',
    body: '規制されているのは宮崎県道1号のうち「甑岳登山道入口付近〜県道30号との交点」の区間だけ＝えびの高原から小林側（東）へ向かう部分で、土日9〜17時・屋根付きの自動車限定。8/24は月曜なので通れない。ただし規制はこの区間限定で、鹿児島県道1号（牧園側）は通行可能とえびの市が明記している。⇒ 小林ICで降りずに えびのIC まで行き、県道30号でえびの高原へ上がって、鹿児島県道1号で霧島温泉郷へ南下する。えびの高原も霧島神宮も落とさずに済む（8/22 に規制の継続を再確認）。硫黄山はレベル1だが火口周辺250m・西噴気孔周辺100mは常時立入禁止、霧島山（新燃岳）はレベル2で火口2km圏の登山は不可＝韓国岳には登れない。',
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
  { label: '気象庁 鹿児島県の予報（波浪）', url: 'https://www.jma.go.jp/bosai/forecast/#area_type=offices&area_code=460100' },
  { label: '気象庁 宮崎県の予報', url: 'https://www.jma.go.jp/bosai/forecast/#area_type=offices&area_code=450000' },
  { label: '屋久島徳洲会病院', url: 'https://www.yakushimatokushukai.com/' },
]
