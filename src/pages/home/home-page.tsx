import { Header } from '@shared/components/header/header'
import { homeExclusiveMovies, homePopularMovies } from '@shared/mocks/data/home-movies'

import goodsSectionImage from './assets/goods-section.png'
import homeBottomImage from './assets/home-bottom-section.png'
import hero1 from './assets/home-hero-1.svg'
import hero2 from './assets/home-hero-2.svg'
import hero3 from './assets/home-hero-3.svg'
import hero4 from './assets/home-hero-4.svg'
import hero5 from './assets/home-hero-5.svg'
import { BottomNavBar } from './components/bottom-nav-bar/bottom-nav-bar'
import { ExclusiveMovieSection } from './components/exclusive-movie-section/exclusive-movie-section'
import { HeroCarousel, type HeroSlide } from './components/hero-carousel/hero-carousel'
import { PopularMovieSection } from './components/popular-movie-section/popular-movie-section'

const HERO_SLIDES: readonly HeroSlide[] = [
  {
    id: 1,
    title: '숀 더 쉽: 공포의 털보 괴물',
    date: '2026.10.28',
    ageRating: '전체',
    alt: '숀 더 쉽: 공포의 털보 괴물 메인 배너',
    imageSrc: hero1,
    hasBookingButton: true,
  },
  {
    id: 2,
    title: '롯데시네마에서 만나는 특별한 혜택',
    alt: '롯데시네마 프로모션 배너',
    imageSrc: hero2,
  },
  {
    id: 3,
    title: '영화와 함께하는 새로운 경험',
    alt: '롯데시네마 이벤트 배너',
    imageSrc: hero3,
  },
  {
    id: 4,
    title: '놓치지 말아야 할 롯시 소식',
    alt: '롯데시네마 소식 배너',
    imageSrc: hero4,
  },
  {
    id: 5,
    title: '지금 만나볼 수 있는 영화',
    alt: '롯데시네마 영화 배너',
    imageSrc: hero5,
  },
]

export const HomePage = () => {
  return (
    <div className='min-h-dvh bg-gray-000'>
      <Header variant='main' className='h-[50px] bg-gray-000' />

      <main>
        <HeroCarousel slides={HERO_SLIDES} />

        <PopularMovieSection movies={homePopularMovies} />

        <section aria-label='스토어 프로모션' className='h-[340px] w-[375px] overflow-hidden'>
          <img
            src={goodsSectionImage}
            alt='미니언즈와 다양한 영화 굿즈를 만나보세요'
            className='block h-[340px] w-[375px]'
          />
        </section>

        <ExclusiveMovieSection movies={homeExclusiveMovies} />

        <section
          aria-label='롯데시네마 추천 및 이벤트'
          className='h-[1405px] w-[375px] overflow-hidden'>
          <img
            src={homeBottomImage}
            alt='쿠폰, 영화 굿즈, 특별관과 롯데시네마 소식'
            className='block h-[1405px] w-[375px]'
          />
        </section>
      </main>

      <div className='fixed bottom-0 left-1/2 z-30 w-[375px] -translate-x-1/2'>
        <BottomNavBar />
      </div>
    </div>
  )
}
