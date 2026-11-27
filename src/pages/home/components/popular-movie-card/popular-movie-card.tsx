import { Button } from '@shared/components/button/button'
import { AGE_RATINGS, isAgeRating } from '@shared/constants/age-rating'

import ratingStar from '../../assets/rating-star.svg'

interface PopularMovieCardProps {
  rank: number
  title: string
  posterUrl: string
  ageRating: string
  rating?: number | null
  bookingRate?: number | null
  releaseDday?: number | null
  onBookingClick?: () => void
}

export const PopularMovieCard = ({
  rank,
  title,
  posterUrl,
  ageRating,
  rating,
  bookingRate,
  releaseDday,
  onBookingClick,
}: PopularMovieCardProps) => {
  const AgeRatingIcon = isAgeRating(ageRating) ? AGE_RATINGS[ageRating].Icon : undefined

  return (
    <article className='w-[156px] shrink-0'>
      <div className='relative h-[221px] w-[156px]'>
        <img
          src={posterUrl}
          alt={`${title} 포스터`}
          className='h-full w-full rounded-lg object-cover'
        />

        {AgeRatingIcon && <AgeRatingIcon className='absolute top-2 right-2 h-5 w-5' />}

        <span className='absolute bottom-[3px] left-2 typo-rank text-gray-000 [text-shadow:0_0_12px_#000]'>
          {rank}
        </span>
      </div>

      <div className='flex flex-col gap-1 pt-2 pb-3'>
        <h3 className='truncate typo-b1-m text-gray-1000'>{title}</h3>

        <div className='flex items-center gap-1 typo-c2-m text-gray-700'>
          {releaseDday != null ? (
            <span>개봉 {releaseDday === 0 ? 'D-DAY' : `D-${releaseDday}`}</span>
          ) : (
            rating != undefined && (
              <span className='flex items-center gap-0.5'>
                <img
                  src={ratingStar}
                  alt=''
                  aria-hidden='true'
                  className='h-[7px] w-[7px] shrink-0'
                />
                <span>{rating}</span>
              </span>
            )
          )}

          {bookingRate != null && (
            <>
              <span className='h-3 w-px shrink-0 bg-gray-100' aria-hidden='true' />
              <span>예매율 {bookingRate}%</span>
            </>
          )}
        </div>
      </div>

      <Button variant='primary' size='medium' onClick={onBookingClick} className='h-[43px] w-full'>
        예매하기
      </Button>
    </article>
  )
}
