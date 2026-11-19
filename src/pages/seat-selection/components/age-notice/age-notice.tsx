import { AGE_RATINGS, isAgeRating } from '@shared/constants/age-rating'

interface AgeNoticeProps {
  ageRating?: string
}

export const AgeNotice = ({ ageRating }: AgeNoticeProps) => {
  if (!isAgeRating(ageRating)) return null

  const { Icon, label } = AGE_RATINGS[ageRating]

  return (
    <p className='flex items-center justify-center gap-0.5'>
      <Icon aria-hidden className='size-4' />

      <span className='typo-c3-m text-gray-000'>본 영화는 {label} 입니다.</span>
    </p>
  )
}
