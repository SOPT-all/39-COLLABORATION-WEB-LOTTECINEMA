import type { ButtonHTMLAttributes } from 'react'

import { cn } from '@shared/utils/cn'

interface DiscountButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'children' | 'type' | 'aria-pressed'
> {
  label: string
  count?: number
  selected?: boolean
}

export const DiscountButton = ({
  label,
  count,
  selected = false,
  className,
  ...buttonProps
}: DiscountButtonProps) => {
  return (
    <button
      type='button'
      aria-pressed={selected}
      className={cn(
        'relative flex items-center justify-center rounded-sm border border-gray-100 bg-gray-000 px-2.5 py-[13px] typo-c2-m text-gray-1000',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current',
        selected && 'border-gray-1000',
        className,
      )}
      {...buttonProps}>
      <span className='w-[53.75px] text-center'>{label}</span>

      {count !== undefined && (
        <span className='absolute top-1 right-[4.75px] flex size-[15px] items-center justify-center rounded-full bg-gray-1000 typo-c1-r text-gray-000'>
          {count}
        </span>
      )}
    </button>
  )
}
