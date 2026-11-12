import { DateItem } from '@pages/booking/components/date-item/date-item'
import { MovieBanner } from '@pages/booking/components/movie-banner/movie-banner'
import { TheaterTypeTabs } from '@pages/booking/components/theater-type-tabs/theater-type-tabs'

import { ShowcaseSection } from './showcase-section'

const dateItemGroups = [
  { label: '평일', day: 27, dayLabel: '오늘', dayType: 'weekday' },
  { label: '토요일', day: 28, dayLabel: '토', dayType: 'saturday' },
  { label: '일요일', day: 1, dayLabel: '일', dayType: 'sunday' },
] as const

export const BookingShowcase = () => (
  <ShowcaseSection title='Booking'>
    <div className='col-span-2'>
      <TheaterTypeTabs />
      <p className='mt-3 typo-c2-m text-gray-700'>
        선택 상태만 변경됩니다. 실제 영화관 목록 필터링은 동작하지 않습니다.
      </p>
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

    {/* MovieBanner: action 영역에 영화 변경 드롭다운이 들어갈 자리 */}
    <div className='col-span-2 flex flex-col items-center gap-3'>
      <div className='w-[375px]'>
        <MovieBanner
          action={
            <span className='rounded-md border border-gray-000 px-3 py-2 typo-c2-m text-gray-000'>
              영화 변경
            </span>
          }
        />
      </div>
      <span className='text-center typo-c1-r text-gray-700'>MovieBanner</span>
    </div>
  </ShowcaseSection>
)
