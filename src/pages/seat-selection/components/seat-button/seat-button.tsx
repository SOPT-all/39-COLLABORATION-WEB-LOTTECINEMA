import type { ButtonHTMLAttributes } from 'react'

import { cn } from '@shared/utils/cn'

import type { SeatStatus } from '../../types/seat'

interface SeatButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'children' | 'type'
> {
  label: string
  status: SeatStatus
}

const seatStatusStyle: Record<SeatStatus, string> = {
  default: 'bg-seat-default',
  completed:
    'relative overflow-hidden bg-seat-default after:absolute after:inset-0 after:bg-gray-1000/50',
  selected: 'bg-primary',
  disabled:
    'bg-gray-800 bg-[linear-gradient(to_top_left,transparent_calc(50%-0.5px),var(--color-gray-900)_50%,transparent_calc(50%+0.5px))]',
  accessible: 'bg-seat-available',
}

export const SeatButton = ({ label, status, className, ...buttonProps }: SeatButtonProps) => {
  // completed, disabled 상태에서는 숨김
  const isLabelHidden = status === 'completed' || status === 'disabled'

  return (
    <button
      type='button'
      className={cn(
        // gap: 피그마 2px(선 중심 기준) - 선 두께 절반 0.5px
        'flex h-[22px] w-[28px] flex-col items-center justify-center gap-[1.5px] rounded-t-lg rounded-br-xs typo-c1-r text-gray-000',
        seatStatusStyle[status],
        className,
      )}
      {...buttonProps}>
      <span className={cn('h-px w-[9px] bg-gray-000', status === 'disabled' && 'invisible')} />
      <span className={cn(isLabelHidden && 'invisible')}>{label}</span>
    </button>
  )
}
