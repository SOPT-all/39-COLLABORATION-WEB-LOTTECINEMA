import { cn } from '@shared/utils/cn'

import type { Headcount, HeadcountType } from '../../types/headcount'
import { formatTicketCounts } from '../../utils/format-ticket-counts'
import { CountStepper } from '../count-stepper/count-stepper'

const HEADCOUNT_OPTIONS: { type: HeadcountType; label: string }[] = [
  { type: 'adult', label: '성인' },
  { type: 'teen', label: '청소년' },
  { type: 'senior', label: '경로' },
  { type: 'disabled', label: '장애인' },
]
const MAX_TOTAL_HEADCOUNT = 8

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
  const total = Object.values(value).reduce((sum, count) => sum + count, 0)
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
        {HEADCOUNT_OPTIONS.map(({ type, label }) => (
          <CountStepper
            key={type}
            label={label}
            count={value[type]}
            max={value[type] + remaining}
            onChange={(next) => onChange({ ...value, [type]: next })} // 한 키만 덮어쓰기
          />
        ))}
      </div>
    </div>
  )
}
