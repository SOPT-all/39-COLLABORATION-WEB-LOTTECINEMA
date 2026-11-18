import { Fragment } from 'react'

import type { Showtime } from '../../types/showtime'
import { ShowtimeCard } from '../showtime-card/showtime-card'

interface ShowtimeGroupProps {
  labels: string[]
  description: string
  showtimes: Showtime[]
  onSelect: (showtimeId: number) => void
}

export const ShowtimeGroup = ({ labels, description, showtimes, onSelect }: ShowtimeGroupProps) => {
  if (showtimes.length === 0) return null

  return (
    <div className='flex w-full flex-col items-start gap-4 px-5 pt-3 pb-2'>
      <div className='flex w-full flex-col items-start gap-1.5'>
        {/* 라벨을 가로로 나열하고 사이에 구분선을 표시 */}
        <div className='flex items-center gap-1'>
          {labels.map((label, index) => (
            <Fragment key={label}>
              {index > 0 && <span className='h-2.5 w-px bg-gray-200' aria-hidden='true' />}
              <span className='typo-c3-m whitespace-nowrap text-gray-1000'>{label}</span>
            </Fragment>
          ))}
        </div>
        <p className='typo-c1-r text-gray-600'>{description}</p>
      </div>

      <div className='grid w-full grid-cols-3 gap-2'>
        {showtimes.map((showtime) => (
          <ShowtimeCard
            key={showtime.showtimeId}
            className='w-full min-w-0'
            showtime={showtime}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  )
}
