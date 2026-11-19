import { API_ENDPOINTS } from '@shared/api/endpoints'
import { http } from '@shared/api/ky-instance'
import type { ShowtimeSeatResponse } from '@shared/types/__generated__/data-contracts'

export const getShowtimeSeats = (showtimeId: number) =>
  http.get<ShowtimeSeatResponse>(API_ENDPOINTS.showtimes.seats(showtimeId))
