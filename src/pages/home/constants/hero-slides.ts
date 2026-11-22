import heroBanner1 from '../assets/home-hero-1.svg'
import heroBanner2 from '../assets/home-hero-2.svg'
import heroBanner3 from '../assets/home-hero-3.svg'
import heroBanner4 from '../assets/home-hero-4.svg'
import heroBanner5 from '../assets/home-hero-5.svg'
import type { HeroSlide } from '../components/hero-carousel/hero-carousel'

export const heroSlides = [
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
] as const satisfies readonly HeroSlide[]
