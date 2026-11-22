import type { ComponentProps } from 'react'

import { ResetIcon } from '@shared/icons'
import { cn } from '@shared/utils/cn'

type ResetButtonProps = Omit<ComponentProps<'button'>, 'children'>

export const ResetButton = ({ className, type = 'button', ...props }: ResetButtonProps) => {
  return (
    <button
      type={type}
      className={cn(
        'inline-flex items-center gap-[3px] rounded-full border border-current px-3 py-1.5 typo-c2-m text-gray-900',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current',
        'disabled:text-gray-400',
        className,
      )}
      {...props}>
      <ResetIcon className='size-[9px]' aria-hidden />
      초기화
    </button>
  )
}
