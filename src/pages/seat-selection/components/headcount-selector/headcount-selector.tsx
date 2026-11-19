import { HEADCOUNT_LABELS, HEADCOUNT_TYPES, MAX_TOTAL_HEADCOUNT } from '@shared/constants/headcount'
import type { Headcount } from '@shared/types/headcount'
import { cn } from '@shared/utils/cn'
import { formatTicketCounts } from '@shared/utils/format-ticket-counts'

import { getTotalHeadcount } from '../../utils/get-total-headcount'
import { CountStepper } from '../count-stepper/count-stepper'

interface HeadcountSelectorProps {
  value: Headcount
  onChange: (value: Headcount) => void
  maxTotal?: number
  className?: string
}

export const HeadcountSelector = ({
  value,
  onChange,
  maxTotal = MAX_TOTAL_HEADCOUNT,
  className,
}: HeadcountSelectorProps) => {
  const total = getTotalHeadcount(value)
  const remaining = maxTotal - total
  const summary = formatTicketCounts(value)

  return (
    <div className={cn('flex flex-col gap-3 px-5.5 pt-4', className)}>
      <div className='flex flex-row gap-1'>
        <span className='typo-b1-m text-gray-1000'>인원선택</span>
        <span className='self-end typo-c2-m text-gray-700'>
          {total > 0 ? summary : `인원은 최대 ${maxTotal}명까지 선택 가능합니다.`}
        </span>
      </div>

      <div className='flex flex-col gap-3'>
        {HEADCOUNT_TYPES.map((type) => (
          <CountStepper
            key={type}
            label={HEADCOUNT_LABELS[type]}
            count={value[type]}
            max={value[type] + remaining}
            onChange={(next) => onChange({ ...value, [type]: next })} // 한 키만 덮어쓰기
          />
        ))}
      </div>
    </div>
  )
}
