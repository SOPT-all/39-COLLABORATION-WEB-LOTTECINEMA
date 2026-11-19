import type { Headcount } from '@shared/types/headcount'

export const getTotalHeadcount = (headcount: Headcount) =>
  Object.values(headcount).reduce((sum, count) => sum + count, 0)
