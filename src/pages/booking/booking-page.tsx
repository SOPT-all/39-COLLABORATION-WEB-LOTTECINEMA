import { useSearchParams } from 'react-router'

import { Header } from '@shared/components/header/header'

import { MovieBannerSection } from './components/movie-banner-section/movie-banner-section'
import { ShowtimeBottomSheet } from './components/showtime-bottom-sheet/showtime-bottom-sheet'
import { ShowtimeSection } from './components/showtime-section/showtime-section'
import { TheaterSelectSection } from './components/theater-select-section/theater-select-section'
import { useCinemaSelection } from './hooks/use-cinema-selection'
import { useShowtimes } from './hooks/use-showtimes'

export const BookingPage = () => {
  const [searchParams] = useSearchParams()
  const movieId = Number(searchParams.get('movieId'))
  const isValidMovieId = Number.isInteger(movieId) && movieId > 0

  const {
    cinemaData,
    isCinemaPending,
    isCinemaError,
    selectedCinemaId,
    selectedCinema,
    selectCinema,
  } = useCinemaSelection({ movieId, enabled: isValidMovieId })

  const {
    selectedDate,
    selectedShowtimeId,
    showtimesData,
    isShowtimesPending,
    isShowtimesError,
    dates,
    handleDateSelect,
    handleShowtimeSelect,
    clearSelectedShowtime,
  } = useShowtimes({
    movieId,
    cinemaId: selectedCinemaId,
    enabled: isValidMovieId && selectedCinema !== undefined,
  })

  const handleCinemaSelect = (cinemaId: number) => {
    selectCinema(cinemaId)
    clearSelectedShowtime()
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
      onShowtimeSelect={handleShowtimeSelect}
      dates={dates}
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

      <ShowtimeBottomSheet showtimeId={selectedShowtimeId} onClose={clearSelectedShowtime} />
    </div>
  )
}
