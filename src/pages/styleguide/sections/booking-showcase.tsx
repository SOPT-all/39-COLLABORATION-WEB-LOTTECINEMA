import { useState } from 'react'

import { DateItem } from '@pages/booking/components/date-item/date-item'
import { DateSelector } from '@pages/booking/components/date-selector/date-selector'
import { MovieBannerSection } from '@pages/booking/components/movie-banner-section/movie-banner-section'
import { MovieBanner } from '@pages/booking/components/movie-banner/movie-banner'
import { MovieDropdown } from '@pages/booking/components/movie-dropdown/movie-dropdown'
import { RegionItem } from '@pages/booking/components/region-item/region-item'
import { ShowtimeBottomSheet } from '@pages/booking/components/showtime-bottom-sheet/showtime-bottom-sheet'
import { ShowtimeCard } from '@pages/booking/components/showtime-card/showtime-card'
import { ShowtimeSection } from '@pages/booking/components/showtime-section/showtime-section'
import { TheaterDropdown } from '@pages/booking/components/theater-dropdown/theater-dropdown'
import { TheaterFilterBar } from '@pages/booking/components/theater-filter-bar/theater-filter-bar'
import { TheaterItem } from '@pages/booking/components/theater-item/theater-item'
import { TheaterSelectSection } from '@pages/booking/components/theater-select-section/theater-select-section'
import { TheaterSelector } from '@pages/booking/components/theater-selector/theater-selector'
import { TheaterTypeTabs } from '@pages/booking/components/theater-type-tabs/theater-type-tabs'
import type { BookingDate } from '@pages/booking/types/date'
import type { Showtime, ShowtimeGroupData } from '@pages/booking/types/showtime'

import { Button } from '@shared/components/button/button'
import type { RegionResponse } from '@shared/types/__generated__/data-contracts'

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
    totalSeatCount: 91,
    availableSeatCount: 90,
  },
]

const showtimeScheduleDates: BookingDate[] = [
  { date: '2026-10-27', day: 27, dayLabel: '오늘', dayType: 'weekday' },
  { date: '2026-10-28', day: 28, dayLabel: '수', dayType: 'weekday' },
  { date: '2026-10-29', day: 29, dayLabel: '목', dayType: 'weekday' },
  { date: '2026-10-30', day: 30, dayLabel: '금', dayType: 'weekday' },
  { date: '2026-10-31', day: 31, dayLabel: '토', dayType: 'saturday' },
  { date: '2026-11-01', day: 1, dayLabel: '일', dayType: 'sunday' },
  { date: '2026-11-02', day: 2, dayLabel: '월', dayType: 'weekday' },
]

const createShowtime = (
  showtimeId: number,
  startTime: string,
  endTime: string,
  screenName: string,
  totalSeatCount: number,
  availableSeatCount: number,
): Showtime => ({
  showtimeId,
  startAt: `2026-10-27T${startTime}:00+09:00`,
  endAt: `2026-10-27T${endTime}:00+09:00`,
  screenName,
  totalSeatCount,
  availableSeatCount,
})

const showtimeScheduleGroups: ShowtimeGroupData[] = [
  {
    key: '2d-dubbed-recliner',
    labels: ['2D', '더빙', '리클라이너'],
    description: '팔과 다리를 쭈~욱 펴고 힐링하면서 영화보면 즐거움이 두배!',
    showtimes: [
      createShowtime(6101, '13:25', '15:14', '1관', 91, 90),
      createShowtime(6102, '15:35', '17:24', '1관', 91, 88),
      createShowtime(6103, '17:45', '19:34', '1관', 91, 89),
      createShowtime(6104, '19:55', '21:44', '1관', 91, 77),
    ],
  },
  {
    key: '2d-subtitled-recliner',
    labels: ['2D', '자막', '리클라이너'],
    description: '팔과 다리를 쭈~욱 펴고 힐링하면서 영화보면 즐거움이 두배!',
    showtimes: [
      createShowtime(6201, '13:55', '15:44', '5관', 79, 72),
      createShowtime(6202, '14:25', '16:14', '4관', 77, 75),
      createShowtime(6203, '16:35', '18:24', '4관', 77, 75),
      createShowtime(6204, '18:45', '20:34', '4관', 77, 67),
      createShowtime(6205, '21:05', '22:54', '4관', 77, 77),
    ],
  },
]

