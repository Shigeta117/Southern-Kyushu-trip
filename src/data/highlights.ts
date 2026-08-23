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
    title: '南九州3県を縦断',
    body: '熊本に降りて阿蘇・高千穂を抜け、宮崎・霧島・鹿児島へ南下し、最後は熊本へ戻って飛ぶ。屋久島は 8/23 夜に中止して、そのぶん桜島と熊本に厚みを寄せた。',
  },
  {
    icon: 'camera',
    color: 'text-ember-600',
    bg: 'bg-ember-100',
    title: '毎日変わる絶景',
    body: '阿蘇の草原、高千穂の渓谷、えびの高原の火口湖、桜島の溶岩原、そして熊本城。シャッターを切り続けたくなる多彩な被写体。',
  },
  {
    icon: 'car-front',
    color: 'text-sea-600',
    bg: 'bg-sea-100',
    title: '多彩なアクティビティ',
    body: '高千穂峡の遊歩道、麦わらの一味の像めぐり、えびの高原、霧島神宮、桜島フェリーと湯之平展望所、ご当地グルメまで一通り。',
  },
]
