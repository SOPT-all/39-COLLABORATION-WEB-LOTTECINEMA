import type { ComponentProps } from 'react'

import { cn } from '@shared/utils/cn'

type PayButtonProps = ComponentProps<'button'>

export const PayButton = ({ className, ...props }: PayButtonProps) => {
  return (
    <button
      type='button'
      className={cn(
        'inline-flex h-16 items-center justify-center bg-primary px-[42px] typo-b2-m text-gray-000',
        className,
      )}
      {...props}>
      결제하기
    </button>
  )
}
