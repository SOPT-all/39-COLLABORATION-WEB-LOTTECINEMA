import { BottomNavBar } from '@pages/home/components/bottom-nav-bar/bottom-nav-bar'
import { CurationHelp } from '@pages/home/components/curation-help/curation-help'
import { ExclusiveMovieCard } from '@pages/home/components/exclusive-movie-card/exclusive-movie-card'

import { ShowcaseSection } from './showcase-section'

const MOVIES = [
  {
    id: 1,
    posterUrl: '/poster-1.jpg',
    title: '극장판 마법소녀 마도카 마기카',
    ageRating: '전체',
    category: '롯시픽',
  },
  {
    id: 2,
    posterUrl: '/poster-2.jpg',
    title: '그대, 별처럼',
    ageRating: '15세',
    category: '롯시픽',
  },
  {
    id: 3,
    posterUrl: '/poster-3.jpg',
    title: '숀 더 쉽: 공포의 털보 괴물',
    ageRating: '전체',
    category: '롯시픽',
  },
  {
    id: 4,
    posterUrl: '/poster-4.jpg',
    title: '변이',
    ageRating: '청불',
    category: '롯시픽',
  },
  {
    id: 5,
    posterUrl: '/poster-5.jpg',
    title: '엔하이픈 브이알콘서트 : 데스티니',
    ageRating: '전체',
    category: '롯시플',
  },
  {
    id: 6,
    posterUrl: '/poster-6.jpg',
    title: 'Stray Kids World Tour RUN IT LIVE VIEWING',
    ageRating: '전체',
    category: '롯시플',
  },
] as const

export const HomeShowcase = () => {
  return (
    <ShowcaseSection title='Home'>
      <div className='col-span-2'>
        <p className='mb-3 typo-b2-b'>ExclusiveMovieCard</p>
        <div className='flex [scrollbar-width:none] gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden'>
          {MOVIES.map((movie) => (
            <ExclusiveMovieCard key={movie.id} {...movie} />
          ))}
        </div>
      </div>

      <div className='col-span-2 max-w-[375px]'>
        <BottomNavBar />
      </div>

      <div className='col-span-2 mx-auto flex min-h-[180px] w-[375px]'>
        <CurationHelp />
      </div>
    </ShowcaseSection>
  )
}
