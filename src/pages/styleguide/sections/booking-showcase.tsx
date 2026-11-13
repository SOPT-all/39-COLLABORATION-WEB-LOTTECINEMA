import { useState } from 'react'

import { DateItem } from '@pages/booking/components/date-item/date-item'
import { MovieBanner } from '@pages/booking/components/movie-banner/movie-banner'
import { ShowtimeCard } from '@pages/booking/components/showtime-card/showtime-card'
import { TheaterItem } from '@pages/booking/components/theater-item/theater-item'
import { TheaterTypeTabs } from '@pages/booking/components/theater-type-tabs/theater-type-tabs'
import type { Showtime } from '@pages/booking/types/showtime'

import { ShowcaseSection } from './showcase-section'

const dateItemGroups = [
  { label: '평일', day: 27, dayLabel: '오늘', dayType: 'weekday' },
  { label: '토요일', day: 28, dayLabel: '토', dayType: 'saturday' },
  { label: '일요일', day: 1, dayLabel: '일', dayType: 'sunday' },
] as const

const showtimes: Showtime[] = [
  {
    showtimeId: 5001,
    startAt: '2026-11-09T13:25:00+09:00',
    endAt: '2026-11-09T15:14:00+09:00',
    screenName: '1관',
    formatType: '2D',
    languageType: 'DUBBED',
    totalSeatCount: 91,
    reservedSeatCount: 1,
    availableSeatCount: 90,
  },
]

const exampleTheaters = ['가산디지털', '가양', '강동']

export const BookingShowcase = () => {
  const [selectedShowtimeId, setSelectedShowtimeId] = useState<number | null>(null)
  const [clickedTheater, setClickedTheater] = useState<string | null>(null)

  return (
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

      {showtimes.map((showtime) => (
        <ShowtimeCard
          key={showtime.showtimeId}
          showtime={showtime}
          onSelect={setSelectedShowtimeId}
        />
      ))}

      <p className='col-span-2 m-0 min-h-4 typo-c2-m text-gray-600' aria-live='polite'>
        {selectedShowtimeId === null
          ? '상영 시간을 눌러 showtimeId 전달을 확인해보세요.'
          : `선택된 showtimeId: ${selectedShowtimeId}`}
      </p>

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

      {/* TheaterItem: 영화관을 누르면 부모에게 클릭이 전달됨 */}
      <div className='col-span-2 flex flex-col gap-3'>
        <div className='w-[230px]'>
          {exampleTheaters.map((name) => (
            <TheaterItem key={name} name={name} onClick={() => setClickedTheater(name)} />
          ))}
        </div>
        <p className='m-0 min-h-4 typo-c2-m text-gray-600' aria-live='polite'>
          {clickedTheater === null
            ? '영화관을 눌러 클릭 전달을 확인해보세요.'
            : `누른 영화관: ${clickedTheater}`}
        </p>
      </div>
    </ShowcaseSection>
  )
}
