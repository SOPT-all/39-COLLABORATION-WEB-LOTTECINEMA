import { useState } from 'react'

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
    <section className='w-full overflow-hidden'>
      <div className='flex h-[53px] items-center justify-between pt-5 pr-3 pl-5'>
        <h2 className='typo-t2-b text-gray-1000'>지금 인기있는</h2>

        <MovieFilterTabs
          tabs={POPULAR_TABS}
          selectedTab={selectedTab}
          onTabChange={setSelectedTab}
        />
      </div>

      <div className='flex h-[337px] [scrollbar-width:none] gap-3 overflow-x-auto px-5 pt-2 pb-3 [&::-webkit-scrollbar]:hidden'>
        {filteredMovies.map((movie) => (
          <PopularMovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </section>
  )
}
