import type { RegionResponse } from '@shared/types/__generated__/data-contracts'

import { RegionItem } from '../region-item/region-item'
import { TheaterItem } from '../theater-item/theater-item'

interface TheaterSelectorProps {
  regions: RegionResponse[]
  selectedRegionId: number
  onRegionSelect: (regionId: number) => void
  onTheaterSelect: (cinemaId: number) => void
}

export const TheaterSelector = ({
  regions,
  selectedRegionId,
  onRegionSelect,
  onTheaterSelect,
}: TheaterSelectorProps) => {
  const selectedRegion = regions.find(({ regionId }) => regionId === selectedRegionId)

  return (
    <div className='flex h-full'>
      {/* 왼쪽: 지역 목록 */}
      <div
        role='group'
        aria-label='지역 선택'
        className='w-[145px] shrink-0 [scrollbar-width:none] overflow-y-auto border-t border-gray-200 bg-gray-000 [&::-webkit-scrollbar]:hidden'>
        {regions.map(({ regionId, regionName, cinemas }) => (
          <RegionItem
            key={regionId}
            name={regionName}
            theaterCount={cinemas.length}
            isSelected={regionId === selectedRegionId}
            onClick={() => onRegionSelect(regionId)}
          />
        ))}
      </div>

      {/* 오른쪽: 선택한 지역의 영화관 목록 */}
      <div
        key={selectedRegionId}
        role='group'
        aria-label='영화관 선택'
        className='flex-1 [scrollbar-width:none] overflow-y-auto border-t border-gray-200 bg-gray-100 [&::-webkit-scrollbar]:hidden'>
        {selectedRegion?.cinemas.map(({ cinemaId, cinemaName }) => (
          <TheaterItem key={cinemaId} name={cinemaName} onClick={() => onTheaterSelect(cinemaId)} />
        ))}
      </div>
    </div>
  )
}
