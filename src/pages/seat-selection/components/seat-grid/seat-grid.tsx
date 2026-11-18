import type { ReactNode } from 'react'

import type { SeatInfo } from '@shared/types/__generated__/data-contracts'
import { cn } from '@shared/utils/cn'

import { getGridSize } from '../../utils/get-grid-size'

interface SeatGridProps {
  seats: SeatInfo[]
  renderSeat: (seat: SeatInfo) => ReactNode
  // 통로(API 응답에서 좌석이 하나도 없는 열)의 너비.
  aisleWidth?: string
  className?: string
}

export const SeatGrid = ({ seats, renderSeat, aisleWidth = '0px', className }: SeatGridProps) => {
  const { columns } = getGridSize(seats)

  // 좌석이 하나라도 있는 열 번호 모으기 -> {0, 1, 3, 4...ㅡ, 14}
  const occupiedColumns = new Set(seats.map((seat) => seat.columnIndex ?? 0))

  // 0~14열 돌면서 좌석 있으면 auto, 없으면 통로로 지정
  const gridTemplateColumns = Array.from({ length: columns }, (_, index) =>
    occupiedColumns.has(index) ? 'auto' : aisleWidth,
  ).join(' ')

  return (
    <div className={cn('grid', className)} style={{ gridTemplateColumns }}>
      {seats.map((seat) => (
        <div
          key={seat.seatCode}
          // grid 라인이 1부터 시작함.
          style={{ gridRow: (seat.rowIndex ?? 0) + 1, gridColumn: (seat.columnIndex ?? 0) + 1 }}>
          {renderSeat(seat)}
        </div>
      ))}
    </div>
  )
}
