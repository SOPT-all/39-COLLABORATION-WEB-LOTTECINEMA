import { useEffect, useState } from 'react'

import { Button } from '@shared/components/button/button'

export interface HeroSlide {
  id: number
  title: string
  date?: string
  ageRating?: '전체' | '12세' | '15세' | '청불'
  alt: string
  imageSrc: string
  hasBookingButton?: boolean
}

interface HeroCarouselProps {
  slides: readonly HeroSlide[]
}

const AGE_RATING_LABELS = {
  전체: '전체관람가',
  '12세': '12세이상',
  '15세': '15세이상',
  청불: '청소년관람불가',
}

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
    <section
      aria-label='메인 배너'
      aria-roledescription='carousel'
      className='relative h-[217px] w-full overflow-hidden'>
      <img
        src={slide.imageSrc}
        alt={slide.alt}
        className='absolute inset-0 h-full w-full object-cover'
      />

      <div
        aria-hidden='true'
        className='absolute inset-x-0 bottom-0 h-[141px] bg-linear-to-b from-gray-1000/0 to-gray-1000/50'
      />

      <div className='absolute inset-0 flex flex-col justify-between px-5 py-3'>
        <div className='flex justify-end'>
          {slide.ageRating && (
            <span className='rounded bg-gray-1000/60 px-[5px] py-[3px] typo-c2-m text-gray-000'>
              {AGE_RATING_LABELS[slide.ageRating]}
            </span>
          )}
        </div>

        <div className='flex flex-col gap-2'>
          <div className='flex flex-col gap-0.5'>
            {slide.date && (
              <span className='self-start rounded bg-gray-1000/60 px-[5px] py-[3px] typo-c2-m text-gray-000'>
                {slide.date}
              </span>
            )}

            <div className='flex min-h-9 items-center justify-between gap-2'>
              <h3 className='min-w-0 typo-b2-b whitespace-pre-line text-gray-000'>{slide.title}</h3>

              {slide.hasBookingButton && (
                <Button variant='dark' size='small' className='shrink-0'>
                  예매하기
                </Button>
              )}
            </div>
          </div>

          <div
            role='group'
            aria-label={`전체 ${slides.length}개 배너 중 ${currentIndex + 1}번째 배너`}
            className='flex items-center justify-center gap-1'>
            {slides.map((item, index) => (
              <span
                key={item.id}
                aria-hidden='true'
                className={`h-[5px] shrink-0 rounded-full ${
                  index === currentIndex ? 'w-4 bg-primary' : 'w-[5px] bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
