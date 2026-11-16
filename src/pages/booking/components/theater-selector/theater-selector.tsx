import { RegionItem } from '@pages/booking/components/region-item/region-item'
import { TheaterItem } from '@pages/booking/components/theater-item/theater-item'
import type { BookingRegion } from '@pages/booking/types/theater'

interface TheaterSelectorProps {
  regions: BookingRegion[]
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
    <div className='flex h-[574px]'>
      {/* 왼쪽: 지역 목록 */}
      <div
        role='group'
        aria-label='지역 선택'
        className='w-[145px] shrink-0 border-t border-gray-200 bg-gray-000'>
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
