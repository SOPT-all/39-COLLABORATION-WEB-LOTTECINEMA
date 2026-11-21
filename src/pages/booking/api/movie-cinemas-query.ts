import { queryOptions } from '@tanstack/react-query'

import { movieQueryKeys } from '@shared/api/query-keys'

import { getMovieCinemas } from './get-movie-cinemas'

export const movieCinemasQueryOptions = (movieId: number) =>
  queryOptions({
    queryKey: movieQueryKeys.cinemas(movieId),
    queryFn: () => getMovieCinemas(movieId),
  })
