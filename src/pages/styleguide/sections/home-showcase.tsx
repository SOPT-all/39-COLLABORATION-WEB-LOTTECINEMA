import heroBanner1 from '@pages/home/assets/home-hero-1.svg'
import heroBanner2 from '@pages/home/assets/home-hero-2.svg'
import heroBanner3 from '@pages/home/assets/home-hero-3.svg'
import heroBanner4 from '@pages/home/assets/home-hero-4.svg'
import heroBanner5 from '@pages/home/assets/home-hero-5.svg'
import { BottomNavBar } from '@pages/home/components/bottom-nav-bar/bottom-nav-bar'
import { CurationHelp } from '@pages/home/components/curation-help/curation-help'
import { HeroCarousel } from '@pages/home/components/hero-carousel/hero-carousel'

import { ShowcaseSection } from './showcase-section'

export const HomeShowcase = () => (
  <ShowcaseSection title='Home'>
    <div className='col-span-2 w-full max-w-[375px]'>
      <HeroCarousel
        slides={[
          {
            id: 1,
            title: '숀 더 쉽: 공포의 털보 괴물',
            date: '2026.10.28',
            ageRating: 'all',
            alt: '양 캐릭터들이 등장하는 숀 더 쉽 영화 이미지',
            imageSrc: heroBanner1,
          },
          {
            id: 2,
            title: '영화 한편, 스탬프 하나\n다 모으고 관람권 받기!',
            date: '',
            ageRating: 'all',
            alt: '스탬프와 랜덤 쿠폰 이미지',
            imageSrc: heroBanner2,
          },
          {
            id: 3,
            title: 'K-sale Festa\n영화랑 매점 혜택받자!',
            date: '',
            ageRating: 'all',
            alt: '영화 3천 원 할인, 콤보 3천 원 할인',
            imageSrc: heroBanner3,
          },
          {
            id: 4,
            title: '클래식 레미니선스\n<마리 앙투아네트> 11/11 개봉',
            date: '',
            ageRating: 'all',
            alt: '화려한 드레스를 입은 마리 앙투아네트 영화 속 장면',
            imageSrc: heroBanner4,
          },
          {
            id: 5,
            title: '<인더플 : 카지노X>\n이머시브 공연 커밍순!',
            date: '',
            ageRating: 'all',
            alt: '카지노X 간판과 카지노 테이블이 있는 공연장 이미지',
            imageSrc: heroBanner5,
          },
        ]}
      />
    </div>

    <div className='col-span-2 max-w-[375px]'>
      <BottomNavBar />
    </div>

    <div className='col-span-2 mx-auto flex min-h-[180px] w-[375px]'>
      <CurationHelp />
    </div>
  </ShowcaseSection>
)
