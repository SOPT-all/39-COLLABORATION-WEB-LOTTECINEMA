import {
  BadgeAge12Icon,
  BadgeAge15Icon,
  BadgeAge19Icon,
  BadgeAgeAllIcon,
  BadgeLottePickIcon,
  BadgeLottePlIcon,
} from '@shared/icons'

const AGE_RATING_ICONS = {
  전체: <BadgeAgeAllIcon />,
  '12': <BadgeAge12Icon />,
  '15': <BadgeAge15Icon />,
  '19': <BadgeAge19Icon />,
}

interface ExclusiveMovieCardProps {
  id: number
  posterUrl: string
  title: string
  ageRating: '전체' | '12' | '15' | '19'
  category: '롯시픽' | '롯시플'
}

const ExclusiveMovieCard = ({ posterUrl, title, ageRating, category }: ExclusiveMovieCardProps) => {
  return (
    <div className='relative h-[172px] w-[120px] overflow-hidden rounded-[5px]'>
      <img src={posterUrl} alt={title} className='h-full w-full object-cover' />

      <div className='absolute inset-0 bg-[linear-gradient(to_top,#000_0%,#000_30%,transparent_100%)] opacity-50' />

      <div className='absolute top-[6px] left-[6px]'>
        {category === '롯시픽' ? <BadgeLottePickIcon /> : <BadgeLottePlIcon />}
      </div>

      <div className='absolute right-[6px] bottom-[8px] left-[6px] flex items-center gap-[4px]'>
        <span className='shrink-0'>{AGE_RATING_ICONS[ageRating]}</span>
        <span className='min-w-0 truncate typo-b1-r text-gray-000'>{title}</span>
      </div>
    </div>
  )
}

export { ExclusiveMovieCard }
