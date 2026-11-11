import type { Showtime } from '../../types/showtime'

interface ShowtimeCardProps {
  showtime: Showtime
  onSelect: (showtimeId: number) => void
}

const formatTime = (dateTime: string) => {
  const time = dateTime.match(/T(\d{2}:\d{2})/)

  return time?.[1] ?? dateTime
}

export const ShowtimeCard = ({ showtime, onSelect }: ShowtimeCardProps) => {
  const { showtimeId, startAt, endAt, screenName, totalSeatCount, availableSeatCount } = showtime
  const startTime = formatTime(startAt)
  const endTime = formatTime(endAt)

  return (
    <button
      type='button'
      onClick={() => onSelect(showtimeId)}
      className='flex w-fit flex-col items-start rounded border border-gray-200 bg-gray-000 px-3 py-2 text-left active:bg-gray-300'
      aria-label={`${startTime}부터 ${endTime}까지 상영, ${screenName}, 잔여 좌석 ${availableSeatCount}석, 전체 ${totalSeatCount}석`}>
      <span className='flex items-center gap-0.5'>
        <span className='typo-b2-m text-gray-1000'>{startTime}</span>
        <span className='typo-c1-r text-gray-600'>~ {endTime}</span>
      </span>

      <span className='flex w-full items-end justify-between'>
        <span className='flex items-end'>
          <span className='typo-c3-m text-seat-available'>{availableSeatCount}</span>
          <span className='typo-c2-m text-gray-600'> / {totalSeatCount}</span>
        </span>
        <span className='typo-c2-m text-gray-600'>{screenName}</span>
      </span>
    </button>
  )
}
