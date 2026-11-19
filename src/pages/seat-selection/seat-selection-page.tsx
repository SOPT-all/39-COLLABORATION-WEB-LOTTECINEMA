import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router'

import { showtimeSeatsQueryOptions } from '@shared/api/showtime-seats-query'

import { SeatMap } from './components/seat-map/seat-map'

export const SeatSelectionPage = () => {
  const [searchParams] = useSearchParams()
  const showtimeId = Number(searchParams.get('showtimeId'))

  const { data, isPending, isError } = useQuery(showtimeSeatsQueryOptions(showtimeId))

  if (isPending) return <p>로딩 중입니다...</p>

  if (isError) return <p>불러올 수 없습니다...</p>
  return (
    <div className='bg-gray-1000'>
      <SeatMap seats={data.seats ?? []} />
    </div>
  )
}
