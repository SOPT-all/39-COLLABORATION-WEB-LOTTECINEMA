import { API_ENDPOINTS } from '@shared/api/endpoints'
import { http } from '@shared/api/ky-instance'
import type { MovieCinemaResponse } from '@shared/types/__generated__/data-contracts'

export const getMovieCinemas = (movieId: number) =>
  http.get<MovieCinemaResponse>(API_ENDPOINTS.movies.cinemas(movieId))
