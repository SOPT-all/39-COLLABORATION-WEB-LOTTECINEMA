import { SeatGrid } from '@shared/components/seat-grid/seat-grid'
import type { SeatInfo } from '@shared/types/__generated__/data-contracts'
import { cn } from '@shared/utils/cn'
import { getSeatStatus } from '@shared/utils/get-seat-status'

import { MiniSeat } from '../mini-seat/mini-seat'

interface SeatOverviewProps {
  seats: SeatInfo[]
  availableSeatCount: number
  totalSeatCount: number
  className?: string
}

// 상영 정보 바텀시트의 좌석 미리보기 (SCREEN + 미니 좌석표 + 잔여좌석)
export const SeatOverview = ({
  seats,
  availableSeatCount,
  totalSeatCount,
  className,
}: SeatOverviewProps) => {
  return (
    <section aria-label='좌석 미리보기' className={cn('flex flex-col items-center', className)}>
      {/* SCREEN이 좌석표 너비 기준 가운데에 오도록 */}
      <div className='flex flex-col items-center gap-10.5'>
        <p className='-mr-[6px] typo-b1-r tracking-[6px] text-gray-400'>SCREEN</p>
        <SeatGrid
          seats={seats}
          className='gap-x-[3px] gap-y-[2px]'
          // 통로 11px = gap 3px + 통로 열 5px + gap 3px
          aisleWidth='5px'
          renderSeat={(seat) => <MiniSeat status={getSeatStatus(seat)} variant='preview' />}
        />
      </div>

      <p className='mt-13.5 flex h-5 items-center gap-px typo-b2-m text-gray-1000'>
        <span>잔여좌석</span>
        <span className='self-end typo-b2-b text-seat-available'>{availableSeatCount}</span>
        <span>{`/${totalSeatCount}석`}</span>
      </p>
    </section>
  )
}
