export interface Showtime {
  showtimeId: number
  startAt: string
  endAt: string
  screenName: string
  seatType?: string
  formatType: string
  languageType: string
  totalSeatCount: number
  reservedSeatCount: number
  availableSeatCount: number
}
