import type { PackingGroup } from './types'

// 夏の南九州を重視した持ち物リスト。2026-08-24: 屋久島中止でトレッキング章を削除。
// 各アイテムの id は localStorage 保存キー。並び替え・追加してもチェック状態がズレないよう固定値にする。
export const packingGroups: PackingGroup[] = [
  {
    id: 'summer',
    title: '夏の南九州 暑さ・日差し対策',
    icon: 'sun',
    items: [
      { id: 'summer-hat', label: '帽子 / サングラス' },
      { id: 'summer-sunscreen', label: '日焼け止め（汗・水に強いもの）' },
      { id: 'summer-hydration', label: '経口補水液 / 塩分タブレット' },
      { id: 'summer-bugspray', label: '虫除けスプレー' },
      { id: 'summer-longsleeve', label: '薄手の長袖（日焼け・冷房対策）' },
    ],
  },
  {
    id: 'ash',
    title: '桜島の降灰対策',
    icon: 'wind',
    items: [
      { id: 'ash-mask', label: 'マスク（できれば防塵）' },
      { id: 'ash-glasses', label: 'メガネ（コンタクトより安全）' },
      { id: 'ash-wipes', label: 'ウェットティッシュ' },
      { id: 'ash-umbrella', label: '折りたたみ傘' },
    ],
  },
  {
    id: 'docs',
    title: '予約・書類・お金',
    icon: 'ticket',
    items: [
      { id: 'docs-license', label: '運転免許証' },
      { id: 'docs-rentacar', label: 'レンタカー予約確認（九州本土・延長の可否）' },
      { id: 'docs-kosokusen-mails', label: '高速船のメール2通（予約番号案内＋決済確認・要スクショ）' },
      { id: 'docs-hotel', label: '宿の予約確認（3泊）' },
      { id: 'docs-studentid', label: '学生証／身分証 ― 全員分（新幹線やフェリーの学割に使える）' },
      { id: 'docs-cash', label: '現金（桜島の売店や小さな店はカード不可のことがある）' },
    ],
  },
  {
    id: 'extra',
    title: 'あると便利',
    icon: 'sparkles',
    items: [
      { id: 'extra-motionsick', label: '酔い止め（高速船）' },
      { id: 'extra-meds', label: '常備薬' },
      { id: 'extra-battery', label: 'モバイルバッテリー（防水）' },
      { id: 'extra-ecobag', label: 'エコバッグ' },
      { id: 'extra-cable', label: '充電ケーブル' },
    ],
  },
]
