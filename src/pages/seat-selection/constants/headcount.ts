import type { HeadcountType } from '../types/headcount'

export const HEADCOUNT_LABELS: Record<HeadcountType, string> = {
  adult: '성인',
  teen: '청소년',
  senior: '경로',
  disabled: '장애인',
}

export const HEADCOUNT_TYPES = Object.keys(HEADCOUNT_LABELS) as HeadcountType[]

export const MAX_TOTAL_HEADCOUNT = 8
