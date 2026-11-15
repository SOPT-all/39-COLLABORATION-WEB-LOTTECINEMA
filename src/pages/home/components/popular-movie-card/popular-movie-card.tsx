import { Button } from '@shared/components/button/button'
import { BadgeAge12Icon, BadgeAge15Icon, BadgeAge19Icon, BadgeAgeAllIcon } from '@shared/icons'

const ageRatingIcons = {
  all: BadgeAgeAllIcon,
  '12': BadgeAge12Icon,
  '15': BadgeAge15Icon,
  '19': BadgeAge19Icon,
}

interface PopularMovieCardProps {
  rank: number
  title: string
  posterUrl: string
  ageRating: 'all' | '12' | '15' | '19'
  rating?: number
  bookingRate?: number
  releaseDday?: number
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
  const AgeRatingIcon = ageRatingIcons[ageRating]

  return (
    <article className='w-[156px] shrink-0'>
      <div className='relative h-[221px] w-[156px]'>
        <img
          src={posterUrl}
          alt={`${title} 포스터`}
          className='h-full w-full rounded-lg object-cover'
        />

        <AgeRatingIcon className='absolute top-2 right-2 h-5 w-5' />

        <span className='text-white absolute bottom-[3px] left-2 font-["Roboto"] text-[34px] leading-[40px] font-medium'>
          {rank}
        </span>
      </div>

      <div className='flex h-[53px] flex-col gap-2 pt-2'>
        <h3 className='m-0 truncate text-[14px] leading-[16px] font-medium text-gray-1000'>
          {title}
        </h3>

        <div className='flex items-center gap-2 text-[11px] leading-[13px] font-medium text-gray-600'>
          {releaseDday !== undefined ? (
            <span>개봉 {releaseDday === 0 ? 'D-DAY' : `D-${releaseDday}`}</span>
          ) : (
            <span className='flex items-center gap-1'>
              <span aria-hidden='true'>★</span>
              <span>{rating}</span>
            </span>
          )}

          {bookingRate !== undefined && (
            <>
              <span className='h-3 w-px shrink-0 bg-[#EEEEEE]' aria-hidden='true' />
              <span>예매율 {bookingRate}%</span>
            </>
          )}
        </div>
      </div>

      <Button variant='primary' size='medium' onClick={onBookingClick} className='w-full'>
        예매하기
      </Button>
    </article>
  )
}
