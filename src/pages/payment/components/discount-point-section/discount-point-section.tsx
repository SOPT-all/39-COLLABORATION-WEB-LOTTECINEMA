import { cn } from '@shared/utils/cn'

import type { DiscountOption } from '../../types/discount-option'
import { DiscountButton } from '../discount-button/discount-button'
import { LPointButtonGroup } from '../lpoint-button-group/lpoint-button-group'
import { ResetButton } from '../reset-button/reset-button'

interface DiscountPointSectionProps {
  options: DiscountOption[]
  selectedDiscountId: string | null
  isResetDisabled: boolean
  /* 선택 시 해당 id, 이미 선택된 항목을 다시 누르면 null */
  onDiscountChange: (discountId: string | null) => void
  onReset: () => void
  className?: string
}

export const DiscountPointSection = ({
  options,
  selectedDiscountId,
  isResetDisabled,
  onDiscountChange,
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

      <LPointButtonGroup />

      <div role='group' aria-label='할인 수단' className='flex w-full gap-3'>
        {options.map(({ id, label, count, disabled }) => (
          <DiscountButton
            key={id}
            label={label}
            count={count}
            disabled={disabled}
            selected={selectedDiscountId === id}
            onClick={() => onDiscountChange(selectedDiscountId === id ? null : id)}
          />
        ))}
      </div>
    </section>
  )
}
