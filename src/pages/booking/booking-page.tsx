import { useState } from 'react'

import { Header } from '@shared/components/header/header'
import { bookingCinemaData, bookingMovieOptions } from '@shared/mocks/data/booking-cinemas'
import { bookingShowtimes } from '@shared/mocks/data/booking-showtimes'

import { MovieBannerSection } from './components/movie-banner-section/movie-banner-section'
import { ShowtimeSchedule } from './components/showtime-schedule/showtime-schedule'
import { TheaterSelector } from './components/theater-selector/theater-selector'
import { MY_CINEMA_REGION_ID } from './types/theater'

export const BookingPage = () => {
  const [selectedRegionId, setSelectedRegionId] = useState(MY_CINEMA_REGION_ID)
  const [selectedCinemaId, setSelectedCinemaId] = useState<number | null>(
    bookingCinemaData.myCinemas[0]?.cinemaId ?? null,
  )
  const cinemas = [
    ...bookingCinemaData.myCinemas,
    ...bookingCinemaData.regions.flatMap(({ cinemas: regionCinemas }) => regionCinemas),
  ]
  const selectedCinema = cinemas.find(({ cinemaId }) => cinemaId === selectedCinemaId)

  const handleRegionSelect = (regionId: number) => {
    setSelectedRegionId(regionId)
    setSelectedCinemaId(
      regionId === MY_CINEMA_REGION_ID ? (bookingCinemaData.myCinemas[0]?.cinemaId ?? null) : null,
    )
  }

  const handleTheaterSelect = (cinemaId: number) => {
    setSelectedCinemaId(cinemaId)
  }

  return (
    <div className='flex h-dvh min-h-0 flex-col bg-gray-000'>
      <Header variant='sub' title='영화별 예매' className='h-[50px] shrink-0' />

      <MovieBannerSection movies={bookingMovieOptions} />

      <main className='min-h-0 flex-1'>
        {selectedCinema?.hasShowtimes ? (
          <ShowtimeSchedule
            regions={bookingCinemaData.regions}
            selectedTheaterName={selectedCinema.cinemaName}
            showtimes={bookingShowtimes}
            onTheaterSelect={handleTheaterSelect}
          />
        ) : (
          <TheaterSelector
            myCinemas={bookingCinemaData.myCinemas}
            regions={bookingCinemaData.regions}
            selectedRegionId={selectedRegionId}
            selectedCinemaId={selectedCinemaId}
            onRegionSelect={handleRegionSelect}
            onTheaterSelect={handleTheaterSelect}
          />
        )}
      </main>
    </div>
  )
}
