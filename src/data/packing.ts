import type { PackingGroup } from './types'

// 夏 × 屋久島の雨 を重視した持ち物リスト。
// 各アイテムの id は localStorage 保存キー。並び替え・追加してもチェック状態がズレないよう固定値にする。
export const packingGroups: PackingGroup[] = [
  {
    id: 'trek',
    title: '屋久島トレッキング（必携）',
    icon: 'tree-pine',
    items: [
      { id: 'trek-rainwear', label: '登山用レインウェア 上下（透湿防水・傘は森で使えない）' },
      { id: 'trek-packcover', label: '防水ザック / ザックカバー' },
      { id: 'trek-shoes', label: 'トレッキングシューズ（防水）' },
      { id: 'trek-baselayer', label: '速乾インナー＋ミドルレイヤー' },
      { id: 'trek-clothes', label: '着替え一式（防水袋・ジップロックで二重防水）' },
      { id: 'trek-food', label: '飲み物・行動食' },
      { id: 'trek-towel', label: 'タオル / 帰りの乾いた着替え（車に常備）' },
    ],
  },
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
      { id: 'docs-rentacar', label: 'レンタカー予約確認（①九州本土 / ②屋久島）' },
      { id: 'docs-kosokusen-mails', label: '高速船のメール2通（予約番号案内＋決済確認・要スクショ）' },
      { id: 'docs-hotel', label: '宿の予約確認（3泊）' },
      { id: 'docs-studentid', label: '学生証／身分証 ― 全員分（たけすぎの学割プラン）' },
      { id: 'docs-cash', label: '現金（屋久島はカード不可の店も多い）' },
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
