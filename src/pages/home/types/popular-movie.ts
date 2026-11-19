export type AgeRating = '전체' | '12세' | '15세' | '청불'

export interface PopularMovie {
  id: number
  rank: number
  title: string
  posterUrl: string
  ageRating: AgeRating
  rating?: number
  bookingRate?: number
  releaseDday?: number
}
