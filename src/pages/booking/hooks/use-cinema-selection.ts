import { useState } from 'react'

import { useQuery } from '@tanstack/react-query'

import { movieCinemasQueryOptions } from '../api/movie-cinemas-query'

interface UseCinemaSelectionParams {
  movieId: number
  enabled: boolean
}

export const useCinemaSelection = ({ movieId, enabled }: UseCinemaSelectionParams) => {
  const [selectedCinemaId, setSelectedCinemaId] = useState<number | null>(null)

  const {
    data: cinemaData,
    isPending: isCinemaPending,
    isError: isCinemaError,
  } = useQuery({
    ...movieCinemasQueryOptions(movieId),
    enabled,
  })

  const selectedCinema = cinemaData?.regions
    .flatMap(({ cinemas }) => cinemas)
    .find(({ cinemaId }) => cinemaId === selectedCinemaId)

  return {
    cinemaData,
    isCinemaPending,
    isCinemaError,
    selectedCinemaId,
    selectedCinema,
    selectCinema: setSelectedCinemaId,
  }
}
