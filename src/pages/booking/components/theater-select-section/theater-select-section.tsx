import { useState } from 'react'

import type { MyCinemaResponse, RegionResponse } from '@shared/types/__generated__/data-contracts'

import { TheaterSelector } from '../theater-selector/theater-selector'

const MY_REGION_ID = 0

interface TheaterSelectSectionProps {
  regions: RegionResponse[]
  myCinemas: MyCinemaResponse[]
  isLoading?: boolean
  hasError?: boolean
  onCinemaSelect: (cinemaId: number) => void
}

export const TheaterSelectSection = ({
  regions,
  myCinemas,
  isLoading,
  hasError,
  onCinemaSelect,
}: TheaterSelectSectionProps) => {
  const [selectedRegionId, setSelectedRegionId] = useState(MY_REGION_ID)

  if (isLoading)
    return (
      <p className='w-full px-5 py-8 text-center typo-b1-r text-gray-600'>
        영화관 정보를 불러오는 중이에요..
      </p>
    )
  if (hasError)
    return (
      <p className='w-full px-5 py-8 text-center typo-b1-r text-gray-600'>
        영화관 정보를 불러오지 못했어요..
      </p>
    )

  const myRegion = {
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
