// 좌석 범례 및 미리보기 용 작은 좌석
import { cn } from '@shared/utils/cn'

import type { SeatStatus } from '../../types/seat'

type MiniSeatVariant = 'legend' | 'preview'

interface MiniSeatProps {
  status: SeatStatus
  variant: MiniSeatVariant
  className?: string
}

const seatStatusStyle: Record<SeatStatus, string> = {
  default: 'bg-seat-default',
  completed: '',
  selected: 'bg-primary',
  disabled: 'bg-gray-800',
  accessible: 'bg-seat-available',
}

// completed 색상 분리
const completedStyle: Record<MiniSeatVariant, string> = {
  legend:
    'relative overflow-hidden bg-seat-default after:absolute after:inset-0 after:bg-gray-1000/50',
  preview: 'bg-gray-300',
}

const variantSize: Record<MiniSeatVariant, string> = {
  legend: 'h-[3px] w-[4px] rounded-t-[1px]',
  preview: 'h-[5px] w-[7px] rounded-t-[2px]',
}

export const MiniSeat = ({ status, variant, className }: MiniSeatProps) => {
  return (
    <div
      className={cn(
        variantSize[variant],
        status === 'completed' ? completedStyle[variant] : seatStatusStyle[status],
        className,
      )}
      aria-hidden
    />
  )
}
