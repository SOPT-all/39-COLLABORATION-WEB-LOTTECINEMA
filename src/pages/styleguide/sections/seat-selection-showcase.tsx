import { SeatButton } from '@pages/seat-selection/components/seat-button/seat-button'
import type { SeatStatus } from '@pages/seat-selection/types/seat'

import { ShowcaseSection } from './showcase-section'

const SEAT_STATUSES: SeatStatus[] = ['default', 'completed', 'selected', 'disabled', 'accessible']

export const SeatSelectionShowcase = () => (
  <ShowcaseSection title='Seat Selection'>
    {/* SeatButton 상태별 예시 */}
    <div className='col-span-2 flex gap-6'>
      {SEAT_STATUSES.map((status) => (
        <div key={status} className='flex flex-col items-center gap-3'>
          <SeatButton label='B1' status={status} />
          <span className='typo-c1-r text-gray-700'>{status}</span>
        </div>
      ))}
    </div>
  </ShowcaseSection>
)
