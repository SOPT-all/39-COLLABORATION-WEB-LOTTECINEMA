import { type BookingRegion, type Cinema, MY_CINEMA_REGION_ID } from '../../types/theater'
import { RegionItem } from '../region-item/region-item'
import { TheaterItem } from '../theater-item/theater-item'

interface TheaterSelectorProps {
  myCinemas?: Cinema[]
  regions: BookingRegion[]
  selectedRegionId: number
  selectedCinemaId?: number | null
  onRegionSelect: (regionId: number) => void
  onTheaterSelect: (cinemaId: number) => void
}

export const TheaterSelector = ({
  myCinemas = [],
  regions,
  selectedRegionId,
  onRegionSelect,
  onTheaterSelect,
}: TheaterSelectorProps) => {
  const selectedRegion =
    selectedRegionId === MY_CINEMA_REGION_ID
      ? undefined
      : regions.find(({ regionId }) => regionId === selectedRegionId)
  const selectedCinemas =
    selectedRegionId === MY_CINEMA_REGION_ID ? myCinemas : (selectedRegion?.cinemas ?? [])

  return (
    <div className='flex h-full min-h-0'>
      {/* 왼쪽: 지역 목록 */}
      <div
        role='group'
        aria-label='지역 선택'
        className='w-[145px] shrink-0 [scrollbar-width:none] overflow-y-auto border-t border-gray-200 bg-gray-000 [&::-webkit-scrollbar]:hidden'>
        <RegionItem
          name='MY 영화관'
          theaterCount={myCinemas.length}
          isSelected={selectedRegionId === MY_CINEMA_REGION_ID}
          onClick={() => onRegionSelect(MY_CINEMA_REGION_ID)}
        />

        {regions.map(({ regionId, regionName, cinemas, cinemaCount }) => (
          <RegionItem
            key={regionId}
            name={regionName}
            theaterCount={cinemaCount ?? cinemas.length}
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
        {selectedCinemas.map(({ cinemaId, cinemaName }) => (
          <TheaterItem key={cinemaId} name={cinemaName} onClick={() => onTheaterSelect(cinemaId)} />
        ))}
      </div>
    </div>
  )
}
