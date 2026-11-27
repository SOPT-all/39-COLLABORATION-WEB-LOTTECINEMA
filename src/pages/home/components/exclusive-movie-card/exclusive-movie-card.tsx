import { AGE_RATINGS, isAgeRating } from '@shared/constants/age-rating'
import { BadgeLottePickIcon, BadgeLottePlIcon } from '@shared/icons'
import type { MovieListResponse } from '@shared/types/__generated__/data-contracts'

interface ExclusiveMovieCardProps {
  posterUrl: string
  title: string
  ageRating: string
  curationType: MovieListResponse['curationType']
}

export const ExclusiveMovieCard = ({
  posterUrl,
  title,
  ageRating,
  curationType,
}: ExclusiveMovieCardProps) => {
  const AgeRatingIcon = isAgeRating(ageRating) ? AGE_RATINGS[ageRating].Icon : undefined

  return (
    <div className='relative h-[172px] w-[120px] shrink-0 overflow-hidden rounded-[5px]'>
      <img src={posterUrl} alt={title} className='h-full w-full object-cover' />

      <div
        aria-hidden='true'
        className='absolute inset-0 rounded-[5px] bg-[linear-gradient(180deg,rgba(255,255,255,0)_43.64%,rgba(0,0,0,0.5)_83.09%)]'
      />

      <div className='absolute inset-0 flex flex-col justify-between'>
        <div className='px-1.5 pt-1.5'>
          {curationType === 'LOTSI_PICK' && <BadgeLottePickIcon className='h-[20px] w-[36px]' />}
          {curationType === 'LOTSI_PLAY' && <BadgeLottePlIcon className='h-[20px] w-[36px]' />}
        </div>

        <div className='flex items-center justify-start gap-1 p-2'>
          {AgeRatingIcon && <AgeRatingIcon className='h-[14px] w-[14px] shrink-0' />}
          <span className='min-w-0 truncate typo-b1-r text-gray-000'>{title}</span>
        </div>
      </div>
    </div>
  )
}
