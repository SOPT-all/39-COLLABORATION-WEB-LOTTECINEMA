import { useState } from 'react'

import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router'

import { Header } from '@shared/components/header/header'
import type { ShowtimeListResponse } from '@shared/types/__generated__/data-contracts'

import { movieCinemasQueryOptions } from './api/movie-cinemas-query'
import { showtimesQueryOptions } from './api/showtimes-query'
import { MovieBannerSection } from './components/movie-banner-section/movie-banner-section'
import { ShowtimeBottomSheet } from './components/showtime-bottom-sheet/showtime-bottom-sheet'
import { ShowtimeSection } from './components/showtime-section/showtime-section'
import { TheaterSelectSection } from './components/theater-select-section/theater-select-section'
import { BOOKING_DATES } from './constants/booking-dates'
import { groupShowtimes } from './utils/group-showtimes'

const selectShowtimeGroups = (data: ShowtimeListResponse) => groupShowtimes(data.showtimes)

export const BookingPage = () => {
  const [searchParams] = useSearchParams()
  const movieId = Number(searchParams.get('movieId'))
  const isValidMovieId = Number.isInteger(movieId) && movieId > 0

  const [selectedCinemaId, setSelectedCinemaId] = useState<number | null>(null)
  const [selectedShowtimeId, setSelectedShowtimeId] = useState<number | null>(null)
  const [selectedDate, setSelectedDate] = useState(BOOKING_DATES[0].date)

  const {
    data: cinemaData,
    isPending: isCinemaPending,
    isError: isCinemaError,
  } = useQuery({
    ...movieCinemasQueryOptions(movieId),
    enabled: isValidMovieId,
  })

  // 선택한 ID에 해당하는 영화관 정보를 찾아 아래 화면과 조회에 사용
  const selectedCinema = cinemaData?.regions
    .flatMap(({ cinemas }) => cinemas)
    .find(({ cinemaId }) => cinemaId === selectedCinemaId)

  const {
    data: showtimesData,
    isPending: isShowtimesPending,
    isError: isShowtimesError,
  } = useQuery({
    ...showtimesQueryOptions({
      movieId,
      cinemaId: selectedCinemaId ?? 0,
      date: selectedDate,
    }),
    select: selectShowtimeGroups,
    enabled: isValidMovieId && selectedCinema !== undefined,
  })

  // 영화관이나 날짜가 바뀌면 기존 회차 선택 초기화
  const handleCinemaSelect = (cinemaId: number) => {
    setSelectedCinemaId(cinemaId)
    setSelectedShowtimeId(null)
  }

  const handleDateSelect = (date: string) => {
    setSelectedDate(date)
    setSelectedShowtimeId(null)
  }

  const renderTheaterContent = () => {
    if (!isValidMovieId) return <p>영화 정보가 없어요. 영화를 선택한 뒤 다시 시도해 주세요.</p>
    if (isCinemaPending) return <p>영화관 정보를 불러오는 중이에요..</p>
    if (isCinemaError || !cinemaData) return <p>영화관 정보를 불러오지 못했어요..</p>

    return (
      <TheaterSelectSection
        regions={cinemaData.regions}
        myCinemas={cinemaData.myCinemas}
        onCinemaSelect={handleCinemaSelect}
      />
    )
  }

  const content = selectedCinema ? (
    <ShowtimeSection
      cinemaName={selectedCinema.cinemaName}
      groups={showtimesData ?? []}
      isLoading={isShowtimesPending}
      hasError={isShowtimesError}
      selectedDate={selectedDate}
      onDateSelect={handleDateSelect}
      onShowtimeSelect={setSelectedShowtimeId}
      dates={BOOKING_DATES}
      regions={cinemaData?.regions ?? []}
    />
  ) : (
    renderTheaterContent()
  )

  return (
    <div className='flex h-dvh flex-col bg-gray-000'>
      <Header variant='sub' title='영화별 예매' />

      <main aria-label='영화별 예매' className='flex min-h-0 flex-1 flex-col'>
        {/* TODO: 영화 목록 조회 후 MovieBannerSection에 전달 */}
        <MovieBannerSection movies={[]} />

        <div className='min-h-0 flex-1'>{content}</div>
      </main>

      <ShowtimeBottomSheet
        showtimeId={selectedShowtimeId}
        onClose={() => setSelectedShowtimeId(null)}
      />
    </div>
  )
}
