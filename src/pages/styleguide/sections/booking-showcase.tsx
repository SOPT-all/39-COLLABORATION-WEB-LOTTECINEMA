import { useState } from 'react'

import { DateItem } from '@pages/booking/components/date-item/date-item'
import { DateSelector } from '@pages/booking/components/date-selector/date-selector'
import { TheaterTypeTabs } from '@pages/booking/components/theater-type-tabs/theater-type-tabs'
import type { BookingDate } from '@pages/booking/types/date'

import { ShowcaseSection } from './showcase-section'

const dateItemGroups = [
  { label: '평일', day: 27, dayLabel: '오늘', dayType: 'weekday' },
  { label: '토요일', day: 28, dayLabel: '토', dayType: 'saturday' },
  { label: '일요일', day: 1, dayLabel: '일', dayType: 'sunday' },
] as const

const formatDate = (date: Date) => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

const createDateOptions = (): BookingDate[] =>
  Array.from({ length: 7 }, (_, index) => {
    const date = new Date()
    date.setDate(date.getDate() + index)

    const dayOfWeek = date.getDay()

    return {
      date: formatDate(date),
      day: date.getDate(),
      dayLabel:
        index === 0 ? '오늘' : new Intl.DateTimeFormat('ko-KR', { weekday: 'short' }).format(date),
      dayType: dayOfWeek === 0 ? 'sunday' : dayOfWeek === 6 ? 'saturday' : 'weekday',
    }
  })

export const BookingShowcase = () => {
  const [dates] = useState(createDateOptions)
  const [selectedDate, setSelectedDate] = useState(dates[0].date)

  return (
    <ShowcaseSection title='Booking'>
      {/* TheaterTypeTabs */}
      <div className='col-span-2'>
        <TheaterTypeTabs />
        <p className='mt-3 typo-c2-m text-gray-700'>
          선택 상태만 변경됩니다. 실제 영화관 목록 필터링은 동작하지 않습니다.
        </p>
      </div>

      {/* DateSelector */}
      <div className='col-span-2 w-[375px]'>
        <DateSelector dates={dates} selectedDate={selectedDate} onDateSelect={setSelectedDate} />
        <p className='mt-3 typo-c2-m text-gray-700'>선택 날짜: {selectedDate}</p>
      </div>

      {/* DateItem의 기본 상태와 선택 상태 */}
      <div className='col-span-2 grid grid-cols-3 gap-6'>
        {dateItemGroups.map(({ label, ...dateItemProps }) => (
          <div
            key={dateItemProps.dayType}
            role='group'
            aria-label={`${label} 날짜 예시`}
            className='flex gap-3'>
            {[false, true].map((selected) => (
              <div key={String(selected)} className='flex flex-col items-center gap-3'>
                <DateItem {...dateItemProps} selected={selected} />
                <span className='text-center typo-c1-r text-gray-700'>
                  {selected ? 'Selected' : 'Default'}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </ShowcaseSection>
  )
}
