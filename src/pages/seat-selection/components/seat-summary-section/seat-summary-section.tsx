import { getTotalHeadcount } from '@pages/seat-selection/utils/get-total-headcount'

import { Button } from '@shared/components/button/button'
import tossBanner from '@shared/icons/assets/toss-banner.png'
import { cn } from '@shared/utils/cn'

import type { Headcount } from '../../types/headcount'
import { formatTicketCounts } from '../../utils/format-ticket-counts'

interface SeatSummarySectionProps {
  movieTitle: string
  formatType: string
  selectedSeatCodes: string[]
  headcount: Headcount
  totalPrice: number
  onHeadcountChange: () => void
  onPay: () => void
  className?: string
}

export const SeatSummarySection = ({
  movieTitle,
  formatType,
  selectedSeatCodes,
  headcount,
  totalPrice,
  onHeadcountChange,
  onPay,
  className,
}: SeatSummarySectionProps) => {
  const totalHeadcount = getTotalHeadcount(headcount)
  const isComplete = totalHeadcount > 0 && selectedSeatCodes.length === totalHeadcount

  return (
    <section aria-label='선택 정보' className={cn('bg-gray-000', className)}>
      <h2 className='border-b border-gray-100 px-5.5 py-2.5 typo-b2-m text-gray-1000'>
        {movieTitle} ({formatType})
      </h2>

      <dl className='flex flex-col gap-[15px] px-5.5 pt-[15px] pb-4 typo-b1-r text-gray-1000'>
        <div className='flex items-center justify-between'>
          <dt className='typo-c3-m text-gray-1000'>좌석</dt>
          <dd className={cn(selectedSeatCodes.length === 0 && 'typo-c3-m text-gray-400')}>
            {selectedSeatCodes.length > 0 ? selectedSeatCodes.join(', ') : '좌석을 선택해주세요.'}
          </dd>
        </div>

        <div className='flex items-center justify-between'>
          <dt className='typo-c3-m text-gray-1000'>인원</dt>
          <dd className='flex items-center gap-2 typo-c3-m text-gray-800'>
            {formatTicketCounts(headcount)}
            <button
              type='button'
              onClick={onHeadcountChange}
              className='rounded-full bg-linear-to-r from-primary to-[#d87aff] px-3 py-1 typo-c3-m text-gray-000'>
              인원변경
            </button>
          </dd>
        </div>
      </dl>

      {/* 좌석을 다 고르면 아래 영역이 회색 배경으로 바뀌고 결제금액·결제 버튼이 나타난다 */}
      <div
        className={cn(
          'flex flex-col gap-3 px-5.5',
          isComplete ? 'bg-gray-100 pt-3 pb-5' : 'pt-0 pb-4',
        )}>
        {isComplete && (
          <div className='flex items-center justify-between'>
            <span className='typo-c3-m text-gray-1000'>결제금액</span>
            <p className='flex items-baseline text-gray-1000'>
              <span className='typo-c2-m'>총</span>
              <span className='typo-t1-b'>{totalPrice.toLocaleString()}</span>
              <span className='typo-c2-m'>원</span>
            </p>
          </div>
        )}
        <div className='flex flex-col gap-2'>
          <img
            src={tossBanner}
            alt='토스페이 생애 첫 결제, 1만원 이상 결제 시 2천원 할인'
            className='w-full'
          />

          {isComplete && (
            <Button variant='cta' onClick={onPay}>
              결제하기
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
