import type { TicketPrices } from '@shared/types/__generated__/data-contracts'

import type { Headcount } from '../types/headcount'

export const calcTotalPrice = (headcount: Headcount, prices: TicketPrices) => {
  return (
    headcount.adult * (prices.adult ?? 0) +
    headcount.teen * (prices.teen ?? 0) +
    headcount.senior * (prices.senior ?? 0) +
    headcount.disabled * (prices.disabled ?? 0)
  )
}
