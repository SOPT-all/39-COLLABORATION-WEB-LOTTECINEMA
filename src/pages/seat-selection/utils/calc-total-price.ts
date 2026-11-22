import type { TicketPrices } from '@shared/types/__generated__/data-contracts'
import type { Headcount } from '@shared/types/headcount'

export const calcTotalPrice = (headcount: Headcount, prices: TicketPrices) => {
  return (
    headcount.adult * prices.adult +
    headcount.teen * prices.teen +
    headcount.senior * prices.senior +
    headcount.disabled * prices.disabled
  )
}
