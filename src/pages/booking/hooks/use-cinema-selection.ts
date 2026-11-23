import { useQuery } from '@tanstack/react-query'

import { movieCinemasQueryOptions } from '../api/movie-cinemas-query'

interface UseCinemaSelectionParams {
  movieId: number
  cinemaId: number
  enabled: boolean
}

export const useCinemaSelection = ({ movieId, cinemaId, enabled }: UseCinemaSelectionParams) => {
  const {
    data: cinemaData,
    isPending: isCinemaPending,
    isError: isCinemaError,
  } = useQuery({
    ...movieCinemasQueryOptions(movieId),
    enabled,
  })

  const selectedCinema = [
    ...(cinemaData?.myCinemas ?? []),
    ...(cinemaData?.regions.flatMap(({ cinemas }) => cinemas) ?? []),
  ].find(({ cinemaId: id }) => id === cinemaId)

  return {
    cinemaData,
    isCinemaPending,
    isCinemaError,
    selectedCinema,
  }
}
