import { useState } from 'react'

import { useQuery } from '@tanstack/react-query'

import { movieCinemasQueryOptions } from '../../api/movie-cinemas-query'
import type { BookingRegion } from '../../types/theater'
import { TheaterSelector } from '../theater-selector/theater-selector'

const MY_REGION_ID = 0

interface TheaterSelectSectionProps {
  movieId: number
}

export const TheaterSelectSection = ({ movieId }: TheaterSelectSectionProps) => {
  const { data } = useQuery(movieCinemasQueryOptions(movieId))
  const [selectedRegionId, setSelectedRegionId] = useState(MY_REGION_ID)

  if (!data) return null

  const myRegion: BookingRegion = {
    regionId: MY_REGION_ID,
    regionName: 'MY 영화관',
    cinemas: data.myCinemas,
  }

  return (
    <TheaterSelector
      regions={[myRegion, ...data.regions]}
      selectedRegionId={selectedRegionId}
      onRegionSelect={setSelectedRegionId}
      onTheaterSelect={() => {
        // TODO: 영화관 선택 시 상영 시간표 조회 연결
      }}
    />
  )
}
