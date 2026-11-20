import { useState } from 'react'

import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router'

import { Header } from '@shared/components/header/header'

import { movieCinemasQueryOptions } from './api/movie-cinemas-query'
import { MovieBannerSection } from './components/movie-banner-section/movie-banner-section'
import { TheaterSelectSection } from './components/theater-select-section/theater-select-section'

export const BookingPage = () => {
  const [searchParams] = useSearchParams()
  const movieId = Number(searchParams.get('movieId'))
  const [selectedCinemaId, setSelectedCinemaId] = useState<number | null>(null)
  const isValidMovieId = Number.isInteger(movieId) && movieId > 0
  const { data, isPending, isError } = useQuery({
    ...movieCinemasQueryOptions(movieId),
    enabled: isValidMovieId,
  })

  const renderTheaterContent = () => {
    if (!isValidMovieId) return <p>영화 정보가 없어요. 영화를 선택한 뒤 다시 시도해 주세요.</p>
    if (isPending) return <p>영화관 정보를 불러오는 중이에요..</p>
    if (isError || !data) return <p>영화관 정보를 불러오지 못했어요..</p>

    return (
      <TheaterSelectSection
        regions={data.regions}
        myCinemas={data.myCinemas}
        onCinemaSelect={setSelectedCinemaId}
      />
    )
  }

  return (
    <div className='flex h-dvh flex-col bg-gray-000'>
      <Header variant='sub' title='영화별 예매' />

      <main
        aria-label='영화별 예매'
        className='flex min-h-0 flex-1 flex-col'
        data-selected-cinema-id={selectedCinemaId ?? undefined}>
        {/* TODO: 영화 목록 조회 후 MovieBannerSection에 전달 */}
        <MovieBannerSection movies={[]} />

        <div className='min-h-0 flex-1'>{renderTheaterContent()}</div>

        {/* TODO: selectedCinemaId를 기준으로 ShowtimeSection 연결 */}
      </main>
    </div>
  )
}
