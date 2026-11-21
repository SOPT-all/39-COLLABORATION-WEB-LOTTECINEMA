export interface Showtime {
  showtimeId: number
  startAt: string
  endAt: string
  screenName: string
  totalSeatCount: number
  availableSeatCount: number
}

export interface ShowtimeGroupData {
  key: string
  labels: string[]
  description?: string
  showtimes: Showtime[]
}
