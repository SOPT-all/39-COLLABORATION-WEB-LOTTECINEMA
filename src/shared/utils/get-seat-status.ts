import { ACCESSIBLE_SEAT_CODES } from '@shared/constants/seat'
import type { SeatInfo } from '@shared/types/__generated__/data-contracts'
import type { SeatStatus } from '@shared/types/seat'

interface SeatStatusOptions {
  isSelected?: boolean
  isDisabled?: boolean
}

export const getSeatStatus = (seat: SeatInfo, options: SeatStatusOptions = {}): SeatStatus => {
  if (options.isDisabled) return 'disabled'
  if (seat.isReserved) return 'completed'
  if (options.isSelected) return 'selected'
  if (seat.seatCode && ACCESSIBLE_SEAT_CODES.has(seat.seatCode)) return 'accessible'

  return 'default'
}
