import { queryOptions } from '@tanstack/react-query'

import { movieQueryKeys } from '@shared/api/query-keys'

import { getMovies } from './get-movies'

export const moviesQueryOptions = () =>
  queryOptions({
    queryKey: movieQueryKeys.all,
    queryFn: getMovies,
  })
