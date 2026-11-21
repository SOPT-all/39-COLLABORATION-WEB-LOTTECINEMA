import { useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router'

import { ROUTE_PATH } from '@app/router/path'

import { Header } from '@shared/components/header/header'

import { moviesQueryOptions } from './api/movies-query'
import homeBottom from './assets/home-bottom.jpg'
import homeGoods from './assets/home-goods.jpg'
import { BottomNavBar } from './components/bottom-nav-bar/bottom-nav-bar'
import { ExclusiveMovieSection } from './components/exclusive-movie-section/exclusive-movie-section'
import { HeroCarousel } from './components/hero-carousel/hero-carousel'
import { PopularMovieSection } from './components/popular-movie-section/popular-movie-section'
import { heroSlides } from './constants/hero-slides'
import { toExclusiveMovies, toPopularMovies } from './utils/movie-mapper'

export const HomePage = () => {
  const navigate = useNavigate()
  const { data, isPending, isError } = useQuery(moviesQueryOptions())

  const handleBookingClick = (movieId: number) => {
    navigate(`${ROUTE_PATH.BOOKING}?movieId=${movieId}`)
  }

  const popularMovies = data ? toPopularMovies(data.popularMovies) : []

  const exclusiveMovies = data
    ? [
        ...toExclusiveMovies(data.lotsiPickMovies, '롯시픽'),
        ...toExclusiveMovies(data.lotsiPlayMovies, '롯시플'),
      ]
    : []

  return (
    <>
      <Header variant='main' className='bg-gray-000' />

      <main className='flex flex-col bg-gray-000'>
        <HeroCarousel slides={heroSlides} />

        {isPending ? (
          <p className='px-5 py-10 text-center typo-b1-m text-gray-700'>
            영화 목록을 불러오는 중입니다...
          </p>
        ) : isError ? (
          <p className='px-5 py-10 text-center typo-b1-m text-gray-700'>
            영화 목록을 불러오지 못했습니다.
          </p>
        ) : (
          <PopularMovieSection movies={popularMovies} onBookingClick={handleBookingClick} />
        )}

        <img src={homeGoods} alt='굿즈 소개' className='block h-auto w-full' />

        {isPending ? (
          <p className='px-5 py-10 text-center typo-b1-m text-gray-700'>
            영화 목록을 불러오는 중입니다...
          </p>
        ) : isError ? (
          <p className='px-5 py-10 text-center typo-b1-m text-gray-700'>
            영화 목록을 불러오지 못했습니다.
          </p>
        ) : (
          <ExclusiveMovieSection movies={exclusiveMovies} />
        )}

        <img src={homeBottom} alt='홈 하단 광고 및 이벤트 안내' className='block h-auto w-full' />
      </main>

      <BottomNavBar />
    </>
  )
}
