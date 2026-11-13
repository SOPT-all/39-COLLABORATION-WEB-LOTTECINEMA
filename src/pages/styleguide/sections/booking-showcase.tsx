import { DateItem } from '@pages/booking/components/date-item/date-item'
import { MovieDropdown } from '@pages/booking/components/movie-dropdown/movie-dropdown'
import { TheaterTypeTabs } from '@pages/booking/components/theater-type-tabs/theater-type-tabs'

import { ShowcaseSection } from './showcase-section'

const dateItemGroups = [
  { label: '평일', day: 27, dayLabel: '오늘', dayType: 'weekday' },
  { label: '토요일', day: 28, dayLabel: '토', dayType: 'saturday' },
  { label: '일요일', day: 1, dayLabel: '일', dayType: 'sunday' },
] as const

const exampleMovies = [
  { movieId: 1, title: '최종면접' },
  { movieId: 2, title: '하트 오브 비스트' },
  { movieId: 3, title: '낮과 밤은 서로에게' },
  { movieId: 4, title: '스크롤 확인용 1' },
  { movieId: 5, title: '스크롤 확인용 2' },
  { movieId: 6, title: '스크롤 확인용 3' },
]

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

    {/* MovieDropdown: 영화가 4개 이상이면 목록 스크롤 */}
    <div className='col-span-2 flex flex-col items-center gap-3'>
      <div className='flex h-[188px] w-[375px] justify-end bg-gray-700 pt-4 pr-5'>
        <MovieDropdown movies={exampleMovies} />
      </div>
      <span className='text-center typo-c1-r text-gray-700'>MovieDropdown</span>
    </div>
  </ShowcaseSection>
)
