import { useState } from 'react'

import { useQuery } from '@tanstack/react-query'

import type { ShowtimeListResponse } from '@shared/types/__generated__/data-contracts'

import { showtimesQueryOptions } from '../api/showtimes-query'
import { BOOKING_DATES } from '../constants/booking-dates'
import { groupShowtimes } from '../utils/group-showtimes'

const selectShowtimeGroups = (data: ShowtimeListResponse) => groupShowtimes(data.showtimes)

interface UseShowtimesParams {
  movieId: number
  cinemaId: number | null
  enabled: boolean
}

export const useShowtimes = ({ movieId, cinemaId, enabled }: UseShowtimesParams) => {
  const [selectedDate, setSelectedDate] = useState(BOOKING_DATES[0].date)
  const [selectedShowtimeId, setSelectedShowtimeId] = useState<number | null>(null)

  const {
    data: showtimesData,
    isPending: isShowtimesPending,
    isError: isShowtimesError,
  } = useQuery({
    ...showtimesQueryOptions({
      movieId,
      cinemaId: cinemaId ?? 0,
      date: selectedDate,
    }),
    select: selectShowtimeGroups,
    enabled: enabled && cinemaId !== null,
  })

  const handleDateSelect = (date: string) => {
    setSelectedDate(date)
    setSelectedShowtimeId(null)
  }

  const clearSelectedShowtime = () => setSelectedShowtimeId(null)

  return {
    dates: BOOKING_DATES,
    selectedDate,
    selectedShowtimeId,
    showtimesData,
    isShowtimesPending,
    isShowtimesError,
    handleDateSelect,
    handleShowtimeSelect: setSelectedShowtimeId,
    clearSelectedShowtime,
  }
}
