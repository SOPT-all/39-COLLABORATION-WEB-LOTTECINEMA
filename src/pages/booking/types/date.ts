export type BookingDateDayType = 'weekday' | 'saturday' | 'sunday'

export interface BookingDate {
  date: string
  day: number
  dayLabel: string
  dayType: BookingDateDayType
}
