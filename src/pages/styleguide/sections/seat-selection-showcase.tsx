import { useState } from 'react'

import { CountStepper } from '@pages/seat-selection/components/count-stepper/count-stepper'
import { HeadcountSelector } from '@pages/seat-selection/components/headcount-selector/headcount-selector'
import { HeadcountSheet } from '@pages/seat-selection/components/headcount-sheet/headcount-sheet'
import { MiniSeat } from '@pages/seat-selection/components/mini-seat/mini-seat'
import { SeatButton } from '@pages/seat-selection/components/seat-button/seat-button'
import { SeatSummarySection } from '@pages/seat-selection/components/seat-summary-section/seat-summary-section'
import type { Headcount } from '@pages/seat-selection/types/headcount'
import type { SeatStatus } from '@pages/seat-selection/types/seat'

import { Button } from '@shared/components/button/button'

import { ShowcaseSection } from './showcase-section'

const SEAT_STATUSES: SeatStatus[] = ['default', 'completed', 'selected', 'disabled', 'accessible']

const SUMMARY_HEADCOUNT: Headcount = { adult: 2, teen: 0, senior: 0, disabled: 0 }

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
  const [isHeadcountSheetOpen, setIsHeadcountSheetOpen] = useState(false)
  const [sheetHeadcount, setSheetHeadcount] = useState<Headcount>({
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

      {/* SeatSummarySection: 좌석 선택 전 / 선택 완료 */}
      <div className='col-span-2 flex flex-col gap-3'>
        <h4 className='m-0 typo-c2-m text-gray-1000'>
          SeatSummarySection (width: 375px) · 선택 전 / 선택 완료
        </h4>
        <div className='flex flex-wrap items-start gap-6'>
          <div className='w-[375px] border-gray-100'>
            <SeatSummarySection
              movieTitle='극장판 치이카와: 인어 섬의 비밀'
              formatType='2D'
              selectedSeatCodes={[]}
              headcount={SUMMARY_HEADCOUNT}
              totalPrice={30000}
              onHeadcountChange={() => {}}
              onPay={() => {}}
            />
          </div>
          <div className='w-[375px] border-gray-100'>
            <SeatSummarySection
              movieTitle='극장판 치이카와: 인어 섬의 비밀'
              formatType='2D'
              selectedSeatCodes={['E4', 'E5']}
              headcount={SUMMARY_HEADCOUNT}
              totalPrice={30000}
              onHeadcountChange={() => {}}
              onPay={() => {}}
            />
          </div>
        </div>
      </div>

      {/* HeadcountSheet: 인원 선택 모달 (0명이면 좌석선택 비활성화) */}
      <div className='col-span-2 flex flex-col gap-3'>
        <h4 className='m-0 typo-c2-m text-gray-1000'>HeadcountSheet</h4>
        <div className='flex items-center gap-3'>
          <Button variant='dark' size='small' onClick={() => setIsHeadcountSheetOpen(true)}>
            인원 선택 시트 열기
          </Button>
          <pre className='m-0 typo-c1-r text-gray-700'>{JSON.stringify(sheetHeadcount)}</pre>
        </div>
        <HeadcountSheet
          isOpen={isHeadcountSheetOpen}
          screenInfo='용산 · 4관 리클라이너 · 자막'
          headcount={sheetHeadcount}
          onHeadcountChange={setSheetHeadcount}
          onConfirm={() => setIsHeadcountSheetOpen(false)}
        />
      </div>
    </ShowcaseSection>
  )
}
