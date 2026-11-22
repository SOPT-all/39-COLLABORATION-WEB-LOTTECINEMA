import type { AgeRating } from '@shared/constants/age-rating'

export interface PopularMovie {
  id: number
  rank: number
  title: string
  posterUrl: string
  ageRating: AgeRating | undefined
  rating?: number
  bookingRate?: number
  releaseDday?: number
}