const exampleTheaters = ['가산디지털', '가양', '강동']

const exampleRegions = [
  { name: 'MY 영화관', theaterCount: 1 },
  { name: '서울', theaterCount: 21 },
  { name: '경기/인천', theaterCount: 40 },
]

const theaterDropdownRegions: RegionResponse[] = [
  {
    regionId: 1,
    regionName: '서울',
    cinemas: [
      { cinemaId: 1, cinemaName: '가산디지털', hasShowtimes: true },
      { cinemaId: 2, cinemaName: '가양', hasShowtimes: true },
      { cinemaId: 3, cinemaName: '강동', hasShowtimes: true },
      { cinemaId: 4, cinemaName: '건대입구', hasShowtimes: true },
      { cinemaId: 5, cinemaName: '김포공항', hasShowtimes: true },
      { cinemaId: 6, cinemaName: '노원', hasShowtimes: true },
      { cinemaId: 7, cinemaName: '도곡', hasShowtimes: true },
      { cinemaId: 8, cinemaName: '독산', hasShowtimes: true },
      { cinemaId: 9, cinemaName: '서울대입구', hasShowtimes: true },
      { cinemaId: 10, cinemaName: '수락산', hasShowtimes: true },
      { cinemaId: 11, cinemaName: '수유', hasShowtimes: true },
      { cinemaId: 12, cinemaName: '신대방(구로디지털역)', hasShowtimes: true },
      { cinemaId: 13, cinemaName: '스크롤 확인용 1', hasShowtimes: true },
      { cinemaId: 14, cinemaName: '스크롤 확인용 2', hasShowtimes: true },
      { cinemaId: 15, cinemaName: '스크롤 확인용 3', hasShowtimes: true },
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
  const [selectedScheduleDate, setSelectedScheduleDate] = useState(showtimeScheduleDates[0].date)
  const [selectedShowtimeId, setSelectedShowtimeId] = useState<number | null>(null)
  const [clickedTheater, setClickedTheater] = useState<string | null>(null)
  const [selectedRegion, setSelectedRegion] = useState(exampleRegions[0].name)
  const [selectedRegionId, setSelectedRegionId] = useState(theaterDropdownRegions[0].regionId)
  const [clickedCinemaId, setClickedCinemaId] = useState<number | null>(null)
  const [sheetShowtimeId, setSheetShowtimeId] = useState<number | null>(null)

  return (
    <ShowcaseSection title='Booking'>
      {/* TheaterDropdown */}
      <div className='col-span-2 min-h-[360px]'>
        <TheaterDropdown regions={theaterDropdownRegions} />
        <p className='mt-3 typo-c2-m text-gray-700'>
          지역과 영화관 목록을 둘러보는 UI 예시입니다. 영화관 선택은 조회 조건을 변경하지 않습니다.
        </p>
      </div>

      {/* TheaterFilterBar */}
      <div className='col-span-2 min-h-[360px]'>
        <div className='w-[375px] border border-gray-200 bg-gray-000'>
          <TheaterFilterBar selectedTheaterName='용산' regions={theaterDropdownRegions} />
        </div>
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

      {/* ShowtimeSection: 이미지와 같은 예매 시간표 화면 */}
      <div className='col-span-2 w-[375px] overflow-hidden border border-gray-200 bg-gray-000'>
        <ShowtimeSection
          cinemaName='용산'
          groups={showtimeScheduleGroups}
          selectedDate={selectedScheduleDate}
          onDateSelect={setSelectedScheduleDate}
          onShowtimeSelect={setSelectedShowtimeId}
          dates={showtimeScheduleDates}
          regions={theaterDropdownRegions}
        />
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

      {/* TheaterItem: 영화관을 누르면 부모에게 클릭이 전달됨 */}
      <div className='col-span-2 flex flex-col gap-3'>
        <div className='w-[230px] border-t border-gray-200'>
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

      {/* RegionItem: 지역을 누르면 선택 상태가 바뀜 */}
      <div className='col-span-2 flex flex-col gap-3'>
        <div className='w-[145px] border-t border-gray-200'>
          {exampleRegions.map(({ name, theaterCount }) => (
            <RegionItem
              key={name}
              name={name}
              theaterCount={theaterCount}
              isSelected={selectedRegion === name}
              onClick={() => setSelectedRegion(name)}
            />
          ))}
        </div>
        <p className='m-0 typo-c2-m text-gray-600'>선택된 지역: {selectedRegion}</p>
      </div>

      {/* MovieDropdown: 영화가 4개 이상이면 목록 스크롤 */}
      <div className='col-span-2 flex flex-col items-center gap-3'>
        <div className='flex h-[188px] w-[375px] items-start justify-end bg-gray-700 pt-4 pr-5'>
          <MovieDropdown movies={exampleMovies} />
        </div>
        <span className='text-center typo-c1-r text-gray-700'>MovieDropdown</span>
      </div>

      {/* MovieBannerSection: 배너 + 영화 변경 드롭다운 조립 */}
      <div className='col-span-2 flex flex-col items-center gap-3'>
        <div className='w-[375px]'>
          <MovieBannerSection movies={exampleMovies} />
        </div>
        <span className='text-center typo-c1-r text-gray-700'>MovieBannerSection</span>
      </div>

      {/* TheaterSelector: 지역을 고르면 오른쪽 영화관 목록이 바뀜 */}
      <div className='col-span-2 flex flex-col gap-3'>
        <div className='h-[574px] w-[375px]'>
          <TheaterSelector
            regions={theaterDropdownRegions}
            selectedRegionId={selectedRegionId}
            onRegionSelect={setSelectedRegionId}
            onTheaterSelect={setClickedCinemaId}
          />
        </div>
        <p className='m-0 min-h-4 typo-c2-m text-gray-600' aria-live='polite'>
          {clickedCinemaId === null
            ? '영화관을 눌러 클릭 전달을 확인해보세요.'
            : `누른 영화관 id: ${clickedCinemaId}`}
        </p>
      </div>

      {/* TheaterSelectSection: MSW mock 데이터로 영화관 조회 연결 확인 */}
      <div className='col-span-2 flex flex-col gap-3'>
        <h4 className='m-0 typo-c2-m text-gray-1000'>TheaterSelectSection (width: 375px)</h4>
        <div className='h-[574px] w-[375px]'>
          <TheaterSelectSection
            regions={theaterDropdownRegions}
            myCinemas={[{ cinemaId: 1, cinemaName: '가산디지털', hasShowtimes: true }]}
            isLoading={false}
            hasError={false}
            onCinemaSelect={setClickedCinemaId}
          />
        </div>
      </div>

      {/* ShowtimeBottomSheet: MSW mock 데이터로 회차 1 상영 정보 확인 */}
      <div className='col-span-2 flex flex-col gap-3'>
        <h4 className='m-0 typo-c2-m text-gray-1000'>ShowtimeBottomSheet</h4>
        <div>
          <Button variant='dark' size='small' onClick={() => setSheetShowtimeId(1)}>
            회차 1 상영 정보 열기
          </Button>
        </div>
        <ShowtimeBottomSheet
          showtimeId={sheetShowtimeId}
          onClose={() => setSheetShowtimeId(null)}
        />
      </div>
    </ShowcaseSection>
  )
}
