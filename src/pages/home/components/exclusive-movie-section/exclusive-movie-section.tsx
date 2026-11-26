import { useState } from 'react'

import type { MovieListResponse } from '@shared/types/__generated__/data-contracts'

import { CurationHelp } from '../curation-help/curation-help'
import { ExclusiveMovieCard } from '../exclusive-movie-card/exclusive-movie-card'
import { MovieFilterTabs } from '../movie-filter-tabs/movie-filter-tabs'

const EXCLUSIVE_TABS = ['롯시픽', '롯시플'] as const

type ExclusiveTab = (typeof EXCLUSIVE_TABS)[number]

interface ExclusiveMovieSectionProps {
  movies: MovieListResponse[]
}

export const ExclusiveMovieSection = ({ movies }: ExclusiveMovieSectionProps) => {
  const [selectedTab, setSelectedTab] = useState<ExclusiveTab>('롯시픽')

  const filteredMovies = movies.filter((movie) =>
    selectedTab === '롯시픽'
      ? movie.curationType === 'LOTSI_PICK'
      : movie.curationType === 'LOTSI_PLAY',
  )

  return (
    <section className='pt-5'>
      <div className='flex items-center justify-between px-5'>
        <h2 className='typo-t2-b text-gray-1000'>오직 롯시에서만!</h2>

        <div className='flex items-center'>
          <MovieFilterTabs
            tabs={EXCLUSIVE_TABS}
            selectedTab={selectedTab}
            onTabChange={setSelectedTab}
          />

          <CurationHelp />
        </div>
      </div>

      <div className='scrollbar-hide flex gap-[10px] overflow-x-auto px-5 py-2'>
        {filteredMovies.map((movie) => (
          <ExclusiveMovieCard
            key={movie.movieId}
            posterUrl={movie.posterUrl ?? ''}
            title={movie.title}
            ageRating={movie.ageRating}
            curationType={movie.curationType}
          />
        ))}
      </div>
    </section>
  )
}
