import type { ReactNode } from 'react'

import chiikawaBanner from '@pages/booking/assets/chiikawa-banner.png'

import { BadgeAgeAllIcon } from '@shared/icons'
import { cn } from '@shared/utils/cn'

interface MovieBannerProps {
  action?: ReactNode
  className?: string
}

export const MovieBanner = ({ action, className }: MovieBannerProps) => {
  return (
    <section className={cn('relative h-[188px] w-full overflow-hidden', className)}>
      <img src={chiikawaBanner} alt='' className='absolute inset-0 size-full object-cover' />
      <div aria-hidden='true' className='absolute inset-0 bg-gray-1000/60' />

      {action && <div className='absolute top-4 right-5'>{action}</div>}

      <div className='absolute bottom-5 left-5 flex w-[285px] flex-col gap-1'>
        <p className='flex items-center gap-2 typo-c3-m text-gray-200'>
          <span>애니메이션</span>
          <span aria-hidden='true' className='h-3 w-px bg-gray-600' />
          <span>1시간 39분</span>
        </p>
        <div className='flex items-center gap-2'>
          <h2 className='typo-t2-b text-gray-000'>극장판 치이카와: 인어 섬의 비밀</h2>
          <BadgeAgeAllIcon role='img' aria-label='전체 관람가' className='size-[21px] shrink-0' />
        </div>
      </div>
    </section>
  )
}
