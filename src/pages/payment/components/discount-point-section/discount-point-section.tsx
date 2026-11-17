import { cn } from '@shared/utils/cn'

import type { DiscountOption } from '../../types/discount-option'
import { DiscountButton } from '../discount-button/discount-button'
import { LPointButtonGroup } from '../lpoint-button-group/lpoint-button-group'
import { ResetButton } from '../reset-button/reset-button'

interface DiscountPointSectionProps {
  options: DiscountOption[]
  isResetDisabled: boolean
  onLPointLookup: () => void
  onReset: () => void
  className?: string
}

export const DiscountPointSection = ({
  options,
  isResetDisabled,
  onLPointLookup,
  onReset,
  className,
}: DiscountPointSectionProps) => {
  return (
    <section
      aria-labelledby='discount-point-heading'
      className={cn('flex w-full flex-col gap-3 px-4.5 pt-5 pb-3', className)}>
      <div className='flex w-full items-center justify-between'>
        <h2 id='discount-point-heading' className='typo-b2-m text-gray-1000'>
          할인/포인트
        </h2>
        <ResetButton disabled={isResetDisabled} onClick={onReset} />
      </div>

      <LPointButtonGroup onLookupClick={onLPointLookup} />

      <div role='group' aria-label='할인 수단' className='flex w-full gap-3'>
        {options.map(({ id, label, count }) => (
          <DiscountButton key={id} label={label} count={count} disabled />
        ))}
      </div>
    </section>
  )
}
