import heroBanner1 from '@pages/home/assets/home-hero-1.svg'
import heroBanner2 from '@pages/home/assets/home-hero-2.svg'
import heroBanner3 from '@pages/home/assets/home-hero-3.svg'
import heroBanner4 from '@pages/home/assets/home-hero-4.svg'
import heroBanner5 from '@pages/home/assets/home-hero-5.svg'
import moviePoster1 from '@pages/home/assets/movie-poster-1.svg'
import moviePoster2 from '@pages/home/assets/movie-poster-2.svg'
import moviePoster3 from '@pages/home/assets/movie-poster-3.svg'
import moviePoster4 from '@pages/home/assets/movie-poster-4.svg'
import moviePoster5 from '@pages/home/assets/movie-poster-5.svg'
import moviePoster6 from '@pages/home/assets/movie-poster-6.svg'
import posterPick1 from '@pages/home/assets/poster-pick-1.jpg'
import posterPick2 from '@pages/home/assets/poster-pick-2.jpg'
import posterPick3 from '@pages/home/assets/poster-pick-3.jpg'
import posterPick4 from '@pages/home/assets/poster-pick-4.jpg'
import posterPlay1 from '@pages/home/assets/poster-play-1.jpg'
import posterPlay2 from '@pages/home/assets/poster-play-2.jpg'
import posterPlay3 from '@pages/home/assets/poster-play-3.jpg'
import { BottomNavBar } from '@pages/home/components/bottom-nav-bar/bottom-nav-bar'
import { ExclusiveMovieSection } from '@pages/home/components/exclusive-movie-section/exclusive-movie-section'
import { HeroCarousel } from '@pages/home/components/hero-carousel/hero-carousel'
import { PopularMovieSection } from '@pages/home/components/popular-movie-section/popular-movie-section'
import type { ExclusiveMovie } from '@pages/home/types/exclusive-movie'
import type { PopularMovie } from '@pages/home/types/popular-movie'

import { ShowcaseSection } from './showcase-section'

const movies = [
  {
    id: 1,
    rank: 1,
    title: '극장판 치이카와: 인어 섬의 비밀',
    posterUrl: moviePoster1,
    ageRating: '전체',
    rating: 9.3,
    bookingRate: 20,
  },
  {
    id: 2,
    rank: 2,
    title: '하트 오브 비스트',
    posterUrl: moviePoster2,
    ageRating: '12세',
    releaseDday: 1,
    bookingRate: 30,
  },
  {
    id: 3,
    rank: 3,
    title: '최종면접',
    posterUrl: moviePoster3,
    ageRating: '15세',
    releaseDday: 8,
    bookingRate: 25,
  },
  {
    id: 4,
    rank: 4,
    title: '극장판 마법소녀 마도카 마기카',
    posterUrl: moviePoster4,
    ageRating: '15세',
    releaseDday: 3,
    bookingRate: 17,
  },
  {
    id: 5,
    rank: 5,
    title: '수능, 출제의 비밀',
    posterUrl: moviePoster5,
    ageRating: '12세',
    releaseDday: 8,
    bookingRate: 11,
  },
  {
    id: 6,
    rank: 6,
    title: '그대, 별처럼',
    posterUrl: moviePoster6,
    ageRating: '15세',
    releaseDday: 1,
    bookingRate: 7,
  },
] satisfies PopularMovie[]

const MOVIES = [
  {
    id: 1,
    posterUrl: posterPick1,
    title: '극장판 마법소녀 마도카 마기카',
    ageRating: '전체',
    category: '롯시픽',
  },
  {
    id: 2,
    posterUrl: posterPick2,
    title: '그대, 별처럼',
    ageRating: '15세',
    category: '롯시픽',
  },
  {
    id: 3,
    posterUrl: posterPick3,
    title: '숀 더 쉽: 공포의 털보 괴물',
    ageRating: '전체',
    category: '롯시픽',
  },
  {
    id: 4,
    posterUrl: posterPick4,
    title: '변이',
    ageRating: '청불',
    category: '롯시픽',
  },
  {
    id: 5,
    posterUrl: posterPlay1,
    title: '엔하이픈 브이알콘서트 : 데스티니',
    ageRating: '전체',
    category: '롯시플',
  },
  {
    id: 6,
    posterUrl: posterPlay2,
    title: 'Stray Kids World Tour RUN IT LIVE VIEWING',
    ageRating: '전체',
    category: '롯시플',
  },
  {
    id: 7,
    posterUrl: posterPlay3,
    title: 'BTS WORLD TOUR ARIRANG',
    ageRating: '전체',
    category: '롯시플',
  },
] satisfies ExclusiveMovie[]

export const HomeShowcase = () => {
  return (
    <ShowcaseSection title='Home'>
      <div className='col-span-2 w-full max-w-[375px]'>
        <HeroCarousel
          slides={[
            {
              id: 1,
              title: '숀 더 쉽: 공포의 털보 괴물',
              date: '2026.10.28',
              ageRating: '전체',
              alt: '양 캐릭터들이 등장하는 숀 더 쉽 영화 이미지',
              imageSrc: heroBanner1,
              hasBookingButton: true,
            },
            {
              id: 2,
              title: '영화 한편, 스탬프 하나\n다 모으고 관람권 받기!',
              alt: '스탬프와 랜덤 쿠폰 이미지',
              imageSrc: heroBanner2,
            },
            {
              id: 3,
              title: 'K-sale Festa\n영화랑 매점 혜택받자!',
              alt: '영화 3천 원 할인, 콤보 3천 원 할인',
              imageSrc: heroBanner3,
            },
            {
              id: 4,
              title: '클래식 레미니선스\n<마리 앙투아네트> 11/11 개봉',
              alt: '화려한 드레스를 입은 마리 앙투아네트 영화 속 장면',
              imageSrc: heroBanner4,
            },
            {
              id: 5,
              title: '<인더플 : 카지노X>\n이머시브 공연 커밍순!',
              alt: '카지노X 간판과 카지노 테이블이 있는 공연장 이미지',
              imageSrc: heroBanner5,
            },
          ]}
        />
      </div>

      <div className='col-span-2'>
        <PopularMovieSection movies={movies} />
      </div>

      <div className='col-span-2'>
        <ExclusiveMovieSection movies={MOVIES} />
      </div>

      <div className='col-span-2 max-w-[375px]'>
        <BottomNavBar />
      </div>
    </ShowcaseSection>
  )
}
