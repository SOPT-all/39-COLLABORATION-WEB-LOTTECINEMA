import { useState } from 'react'

import { useNavigate } from 'react-router'

import { ROUTE_PATH } from '@app/router/path'

import type { PopularMovie } from '../../types/popular-movie'
import { MovieFilterTabs } from '../movie-filter-tabs/movie-filter-tabs'
import { PopularMovieCard } from '../popular-movie-card/popular-movie-card'

const POPULAR_TABS = ['전체', '상영중', '개봉예정'] as const

type PopularTab = (typeof POPULAR_TABS)[number]

interface PopularMovieSectionProps {
  movies: PopularMovie[]
}

export const PopularMovieSection = ({ movies }: PopularMovieSectionProps) => {
  const [selectedTab, setSelectedTab] = useState<PopularTab>('전체')
  const navigate = useNavigate()

  const filteredMovies = movies.filter((movie) => {
    if (selectedTab === '상영중') {
      return movie.releaseDday === undefined
    }

    if (selectedTab === '개봉예정') {
      return movie.releaseDday !== undefined
    }

    return true
  })

  return (
    <section className='flex flex-col pt-5 pb-2 pl-5'>
      <div className='flex items-center justify-between'>
        <h2 className='typo-t2-b text-gray-1000'>지금 인기있는</h2>
        <MovieFilterTabs
          tabs={POPULAR_TABS}
          selectedTab={selectedTab}
          onTabChange={setSelectedTab}
        />
      </div>

      <div className='flex [scrollbar-width:none] gap-3 overflow-x-auto pt-2 [&::-webkit-scrollbar]:hidden'>
        {filteredMovies.map((movie) => (
          <PopularMovieCard
            key={movie.id}
            {...movie}
            onBookingClick={movie.rank === 1 ? () => navigate(ROUTE_PATH.BOOKING) : undefined}
          />
        ))}
      </div>
    </section>
  )
}
