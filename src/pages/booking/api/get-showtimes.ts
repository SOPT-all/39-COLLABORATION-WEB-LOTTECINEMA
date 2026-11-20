import { API_ENDPOINTS } from '@shared/api/endpoints'
import { http } from '@shared/api/ky-instance'
import type {
  FindShowtimesParams,
  ShowtimeListResponse,
} from '@shared/types/__generated__/data-contracts'

export const getShowtimes = ({ movieId, cinemaId, date }: FindShowtimesParams) =>
  http.get<ShowtimeListResponse>(API_ENDPOINTS.showtimes.list, {
    searchParams: {
      movieId,
      cinemaId,
      date,
    },
  })
