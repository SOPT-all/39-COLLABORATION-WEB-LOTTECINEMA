import { AGE_RATINGS } from '@shared/constants/age-rating'
import type { AgeRating } from '@shared/constants/age-rating'
import { BadgeLottePickIcon, BadgeLottePlIcon } from '@shared/icons'

export interface ExclusiveMovieCardProps {
  posterUrl: string
  title: string
  ageRating: AgeRating | undefined
  category: '롯시픽' | '롯시플'
}

export const ExclusiveMovieCard = ({
  posterUrl,
  title,
  ageRating,
  category,
}: ExclusiveMovieCardProps) => {
  const AgeRatingIcon = ageRating ? AGE_RATINGS[ageRating].Icon : undefined

  return (
    <div className='relative h-[172px] w-[120px] shrink-0 overflow-hidden rounded-[5px]'>
      <img src={posterUrl} alt={title} className='h-full w-full object-cover' />

      <div
        aria-hidden='true'
        className='absolute inset-0 bg-[linear-gradient(to_top,#000_0%,#000_30%,transparent_100%)] opacity-50'
      />

      <div className='absolute inset-0 flex flex-col justify-between px-1.5 pt-1.5 pb-2'>
        {category === '롯시픽' ? (
          <BadgeLottePickIcon className='h-[20px] w-[36px]' />
        ) : (
          <BadgeLottePlIcon className='h-[20px] w-[36px]' />
        )}

        <div className='flex items-center justify-center gap-1'>
          {AgeRatingIcon && <AgeRatingIcon className='h-[14px] w-[14px] shrink-0' />}
          <span className='min-w-0 truncate typo-b1-r text-gray-000'>{title}</span>
        </div>
      </div>
    </div>
  )
}
