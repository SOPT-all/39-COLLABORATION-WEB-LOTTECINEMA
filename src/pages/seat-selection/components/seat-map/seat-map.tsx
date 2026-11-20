import { SeatGrid } from '@shared/components/seat-grid/seat-grid'
import type { SeatInfo } from '@shared/types/__generated__/data-contracts'
import { cn } from '@shared/utils/cn'
import { getSeatStatus } from '@shared/utils/get-seat-status'

import { SeatButton } from '../seat-button/seat-button'

interface SeatMapProps {
  seats: SeatInfo[]

  selectedSeatCodes?: string[]
  isSelectionFull?: boolean
  onSeatClick?: (seatCode: string) => void

  className?: string
}

// 상영관 좌석표 (SCREEN + 좌석 배치). 화면보다 넓으면 가로 스크롤
export const SeatMap = ({
  seats,
  selectedSeatCodes = [],
  isSelectionFull = false,
  onSeatClick,
  className,
}: SeatMapProps) => {
  return (
    <section aria-label='좌석표' className={cn('overflow-x-auto', className)}>
      {/* SCREEN이 좌석표 전체 너비 기준 가운데에 오도록 w-max로 함께 감싼다 */}
      <div className='flex w-max flex-col items-center gap-4.5 px-[35px] pt-0 pb-10'>
        <p className='-mr-[15.6px] font-roboto text-[20px]/[1.3] font-normal tracking-[15.6px] text-gray-700'>
          SCREEN
        </p>
        <SeatGrid
          seats={seats}
          className='gap-x-[7px] gap-y-[5px]'
          // 통로 28px = gap 7px + 통로 열 14px + 7px
          aisleWidth='14px'
          renderSeat={(seat) => {
            const seatCode = seat.seatCode
            const isSelected = selectedSeatCodes.includes(seatCode)
            const isDisabled = isSelectionFull && !isSelected

            return (
              <SeatButton
                label={seatCode}
                status={getSeatStatus(seat, { isSelected, isDisabled })}
                onClick={() => onSeatClick?.(seatCode)}
              />
            )
          }}
        />
      </div>
    </section>
  )
}
