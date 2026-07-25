import type { TodoGroup } from './types'

/* 予約・準備のタスク。期限の早い順に並べる。
   id は localStorage の保存キーなので、並び替え・文言修正では変えないこと
   （変えるとチェック済みの状態が失われる）。 */
export const todoGroups: TodoGroup[] = [
  {
    id: 'now',
    title: '今すぐ押さえる',
    icon: 'phone',
    urgency: 'now',
    lead: '8月下旬は在庫が先に消える。空いているうちに確定させる。',
    items: [
      {
        id: 'todo-yakushima-stay',
        label: '屋久島（8/25泊）の宿を押さえる',
        detail:
          '宮之浦の民宿・素泊まり・個室・駐車場あり、で電話。①民宿たけすぎ 0997-42-0668 ②民宿海星 0997-42-2145（9〜18時・土日祝休）③民宿あらき 0997-42-0038（駐車場の有無を先に確認）。ネットで満室でも電話すると空いていることが多い。',
        owner: 'Nori',
      },
      {
        id: 'todo-kosokusen',
        label: '高速船 112便 3席（8/25 8:00発）',
        detail: '鹿児島本港 南ふ頭 8:00 → 宮之浦 9:50 の直行。片道14,000円。予約は開放済み。',
        link: { label: '乗船予約', url: 'https://www.tykousoku.jp/reserve/' },
      },
      {
        id: 'todo-rentacar-1',
        label: 'レンタカー①（熊本空港 → 鹿児島市内・乗り捨て）',
        detail:
          '8/23 11:00 受取 → 8/24 夕方 返却。ワンウェイ17,600円（オリックス南九州）。返却営業所は鹿児島中央駅前か天文館周辺を選ぶ。',
        link: { label: 'オリックス南九州', url: 'https://mrl.iwasaki-group.com/oneway.html' },
      },
      {
        id: 'todo-rentacar-2',
        label: 'レンタカー②（屋久島・宮之浦港 → 空港）',
        detail:
          '8/25 10:00 受取 → 8/26 17:30 返却。港⇄空港は+550円。⚠️「19:00の便に乗るので18時前後に返したい」と伝えて返却時刻の確約を取ること。',
      },
      {
        id: 'todo-airbnb',
        label: 'Airbnb 2件を確定（宮崎・赤江／鹿児島・小川町）',
        detail: 'どちらも定員4名。3名で予約。',
      },
    ],
  },
  {
    id: 'confirm',
    title: 'メンバーに確認する',
    icon: 'users',
    urgency: 'confirm',
    items: [
      {
        id: 'todo-sekiken-arrival',
        label: 'せきけんの熊本空港 到着時刻',
        detail: '11:30 を過ぎるとD1の予定を削る必要が出る。決まったらしおりを更新する。',
      },
      {
        id: 'todo-fare-type',
        label: '帰りの航空券の運賃タイプ（あやねに確認）',
        detail:
          'フレックス／スタンダード／シンプルのどれか。シンプルは予約変更が一切できず、スタンダードは当日の前後便変更ができない。台風時の動ける幅が変わる。',
      },
      {
        id: 'todo-kagoshima-key',
        label: '鹿児島Airbnbの早朝チェックアウト方法',
        detail: '8/25は7:00前に出る。鍵の返し方（キーボックスか要連絡か）をホストに聞いておく。',
      },
      {
        id: 'todo-share-checkin',
        label: '宮崎の門限 21:00 を全員に共有',
        detail: 'チェックイン15:00〜21:00。D1で押したら真っ先に大観峰を切る、という合意を取っておく。',
      },
    ],
  },
  {
    id: 'dated',
    title: '8/9(日) 9:00 ちょうど',
    icon: 'clock',
    urgency: 'dated',
    lead: '予約開始が「先」にあるのはこれだけ。開始時刻に取る。',
    items: [
      {
        id: 'todo-takachiho-boat',
        label: '高千穂峡 貸しボート（8/23利用・1艇）',
        detail:
          '2週間前の9:00に開放、締切は8/21(金)9:00。ネット限定で電話予約もキャンセル待ちも不可。日曜なので繁忙期料金5,100円、定員3名でちょうど1艇。',
        link: { label: 'ボート予約サイト', url: 'https://eipro.jp/takachiho1/' },
      },
    ],
  },
  {
    id: 'before',
    title: '出発直前（8/20〜）に見る',
    icon: 'shield',
    urgency: 'before',
    items: [
      {
        id: 'todo-check-typhoon',
        label: '台風の進路',
        detail: '8/25の高速船が最大の急所。渡れないと帰りの航空券がほぼ丸損になる。',
        link: { label: '気象庁 台風情報', url: 'https://www.jma.go.jp/bosai/map.html#contents=typhoon' },
      },
      {
        id: 'todo-check-aso',
        label: '阿蘇 中岳火口の規制',
        detail: '2026/6/21からレベル2で見学不可。引き下げられていれば D1 に足せる。',
        link: { label: '阿蘇火山 火口規制情報', url: 'https://www.aso-volcano.jp/' },
      },
      {
        id: 'todo-check-ebino',
        label: 'えびの高原 県道1号の規制',
        detail: '一部区間が「土日 9:00〜17:00 のみ通行可」。8/24は月曜なので迂回が要るかもしれない。',
        link: { label: 'えびの市 道路規制', url: 'https://www.city.ebino.lg.jp/soshiki/kankoshoko/3/5234.html' },
      },
      {
        id: 'todo-check-ferry',
        label: '高速船の運航状況（前夜・当日朝）',
        detail:
          '怪しければ前夜のうちに 鹿児島空港→屋久島空港 のJAC便（8:35 / 10:30 / 13:25 / 15:10 / 17:45）へ切り替える。',
        link: { label: '運航状況', url: 'https://www.tykousoku.jp/etc/operation.php' },
      },
    ],
  },
]
