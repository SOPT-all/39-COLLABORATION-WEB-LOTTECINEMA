import { useState } from 'react'

import { PopularMovieCard } from '@pages/home/components/popular-movie-card/popular-movie-card'

import { MovieFilterTabs } from '../movie-filter-tabs/movie-filter-tabs'
import type { PopularMovieCardProps } from '../popular-movie-card/popular-movie-card'

interface PopularMovieSectionProps {
  movies: PopularMovieCardProps[]
}

export const PopularMovieSection = ({ movies }: PopularMovieSectionProps) => {
  const [selectedTab, setSelectedTab] = useState('전체')

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
    <section>
      <div className='mb-4 flex items-center justify-between'>
        <h2 className='typo-t2-b text-gray-1000'>지금 인기있는</h2>
        <MovieFilterTabs
          tabs={['전체', '상영중', '개봉예정']}
          selectedTab={selectedTab}
          onTabChange={setSelectedTab}
        />
      </div>
      <div className='flex [scrollbar-width:none] gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden'>
        {filteredMovies.map((movie) => (
          <PopularMovieCard key={movie.rank} {...movie} />
        ))}
      </div>
    </section>
  )
}
