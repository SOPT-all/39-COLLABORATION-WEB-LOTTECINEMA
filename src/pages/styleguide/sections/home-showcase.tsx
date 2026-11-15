import { useState } from 'react'

import moviePoster1 from '@pages/home/assets/movie-poster-1.svg'
import moviePoster2 from '@pages/home/assets/movie-poster-2.svg'
import moviePoster3 from '@pages/home/assets/movie-poster-3.svg'
import moviePoster4 from '@pages/home/assets/movie-poster-4.svg'
import moviePoster5 from '@pages/home/assets/movie-poster-5.svg'
import moviePoster6 from '@pages/home/assets/movie-poster-6.svg'
import { MovieFilterTabs } from '@pages/home/components/movie-filter-tabs/movie-filter-tabs'
import { PopularMovieCard } from '@pages/home/components/popular-movie-card/popular-movie-card'

import { ShowcaseSection } from './showcase-section'

const movies = [
  {
    rank: 1,
    title: '극장판 치이카와: 인어 섬의 비밀',
    posterUrl: moviePoster1,
    ageRating: 'all',
    rating: 9.3,
    bookingRate: 20,
  },
  {
    rank: 2,
    title: '하트 오브 비스트',
    posterUrl: moviePoster2,
    ageRating: '12',
    releaseDday: 1,
    bookingRate: 30,
  },
  {
    rank: 3,
    title: '최종면접',
    posterUrl: moviePoster3,
    ageRating: '15',
    releaseDday: 8,
    bookingRate: 25,
  },
  {
    rank: 4,
    title: '극장판 마법소녀 마도카 마기카',
    posterUrl: moviePoster4,
    ageRating: '15',
    releaseDday: 3,
    bookingRate: 17,
  },
  {
    rank: 5,
    title: '수능, 출제의 비밀',
    posterUrl: moviePoster5,
    ageRating: '12',
    releaseDday: 8,
    bookingRate: 11,
  },
  {
    rank: 6,
    title: '그대, 별처럼',
    posterUrl: moviePoster6,
    ageRating: '15',
    releaseDday: 1,
    bookingRate: 7,
  },
] satisfies Array<React.ComponentProps<typeof PopularMovieCard>>

type PopularTab = '전체' | '상영중' | '개봉예정'

export const HomeShowcase = () => {
  const [selectedTab, setSelectedTab] = useState<PopularTab>('전체')

  return (
    <ShowcaseSection title='Home'>
      <div className='col-span-2'>
        <div className='mb-4 flex items-center justify-between'>
          <h3 className='typo-t2-b'>지금 인기있는</h3>

          <MovieFilterTabs
            tabs={['전체', '상영중', '개봉예정']}
            selectedTab={selectedTab}
            onTabChange={setSelectedTab}
          />
        </div>

        <div className='flex [scrollbar-width:none] gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden'>
          {movies.map((movie) => (
            <div key={movie.rank} className='shrink-0'>
              <PopularMovieCard {...movie} />
            </div>
          ))}
        </div>
      </div>
    </ShowcaseSection>
  )
}
