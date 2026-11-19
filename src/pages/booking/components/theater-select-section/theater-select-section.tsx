import { useState } from 'react'

import { useQuery } from '@tanstack/react-query'

import { movieCinemasQueryOptions } from '../../api/movie-cinemas-query'
import { TheaterSelector } from '../theater-selector/theater-selector'

interface TheaterSelectSectionProps {
  movieId: number
}

export const TheaterSelectSection = ({ movieId }: TheaterSelectSectionProps) => {
  const { data } = useQuery(movieCinemasQueryOptions(movieId))
  const [selectedRegionId, setSelectedRegionId] = useState<number | null>(null)

  if (!data) return null

  return (
    <TheaterSelector
      regions={data.regions}
      selectedRegionId={selectedRegionId ?? data.regions[0].regionId}
      onRegionSelect={setSelectedRegionId}
      onTheaterSelect={() => {
        // TODO: 영화관 선택 시 상영 시간표 조회 연결
      }}
    />
  )
}
