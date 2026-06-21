export interface Highlight {
  icon: string
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
    body: '熊本・宮崎・鹿児島の南九州3県を縦断し、高速船で世界遺産・屋久島へ。ほぼ直線の動線。',
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
    body: '絶景ドライブ、神社巡り、ボート、トレッキング、温泉、ご当地グルメをすべて網羅。',
  },
]
