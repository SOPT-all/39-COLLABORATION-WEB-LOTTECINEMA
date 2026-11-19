import { useState } from 'react'

import type { BookingDate } from '@pages/booking/types/date'
import type { Showtime } from '@pages/booking/types/showtime'
import type { BookingRegion } from '@pages/booking/types/theater'

import { DateSelector } from '../date-selector/date-selector'
import { ShowtimeGroup } from '../showtime-group/showtime-group'
import { TheaterFilterBar } from '../theater-filter-bar/theater-filter-bar'
import { TheaterTypeTabs } from '../theater-type-tabs/theater-type-tabs'

const BOOKING_DATES: BookingDate[] = [
  { date: '2026-10-27', day: 27, dayLabel: '오늘', dayType: 'weekday' },
  { date: '2026-10-28', day: 28, dayLabel: '수', dayType: 'weekday' },
  { date: '2026-10-29', day: 29, dayLabel: '목', dayType: 'weekday' },
  { date: '2026-10-30', day: 30, dayLabel: '금', dayType: 'weekday' },
  { date: '2026-10-31', day: 31, dayLabel: '토', dayType: 'saturday' },
  { date: '2026-11-01', day: 1, dayLabel: '일', dayType: 'sunday' },
  { date: '2026-11-02', day: 2, dayLabel: '월', dayType: 'weekday' },
]

const LANGUAGE_GROUPS = [
  { languageType: 'DUBBED', label: '더빙' },
  { languageType: 'SUBTITLED', label: '자막' },
] as const

const RECLINER_DESCRIPTION = '팔다리를 쭉~ 펴고 힐링하면서 영화보면 즐거움이 두배!'

interface ShowtimeScheduleProps {
  regions: BookingRegion[]
  selectedTheaterName: string
  showtimes: Showtime[]
  onTheaterSelect: (cinemaId: number) => void
}

export const ShowtimeSchedule = ({
  regions,
  selectedTheaterName,
  showtimes,
}: ShowtimeScheduleProps) => {
  const [selectedDate, setSelectedDate] = useState(BOOKING_DATES[0].date)
  const dateShowtimes = showtimes.filter(
    (showtime) => showtime.startAt.slice(0, 10) === selectedDate,
  )

  return (
    <div className='h-full [scrollbar-width:none] overflow-y-auto [&::-webkit-scrollbar]:hidden'>
      <TheaterFilterBar selectedTheaterName={selectedTheaterName} regions={regions} />
      <div aria-hidden='true' className='h-[5px] w-full bg-gray-100' />

      <DateSelector
        dates={BOOKING_DATES}
        selectedDate={selectedDate}
        onDateSelect={setSelectedDate}
      />

      <div className='px-5'>
        <TheaterTypeTabs />
      </div>

      {dateShowtimes.length > 0 ? (
        LANGUAGE_GROUPS.map(({ languageType, label }) => {
          const groupShowtimes = dateShowtimes
            .filter((showtime) => showtime.languageType === languageType)
            .sort((a, b) => a.startAt.localeCompare(b.startAt))

          return (
            <ShowtimeGroup
              key={languageType}
              labels={[
                groupShowtimes[0]?.formatType ?? '2D',
                label,
                groupShowtimes[0]?.seatType === 'RECLINER' ? '리클라이너' : '일반석',
              ]}
              description={RECLINER_DESCRIPTION}
              showtimes={groupShowtimes}
              onSelect={() => {}}
            />
          )
        })
      ) : (
        <p className='px-5 pt-5 typo-b1-r text-gray-600'>해당 날짜의 상영 회차가 없습니다.</p>
      )}
    </div>
  )
}
