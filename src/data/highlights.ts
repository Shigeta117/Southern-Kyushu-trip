import type { IconName } from '../components/Icon'

export interface Highlight {
  icon: IconName
  color: string
  bg: string
  title: string
  body: string
}

export const highlights: Highlight[] = [
  {
    icon: 'map',
    color: 'text-brand-600',
    bg: 'bg-brand-100',
    title: '3県制覇＋離島',
    body: '熊本に降りて阿蘇・高千穂を抜け、宮崎・鹿児島と南九州3県を縦断。高速船で世界遺産・屋久島へ渡り、島から飛んで帰る。戻らない動線。',
  },
  {
    icon: 'camera',
    color: 'text-orange-600',
    bg: 'bg-orange-100',
    title: '毎日変わる絶景',
    body: '草原、渓谷、温泉、活火山、苔むす森、海。シャッターを切り続けたくなる多彩な被写体。',
  },
  {
    icon: 'car-front',
    color: 'text-blue-600',
    bg: 'bg-blue-100',
    title: '多彩なアクティビティ',
    body: '高千穂峡のボート、霧島神宮、桜島フェリー、苔むす森のトレッキング、尾之間温泉、ご当地グルメまで一通り。',
  },
]
