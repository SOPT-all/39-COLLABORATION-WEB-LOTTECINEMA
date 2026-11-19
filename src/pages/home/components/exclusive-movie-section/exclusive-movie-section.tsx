import { useState } from 'react'

import type { ExclusiveMovie } from '../../types/exclusive-movie'
import { CurationHelp } from '../curation-help/curation-help'
import { ExclusiveMovieCard } from '../exclusive-movie-card/exclusive-movie-card'
import { MovieFilterTabs } from '../movie-filter-tabs/movie-filter-tabs'

const EXCLUSIVE_TABS = ['롯시픽', '롯시플'] as const

type ExclusiveTab = (typeof EXCLUSIVE_TABS)[number]

interface ExclusiveMovieSectionProps {
  movies: ExclusiveMovie[]
}

export const ExclusiveMovieSection = ({ movies }: ExclusiveMovieSectionProps) => {
  const [selectedTab, setSelectedTab] = useState<ExclusiveTab>('롯시픽')

  const filteredMovies = movies.filter((movie) => {
    return movie.category === selectedTab
  })

  return (
    <section className='flex flex-col py-5 pl-5'>
      <div className='mb-2 flex items-center justify-between'>
        <h2 className='typo-t2-b text-gray-1000'>오직 롯시에서만!</h2>

        <div className='flex items-center gap-1 px-5'>
          <MovieFilterTabs
            tabs={EXCLUSIVE_TABS}
            selectedTab={selectedTab}
            onTabChange={setSelectedTab}
          />

          <CurationHelp placement='exclusive' />
        </div>
      </div>

      <div className='flex [scrollbar-width:none] gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden'>
        {filteredMovies.map((movie) => (
          <ExclusiveMovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </section>
  )
}
