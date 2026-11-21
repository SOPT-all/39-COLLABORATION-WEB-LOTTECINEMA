import { API_ENDPOINTS } from '@shared/api/endpoints'
import { http } from '@shared/api/ky-instance'
import type { MovieListsResponse } from '@shared/types/__generated__/data-contracts'

export const getMovies = () => http.get<MovieListsResponse>(API_ENDPOINTS.movies.list)
