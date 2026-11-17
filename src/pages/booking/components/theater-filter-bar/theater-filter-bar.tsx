import { LocationIcon } from '@shared/icons'
import { cn } from '@shared/utils/cn'

import type { BookingRegion } from '../../types/theater'
import { TheaterDropdown } from '../theater-dropdown/theater-dropdown'

interface TheaterFilterBarProps {
  selectedTheaterName: string
  regions: BookingRegion[]
  className?: string
}

export const TheaterFilterBar = ({
  selectedTheaterName,
  regions,
  className,
}: TheaterFilterBarProps) => {
  return (
    <div className={cn('flex items-center justify-between px-5 py-3', className)}>
      <TheaterDropdown regions={regions} />

      <div className='inline-flex shrink-0 items-center justify-center gap-0.5'>
        <LocationIcon aria-hidden='true' className='size-5 text-gray-900' />
        <span className='typo-b1-r text-gray-900'>{selectedTheaterName}</span>
      </div>
    </div>
  )
}
