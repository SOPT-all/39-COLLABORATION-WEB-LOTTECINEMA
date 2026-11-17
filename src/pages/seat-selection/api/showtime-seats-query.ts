import { queryOptions } from '@tanstack/react-query'

import { getShowtimeSeats } from './get-showtime-seats'

export const showtimeSeatsQueryOptions = (showtimeId: number) =>
  queryOptions({
    queryKey: ['showtimes', showtimeId, 'seats'],
    queryFn: () => getShowtimeSeats(showtimeId),
  })
