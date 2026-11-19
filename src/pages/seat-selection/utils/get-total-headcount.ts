import type { Headcount } from '../types/headcount'

export const getTotalHeadcount = (headcount: Headcount) =>
  Object.values(headcount).reduce((sum, count) => sum + count, 0)
