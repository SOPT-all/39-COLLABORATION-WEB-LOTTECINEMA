import { useState } from 'react'

import type { MyCinemaResponse, RegionResponse } from '@shared/types/__generated__/data-contracts'

import { TheaterSelector } from '../theater-selector/theater-selector'

const MY_REGION_ID = 0

interface TheaterSelectSectionProps {
  regions: RegionResponse[]
  myCinemas: MyCinemaResponse[]
  onCinemaSelect: (cinemaId: number) => void
}

export const TheaterSelectSection = ({
  regions,
  myCinemas,
  onCinemaSelect,
}: TheaterSelectSectionProps) => {
  const [selectedRegionId, setSelectedRegionId] = useState(MY_REGION_ID)

  const myRegion: RegionResponse = {
    regionId: MY_REGION_ID,
    regionName: 'MY 영화관',
    cinemas: myCinemas,
  }

  return (
    <TheaterSelector
      regions={[myRegion, ...regions]}
      selectedRegionId={selectedRegionId}
      onRegionSelect={setSelectedRegionId}
      onTheaterSelect={onCinemaSelect}
    />
  )
}
