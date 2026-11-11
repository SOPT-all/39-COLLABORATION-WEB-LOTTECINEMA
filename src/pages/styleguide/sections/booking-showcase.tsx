import { useState } from 'react'

import { ShowtimeCard } from '@pages/booking/components/showtime-card/showtime-card'
import type { Showtime } from '@pages/booking/types/showtime'

import { ShowcaseSection } from './showcase-section'

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

export const BookingShowcase = () => {
  const [selectedShowtimeId, setSelectedShowtimeId] = useState<number | null>(null)

  return (
    <ShowcaseSection title='Booking'>
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
    </ShowcaseSection>
  )
}
