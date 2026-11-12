import type { BookingDate } from '../../types/date'
import { DateItem } from '../date-item/date-item'

interface DateSelectorProps {
  dates: BookingDate[]
  selectedDate: string
  onDateSelect: (date: string) => void
}

export const DateSelector = ({ dates, selectedDate, onDateSelect }: DateSelectorProps) => (
  <div
    role='group'
    aria-label='관람 날짜 선택'
    className='flex items-center justify-between px-5 pt-3 pb-2'>
    {dates.map(({ date, ...dateItemProps }) => (
      <DateItem
        key={date}
        {...dateItemProps}
        selected={date === selectedDate}
        onClick={() => onDateSelect(date)}
      />
    ))}
  </div>
)
