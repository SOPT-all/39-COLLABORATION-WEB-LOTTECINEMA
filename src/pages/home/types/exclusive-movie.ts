import type { AgeRating } from '@shared/constants/age-rating'

export interface ExclusiveMovie {
  id: number
  posterUrl: string
  title: string
  ageRating: AgeRating | undefined
  category: '롯시픽' | '롯시플'
}
