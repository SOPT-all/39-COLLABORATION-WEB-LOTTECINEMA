import { useState } from 'react'

import { DateItem } from '@pages/booking/components/date-item/date-item'
import { DateSelector } from '@pages/booking/components/date-selector/date-selector'
import { MovieBanner } from '@pages/booking/components/movie-banner/movie-banner'
import { MovieDropdown } from '@pages/booking/components/movie-dropdown/movie-dropdown'
import { ShowtimeCard } from '@pages/booking/components/showtime-card/showtime-card'
import { TheaterDropdown } from '@pages/booking/components/theater-dropdown/theater-dropdown'
import { TheaterTypeTabs } from '@pages/booking/components/theater-type-tabs/theater-type-tabs'
import type { BookingDate } from '@pages/booking/types/date'
import type { Showtime } from '@pages/booking/types/showtime'
import type { BookingRegion } from '@pages/booking/types/theater'

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
  { movieId: 7, title: '아주아주아주아주 긴~ 영화 제목이 들어왔을 때 말줄임 테스트..' },
]

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

const theaterDropdownRegions: BookingRegion[] = [
  {
    regionId: 1,
    regionName: '서울',
    cinemas: [
      { cinemaId: 1, cinemaName: '가산디지털' },
      { cinemaId: 2, cinemaName: '가양' },
      { cinemaId: 3, cinemaName: '강동' },
      { cinemaId: 4, cinemaName: '건대입구' },
      { cinemaId: 5, cinemaName: '김포공항' },
      { cinemaId: 6, cinemaName: '노원' },
      { cinemaId: 7, cinemaName: '도곡' },
      { cinemaId: 8, cinemaName: '독산' },
      { cinemaId: 9, cinemaName: '서울대입구' },
    ],
  },
  { regionId: 2, regionName: '경기/인천', cinemas: [] },
  { regionId: 3, regionName: '충청/대전', cinemas: [] },
  { regionId: 4, regionName: '전라/광주', cinemas: [] },
  { regionId: 5, regionName: '경북/대구', cinemas: [] },
  { regionId: 6, regionName: '경남/부산/울산', cinemas: [] },
  { regionId: 7, regionName: '강원', cinemas: [] },
  { regionId: 8, regionName: '제주', cinemas: [] },
]

export const BookingShowcase = () => {
  const [dates] = useState(createDateOptions)
  const [selectedDate, setSelectedDate] = useState(dates[0].date)
  const [selectedShowtimeId, setSelectedShowtimeId] = useState<number | null>(null)

  return (
    <ShowcaseSection title='Booking'>
      {/* TheaterDropdown */}
      <div className='col-span-2 min-h-[360px]'>
        <TheaterDropdown regions={theaterDropdownRegions} />
        <p className='mt-3 typo-c2-m text-gray-700'>
          지역과 영화관 목록을 둘러보는 UI 예시입니다. 영화관 선택은 조회 조건을 변경하지 않습니다.
        </p>
      </div>

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

      {/* MovieDropdown: 영화가 4개 이상이면 목록 스크롤 */}
      <div className='col-span-2 flex flex-col items-center gap-3'>
        <div className='flex h-[188px] w-[375px] items-start justify-end bg-gray-700 pt-4 pr-5'>
          <MovieDropdown movies={exampleMovies} />
        </div>
        <span className='text-center typo-c1-r text-gray-700'>MovieDropdown</span>
      </div>
    </ShowcaseSection>
  )
}
