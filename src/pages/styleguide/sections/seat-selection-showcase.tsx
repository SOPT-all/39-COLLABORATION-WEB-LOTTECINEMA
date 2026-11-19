import { useState } from 'react'

import { CountStepper } from '@pages/seat-selection/components/count-stepper/count-stepper'
import { HeadcountSelector } from '@pages/seat-selection/components/headcount-selector/headcount-selector'
import { MiniSeat } from '@pages/seat-selection/components/mini-seat/mini-seat'
import { SeatButton } from '@pages/seat-selection/components/seat-button/seat-button'
import { SeatMap } from '@pages/seat-selection/components/seat-map/seat-map'
import { SeatOverview } from '@pages/seat-selection/components/seat-overview/seat-overview'
import type { Headcount } from '@pages/seat-selection/types/headcount'
import type { SeatStatus } from '@pages/seat-selection/types/seat'

import { ShowtimeInfo } from '@shared/components/showtime-info/showtime-info'
import { showtimeSeatsMock } from '@shared/mocks/data/showtime-seats'

import { ShowcaseSection } from './showcase-section'

const SEAT_STATUSES: SeatStatus[] = ['default', 'completed', 'selected', 'disabled', 'accessible']

export const SeatSelectionShowcase = () => {
  const [isSelected, setIsSelected] = useState(false)
  const [adultCount, setAdultCount] = useState(0)
  const [teenCount, setTeenCount] = useState(0)
  const [headcount, setHeadcount] = useState<Headcount>({
    adult: 0,
    teen: 0,
    senior: 0,
    disabled: 0,
  })

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

      {/* count-stepper */}
      <div className='col-span-2 flex flex-col gap-3'>
        <h4 className='m-0 typo-c2-m text-gray-1000'>CountStepper</h4>
        <CountStepper label='성인' count={adultCount} onChange={setAdultCount} max={8} />
      </div>

      <div className='col-span-2 flex flex-col gap-3'>
        <h4 className='m-0 typo-c2-m text-gray-1000'>
          count-stepper 부모 컴포넌트 고정(width:330px)
        </h4>
        <div className='w-[330px]'>
          <CountStepper label='청소년' count={teenCount} onChange={setTeenCount} max={8} />
        </div>
      </div>

      {/* HeadcountSelector: 4개 유형 인원 선택 */}
      <div className='col-span-2 flex flex-col gap-3'>
        <h4 className='m-0 typo-c2-m text-gray-1000'>HeadcountSelector (width: 330px)</h4>
        <div className='w-[330px]'>
          <HeadcountSelector value={headcount} onChange={setHeadcount} />
        </div>
        <pre className='m-0 typo-c1-r text-gray-700'>{JSON.stringify(headcount)}</pre>
      </div>

      {/* SeatMap: 실제 응답 형태의 mock(77석)으로 배치 확인 */}
      <div className='col-span-2 flex flex-col gap-3'>
        <h4 className='m-0 typo-c2-m text-gray-1000'>SeatMap (width: 375px)</h4>
        <div className='w-[375px] bg-gray-1000 py-10'>
          <SeatMap seats={showtimeSeatsMock.seats ?? []} />
        </div>
      </div>

      {/* SeatOverview: 상영 정보 바텀시트의 좌석 미리보기 */}
      <div className='col-span-2 flex flex-col gap-3'>
        <h4 className='m-0 typo-c2-m text-gray-1000'>SeatOverview (width: 375px)</h4>
        <div className='w-[375px] bg-gray-050 py-10'>
          <SeatOverview
            seats={showtimeSeatsMock.seats ?? []}
            availableSeatCount={showtimeSeatsMock.availableSeatCount ?? 0}
            totalSeatCount={showtimeSeatsMock.totalSeatCount ?? 0}
          />
        </div>
      </div>

      {/* ShowtimeInfo: 바텀시트용 */}
      <div className='col-span-2 flex flex-col gap-3'>
        <h4 className='m-0 typo-c2-m text-gray-1000'>ShowtimeInfo (width: 375px)</h4>
        <div className='w-[375px] px-5 py-2.5'>
          <ShowtimeInfo />
        </div>
      </div>

      {/* ShowtimeInfo: 인원 선택용 */}
      <div className='col-span-2 flex flex-col gap-3'>
        <h4 className='m-0 typo-c2-m text-gray-1000'>
          ShowtimeInfo · headcount (여기 부분만 배경 어둡게)
        </h4>
        <div className='flex flex-wrap items-start gap-6'>
          <div className='flex flex-col items-center gap-2'>
            <div className='w-[375px] bg-gray-1000 px-5 py-4'>
              <ShowtimeInfo variant='headcount' />
            </div>
            <span className='typo-c1-r text-gray-700'>원래 색</span>
          </div>

          <div className='flex flex-col items-center gap-2'>
            <div className='relative w-[375px] bg-gray-1000 px-5 py-4'>
              <ShowtimeInfo variant='headcount' />
              <div aria-hidden='true' className='absolute inset-0 bg-gray-1000/60' />
            </div>
            <span className='typo-c1-r text-gray-700'>시트 뒷배경(검정 60%) 적용</span>
          </div>
        </div>
      </div>
    </ShowcaseSection>
  )
}
