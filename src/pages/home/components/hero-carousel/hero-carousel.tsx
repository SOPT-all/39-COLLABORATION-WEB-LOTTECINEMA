import { useEffect, useState } from 'react'

import { Button } from '@shared/components/button/button'

import pagination1 from '../../assets/pagination-1.svg'
import pagination2 from '../../assets/pagination-2.svg'
import pagination3 from '../../assets/pagination-3.svg'
import pagination4 from '../../assets/pagination-4.svg'
import pagination5 from '../../assets/pagination-5.svg'

export interface HeroSlide {
  id: number
  title: string
  date?: string
  ageRating?: 'all' | '12' | '15' | '19'
  alt: string
  imageSrc: string
  hasBookingButton?: boolean
}

interface HeroCarouselProps {
  slides: readonly HeroSlide[]
}

const AGE_RATING_LABELS = {
  all: '전체관람가',
  '12': '12세이상',
  '15': '15세이상',
  '19': '19세이상',
}

const PAGINATION_IMAGES = [pagination1, pagination2, pagination3, pagination4, pagination5]

export const HeroCarousel = ({ slides }: HeroCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const slide = slides[currentIndex]

  useEffect(() => {
    if (slides.length <= 1) {
      return
    }

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [slides.length])

  if (!slide) {
    return null
  }

  return (
    <article className='relative h-[217px] w-full overflow-hidden'>
      <img
        src={slide.imageSrc}
        alt={slide.alt}
        className='absolute inset-0 h-full w-full object-cover'
      />

      <div
        aria-hidden='true'
        className='absolute inset-x-0 bottom-0 h-[141px] bg-linear-to-b from-gray-1000/0 to-gray-1000/50'
      />

      {slide.ageRating && (
        <span className='absolute top-3 right-5 rounded bg-gray-1000/60 px-[5px] py-[3px] typo-c2-m text-gray-000'>
          {AGE_RATING_LABELS[slide.ageRating]}
        </span>
      )}

      <div className='absolute inset-x-5 bottom-[25px] flex flex-col gap-0.5'>
        {slide.date && (
          <span className='self-start rounded bg-gray-1000/60 px-[5px] py-[3px] typo-c2-m text-gray-000'>
            {slide.date}
          </span>
        )}

        <div className='flex min-h-9 items-center justify-between gap-2'>
          <h3 className='min-w-0 typo-b2-b whitespace-pre-line text-gray-000'>{slide.title}</h3>

          {slide.hasBookingButton && (
            <Button
              variant='dark'
              size='small'
              className='shrink-0 border-[1.5px] bg-gray-1000/60 px-3'>
              예매하기
            </Button>
          )}
        </div>
      </div>

      <div
        role='group'
        aria-label={`전체 ${slides.length}개 배너 중 ${currentIndex + 1}번째 배너`}
        className='absolute inset-x-0 bottom-3 flex items-center justify-center'>
        {PAGINATION_IMAGES[currentIndex] && (
          <img
            src={PAGINATION_IMAGES[currentIndex]}
            alt=''
            aria-hidden='true'
            className='h-[5px] w-[52px]'
          />
        )}
      </div>
    </article>
  )
}
