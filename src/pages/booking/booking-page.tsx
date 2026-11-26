import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router'

import { moviesQueryOptions } from '@shared/api/movies-query'
import { Header } from '@shared/components/header/header'

import { MovieBannerSection } from './components/movie-banner-section/movie-banner-section'
import { ShowtimeBottomSheet } from './components/showtime-bottom-sheet/showtime-bottom-sheet'
import { ShowtimeSection } from './components/showtime-section/showtime-section'
import { TheaterSelectSection } from './components/theater-select-section/theater-select-section'
import { useCinemaSelection } from './hooks/use-cinema-selection'
import { useShowtimes } from './hooks/use-showtimes'
import type { Movie } from './types/movie'

export const BookingPage = () => {
  const {
    data: movieListsData,
    isPending: isMovieListPending,
    isError: isMovieListError,
  } = useQuery(moviesQueryOptions())
  const movieList = movieListsData
    ? [
        ...movieListsData.popularMovies,
        ...movieListsData.lotsiPickMovies,
        ...movieListsData.lotsiPlayMovies,
      ]
    : []

  // 영화 목록을 드롭다운용 { movieId, title } 형태로 만들고, movieId 기준으로 중복 제거
  const movies: Movie[] = [
    ...new Map(
      movieList.map(({ movieId, title }) => [movieId, { movieId, title }] as const),
    ).values(),
  ]

  const [searchParams, setSearchParams] = useSearchParams()
  const movieId = Number(searchParams.get('movieId'))
  const isValidMovieId = Number.isInteger(movieId) && movieId > 0
  const cinemaId = Number(searchParams.get('cinemaId'))
  const isValidCinemaId = Number.isInteger(cinemaId) && cinemaId > 0

  const { cinemaData, isCinemaPending, isCinemaError, selectedCinema } = useCinemaSelection({
    movieId,
    cinemaId,
    enabled: isValidMovieId,
  })

  const {
    selectedDate,
    selectedShowtimeId,
    showtimesData,
    isShowtimesPending,
    isShowtimesError,
    dates,
    handleDateSelect,
    handleShowtimeSelect,
  } = useShowtimes({
    movieId,
    cinemaId,
    enabled: isValidMovieId && isValidCinemaId && selectedCinema !== undefined,
  })

  const handleCinemaSelect = (cinemaId: number) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev)
      next.set('cinemaId', String(cinemaId))
      return next
    })
  }

  return (
    <div className='flex h-dvh flex-col bg-gray-000'>
      <Header variant='sub' title='영화별 예매' />

      <main aria-label='영화별 예매' className='flex min-h-0 flex-1 flex-col'>
        <MovieBannerSection
          movies={movies}
          isLoading={isMovieListPending}
          hasError={isMovieListError}
        />

        <div className='min-h-0 flex-1'>
          {!isValidMovieId && <p>영화 정보가 없어요. 영화를 선택한 뒤 다시 시도해 주세요.</p>}

          {isValidMovieId && !selectedCinema && (
            <TheaterSelectSection
              regions={cinemaData?.regions ?? []}
              myCinemas={cinemaData?.myCinemas ?? []}
              isLoading={isCinemaPending}
              hasError={isCinemaError || !cinemaData}
              onCinemaSelect={handleCinemaSelect}
            />
          )}

          {isValidMovieId && selectedCinema && (
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
          )}
        </div>
      </main>

      <ShowtimeBottomSheet
        showtimeId={selectedShowtimeId}
        onClose={() => handleShowtimeSelect(null)}
      />
    </div>
  )
}
