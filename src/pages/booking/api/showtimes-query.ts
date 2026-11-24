import { queryOptions } from '@tanstack/react-query'

import { showtimeQueryKeys } from '@shared/api/query-keys'
import type { FindShowtimesParams } from '@shared/types/__generated__/data-contracts'

import { getShowtimes } from './get-showtimes'

export const showtimesQueryOptions = (params: FindShowtimesParams) =>
  queryOptions({
    queryKey: showtimeQueryKeys.list(params),
    queryFn: () => getShowtimes(params),
    staleTime: 0,
  })
