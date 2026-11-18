// { adult: 2, teen: 1, senior: 0, disabled: 0 } → '성인 2 · 청소년 1' 의 형태로 변환
import { HEADCOUNT_LABELS, HEADCOUNT_TYPES } from '../constants/headcount'
import type { Headcount } from '../types/headcount'

export const formatTicketCounts = (headcount: Headcount) =>
  HEADCOUNT_TYPES.filter((type) => headcount[type] > 0)
    .map((type) => `${HEADCOUNT_LABELS[type]} ${headcount[type]}`)
    .join(' · ')
