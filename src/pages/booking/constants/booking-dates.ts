import type { BookingDate } from '../types/date'

export const BOOKING_DATES: BookingDate[] = [
  { date: '2026-10-27', day: 27, dayLabel: '오늘', dayType: 'weekday' },
  { date: '2026-10-28', day: 28, dayLabel: '수', dayType: 'weekday' },
  { date: '2026-10-29', day: 29, dayLabel: '목', dayType: 'weekday' },
  { date: '2026-10-30', day: 30, dayLabel: '금', dayType: 'weekday' },
  { date: '2026-10-31', day: 31, dayLabel: '토', dayType: 'saturday' },
  { date: '2026-11-01', day: 1, dayLabel: '일', dayType: 'sunday' },
  { date: '2026-11-02', day: 2, dayLabel: '월', dayType: 'weekday' },
]
