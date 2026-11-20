import type { RegionResponse } from '@shared/types/__generated__/data-contracts'

import type { BookingDate } from '../../types/date'
import type { ShowtimeGroupData } from '../../types/showtime'
import { DateSelector } from '../date-selector/date-selector'
import { ShowtimeGroup } from '../showtime-group/showtime-group'
import { TheaterFilterBar } from '../theater-filter-bar/theater-filter-bar'
import { TheaterTypeTabs } from '../theater-type-tabs/theater-type-tabs'

interface ShowtimeSectionProps {
  cinemaName: string
  groups: ShowtimeGroupData[]
  selectedDate: string
  onDateSelect: (date: string) => void
  onShowtimeSelect: (showtimeId: number) => void
  dates: BookingDate[]
  regions: RegionResponse[]
  isLoading?: boolean
  hasError?: boolean
  className?: string
}

export const ShowtimeSection = ({
  cinemaName,
  groups,
  selectedDate,
  onDateSelect,
  onShowtimeSelect,
  dates,
  regions,
  isLoading = false,
  hasError = false,
  className,
}: ShowtimeSectionProps) => {
  const renderShowtimeList = () => {
    if (isLoading) {
      return (
        <p className='w-full px-5 py-8 text-center typo-b1-r text-gray-600'>
          상영 시간표를 불러오는 중이에요..
        </p>
      )
    }

    if (hasError) {
      return (
        <p className='w-full px-5 py-8 text-center typo-b1-r text-gray-600'>
          상영 시간표를 불러오지 못했어요..
        </p>
      )
    }

    if (groups.length === 0) {
      return (
        <p className='w-full px-5 py-8 text-center typo-b1-r text-gray-600'>
          상영 시간표가 없습니다.
        </p>
      )
    }

    return groups.map((group) => (
      <ShowtimeGroup key={group.key} group={group} onSelect={onShowtimeSelect} />
    ))
  }

  return (
    <section aria-label='상영 시간 선택' className={className}>
      <TheaterFilterBar selectedTheaterName={cinemaName} regions={regions} />
      <div aria-hidden='true' className='h-[5px] w-full bg-gray-100' />
      <DateSelector dates={dates} selectedDate={selectedDate} onDateSelect={onDateSelect} />
      <div className='flex w-full flex-col gap-2'>
        <TheaterTypeTabs />
        <div className='flex w-full flex-col items-end'>{renderShowtimeList()}</div>
      </div>
    </section>
  )
}
