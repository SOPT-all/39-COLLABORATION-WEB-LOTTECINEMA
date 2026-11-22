import { queryOptions } from '@tanstack/react-query'

import { showtimeQueryKeys } from '@shared/api/query-keys'

import { getShowtimeSeats } from './get-showtime-seats'

export const showtimeSeatsQueryOptions = (showtimeId: number) =>
  queryOptions({
    queryKey: showtimeQueryKeys.seats(showtimeId),
    queryFn: () => getShowtimeSeats(showtimeId),
    staleTime: 0,
  })
