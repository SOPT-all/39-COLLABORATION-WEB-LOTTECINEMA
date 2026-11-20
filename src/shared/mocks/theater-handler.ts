import { HttpResponse, http } from 'msw'

import { API_ENDPOINTS } from '@shared/api/endpoints'
import type { SuccessResponseMovieCinemaResponse } from '@shared/types/__generated__/data-contracts'

import { movieCinemasMock } from './data/movie-cinemas'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const theaterHandlers = [
  http.get(`${BASE_URL}${API_ENDPOINTS.movies.cinemas(':movieId')}`, () => {
    return HttpResponse.json<SuccessResponseMovieCinemaResponse>({
      status: 200,
      message: 'OK',
      data: movieCinemasMock,
    })
  }),
]
