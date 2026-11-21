import chiikawaPoster from '@pages/payment/assets/chiikawa-poster.png'

import { BadgeAgeAllIcon } from '@shared/icons'
import type { Headcount } from '@shared/types/headcount'
import { cn } from '@shared/utils/cn'
import { formatTicketCounts } from '@shared/utils/format-ticket-counts'

interface BookingSummaryCardProps {
  headcount: Headcount
  className?: string
}

export const BookingSummaryCard = ({ headcount, className }: BookingSummaryCardProps) => {
  return (
    <section
      aria-label='예매 정보'
      className={cn('flex items-start bg-gray-000 px-4.5 py-4', className)}>
      <div className='relative h-[82px] w-[76px] shrink-0'>
        <img src={chiikawaPoster} alt='' className='h-full w-[57px] rounded-sm object-cover' />
        <BadgeAgeAllIcon
          role='img'
          aria-label='전체 관람가'
          className='absolute top-0 right-3.5 size-[15px]'
        />
      </div>

      <div className='flex min-w-0 flex-col gap-2'>
        <h3 className='truncate typo-b2-b text-gray-1000'>
          극장판 치이카와: 인어 섬의 비밀 (2D더빙)
        </h3>

        <div className='flex flex-col gap-1 typo-c2-m text-gray-600'>
          <p>2026-10-27 (화) 14:25 ~ 16:14</p>
          <p>용산 4관, 리클라이너 - 자막</p>
        </div>

        <p className='typo-c3-m text-gray-1000'>{formatTicketCounts(headcount)}</p>
      </div>
    </section>
  )
}
