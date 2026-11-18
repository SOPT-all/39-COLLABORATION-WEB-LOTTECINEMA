import { BadgeAge12Icon, BadgeAge15Icon, BadgeAge19Icon, BadgeAgeAllIcon } from '@shared/icons'

export const AGE_RATINGS = {
  전체: { Icon: BadgeAgeAllIcon, label: '전체 관람가' },
  '12세': { Icon: BadgeAge12Icon, label: '12세 이상 관람가' },
  '15세': { Icon: BadgeAge15Icon, label: '15세 이상 관람가' },
  청불: { Icon: BadgeAge19Icon, label: '청소년 관람불가' },
} as const

export type AgeRating = keyof typeof AGE_RATINGS

export const isAgeRating = (value: string | undefined): value is AgeRating =>
  value !== undefined && Object.hasOwn(AGE_RATINGS, value)
