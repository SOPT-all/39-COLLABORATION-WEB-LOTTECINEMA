import { DateItem } from '@pages/booking/components/date-item/date-item'

import { ShowcaseSection } from './showcase-section'

const dateItemGroups = [
  { label: '평일', day: 27, dayLabel: '오늘', dayType: 'weekday' },
  { label: '토요일', day: 28, dayLabel: '토', dayType: 'saturday' },
  { label: '일요일', day: 1, dayLabel: '일', dayType: 'sunday' },
] as const

export const BookingShowcase = () => (
  <ShowcaseSection title='Booking'>
    {/* DateItem의 기본 상태와 선택 상태*/}
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
