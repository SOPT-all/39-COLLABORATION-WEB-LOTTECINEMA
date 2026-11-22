import type { ButtonHTMLAttributes } from 'react'

import type { BookingDate, BookingDateDayType } from '@pages/booking/types/date'

import { cn } from '@shared/utils/cn'

interface DateItemProps
  extends
    Pick<BookingDate, 'day' | 'dayLabel' | 'dayType'>,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'type' | 'aria-pressed'> {
  selected?: boolean
}

const dayTypeTextColor: Record<BookingDateDayType, string> = {
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
      {...buttonProps}
      type='button'
      aria-pressed={selected}
      className={cn(
        'rounded-[7px] px-[3px] py-[9px]',
        selected ? 'bg-gray-900 text-gray-000' : dayTypeTextColor[dayType],
        className,
      )}>
      <span className='flex w-[31px] flex-col items-center gap-[5px] pb-px'>
        <span className='typo-b1-b'>{day}</span>
        <span className='typo-c1-r'>{dayLabel}</span>
      </span>
    </button>
  )
}
