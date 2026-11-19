import { ACCESSIBLE_SEAT_CODES } from '@shared/constants/seat'
import type { SeatInfo } from '@shared/types/__generated__/data-contracts'
import type { SeatStatus } from '@shared/types/seat'

export const getSeatStatus = (seat: SeatInfo): SeatStatus => {
  if (seat.isReserved) return 'completed'
  if (seat.seatCode && ACCESSIBLE_SEAT_CODES.has(seat.seatCode)) return 'accessible'

  return 'default'
}
