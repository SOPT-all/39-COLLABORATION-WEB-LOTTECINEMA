import { queryOptions } from '@tanstack/react-query'

import { getMovies } from './get-movies'

export const moviesQueryOptions = () =>
  queryOptions({
    queryKey: ['movies'],
    queryFn: getMovies,
  })
