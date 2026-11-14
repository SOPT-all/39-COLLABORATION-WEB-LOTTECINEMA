import { useState } from 'react'

import { MiniSeat } from '@pages/seat-selection/components/mini-seat/mini-seat'
import { SeatButton } from '@pages/seat-selection/components/seat-button/seat-button'
import type { SeatStatus } from '@pages/seat-selection/types/seat'

import { ShowcaseSection } from './showcase-section'

const SEAT_STATUSES: SeatStatus[] = ['default', 'completed', 'selected', 'disabled', 'accessible']

export const SeatSelectionShowcase = () => {
  const [isSelected, setIsSelected] = useState(false)

  return (
    <ShowcaseSection title='Seat Selection'>
      {/* SeatButton 상태별 예시 */}
      <div className='col-span-2 flex flex-col gap-3'>
        <h4 className='m-0 typo-c2-m text-gray-1000'>SeatButton</h4>
        <div className='flex gap-6'>
          {SEAT_STATUSES.map((status) => (
            <div key={status} className='flex flex-col items-center gap-3'>
              <SeatButton label='B1' status={status} />
              <span className='typo-c1-r text-gray-700'>{status}</span>
            </div>
          ))}
        </div>
      </div>

      {/* MiniSeat 범례 */}
      <div className='col-span-2 flex flex-col gap-3'>
        <h4 className='m-0 typo-c2-m text-gray-1000'>MiniSeat · legend (4×3)</h4>
        <div className='flex gap-6'>
          {SEAT_STATUSES.map((status) => (
            <div key={status} className='flex flex-col items-center gap-3'>
              <MiniSeat status={status} variant='legend' />
              <span className='typo-c1-r text-gray-700'>{status}</span>
            </div>
          ))}
        </div>
      </div>

      {/* MiniSeat 미리보기 */}
      <div className='col-span-2 flex flex-col gap-3'>
        <h4 className='m-0 typo-c2-m text-gray-1000'>MiniSeat · preview (7×5)</h4>
        <div className='flex gap-6'>
          {SEAT_STATUSES.map((status) => (
            <div key={status} className='flex flex-col items-center gap-3'>
              <MiniSeat status={status} variant='preview' />
              <span className='typo-c1-r text-gray-700'>{status}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 좌석 버튼 클릭 시 토글 */}
      <div className='col-span-2 flex flex-col gap-3'>
        <h4 className='m-0 typo-c2-m text-gray-1000'>SeatButton 선택 토글</h4>
        <div className='flex flex-col items-start gap-2'>
          <SeatButton
            label='F10'
            onClick={() => setIsSelected((prev) => !prev)}
            status={isSelected ? 'selected' : 'default'}
          />
        </div>
      </div>
    </ShowcaseSection>
  )
}
