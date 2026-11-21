import { HttpResponse, http } from 'msw'

import { API_ENDPOINTS } from '@shared/api/endpoints'
import type { SuccessResponseMovieListsResponse } from '@shared/types/__generated__/data-contracts'

import { moviesMock } from './data/movies'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const movieHandlers = [
  http.get(`${BASE_URL}${API_ENDPOINTS.movies.list}`, () => {
    return HttpResponse.json<SuccessResponseMovieListsResponse>({
      status: 200,
      message: 'OK',
      data: moviesMock,
    })
  }),
]
