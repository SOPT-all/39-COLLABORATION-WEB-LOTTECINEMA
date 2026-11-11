import type { ButtonHTMLAttributes } from 'react'

import { cn } from '@shared/utils/cn'

type DateItemDayType = 'weekday' | 'saturday' | 'sunday'

interface DateItemProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'children' | 'type' | 'aria-pressed'
> {
  day: number
  dayLabel: string
  dayType: DateItemDayType
  selected?: boolean
}

const dayTypeTextColor: Record<DateItemDayType, string> = {
  weekday: 'text-gray-1000',
  saturday: 'text-date-saturday',
  sunday: 'text-date-sunday',
}

export const DateItem = ({
  day,
  dayLabel,
  dayType,
  selected = false,
  className,
  ...buttonProps
}: DateItemProps) => {
  return (
    <button
      type='button'
      aria-pressed={selected}
      className={cn(
        'rounded-[7px] px-[3px] py-[9px]',
        selected ? 'bg-gray-900 text-gray-000' : dayTypeTextColor[dayType],
        className,
      )}
      {...buttonProps}>
      <span className='flex w-[31px] flex-col items-center gap-[5px] pb-px'>
        <span className='typo-b1-b'>{day}</span>
        <span className='typo-c1-r'>{dayLabel}</span>
      </span>
    </button>
  )
}
