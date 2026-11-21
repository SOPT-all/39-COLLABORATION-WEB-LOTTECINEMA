import { useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router'

import { ROUTE_PATH } from '@app/router/path'

import { showtimeSeatsQueryOptions } from '@shared/api/showtime-seats-query'
import { BottomSheet } from '@shared/components/bottom-sheet/bottom-sheet'
import { Button } from '@shared/components/button/button'
import { ShowtimeInfo } from '@shared/components/showtime-info/showtime-info'
import { AGE_RATINGS, isAgeRating } from '@shared/constants/age-rating'

import { SeatOverview } from '../seat-overview/seat-overview'

interface ShowtimeBottomSheetProps {
  // 선택한 상영 회차 ID. null이면 시트가 닫힌 상태
  showtimeId: number | null
  onClose: () => void
}

export const ShowtimeBottomSheet = ({ showtimeId, onClose }: ShowtimeBottomSheetProps) => {
  const navigate = useNavigate()

  const { data, isPending, isError } = useQuery({
    ...showtimeSeatsQueryOptions(showtimeId ?? 0),
    enabled: showtimeId !== null,
  })

  const ageRating = data?.movie?.ageRating
  const ageNotice = isAgeRating(ageRating) ? AGE_RATINGS[ageRating] : null

  const handleSelectSeat = () => {
    if (showtimeId === null) return

    navigate(`${ROUTE_PATH.SEAT_SELECTION}?showtimeId=${showtimeId}`)
  }

  return (
    <BottomSheet
      isOpen={showtimeId !== null}
      onClose={onClose}
      ariaLabel='상영 정보'
      className='bg-gray-050'
      header={
        <div className='flex items-start justify-between gap-4 px-5 py-2.5'>
          <ShowtimeInfo className='min-w-0 flex-1' />
          <button
            type='button'
            onClick={onClose}
            className='shrink-0 self-center rounded-full border border-gray-900 px-3 py-1.5 typo-c3-m text-gray-900'>
            닫기
          </button>
        </div>
      }
      footer={
        <Button variant='cta' disabled={!data} onClick={handleSelectSeat}>
          인원 및 좌석 선택
        </Button>
      }>
      {isPending && (
        <p className='py-20 text-center typo-b1-r text-gray-600'>좌석 정보를 불러오는 중이에요..</p>
      )}

      {isError && (
        <p className='py-20 text-center typo-b1-r text-gray-600'>좌석 정보를 불러오지 못했어요..</p>
      )}

      {data && (
        <div className='flex flex-col items-center gap-[73px] pt-4 pb-[25px]'>
          <SeatOverview
            seats={data.seats}
            availableSeatCount={data.availableSeatCount}
            totalSeatCount={data.totalSeatCount}
          />

          {ageNotice && (
            <p className='flex items-center justify-center gap-0.5 typo-b1-r text-gray-1000'>
              <ageNotice.Icon aria-hidden className='size-4' />본 영화는 {ageNotice.label} 입니다.
            </p>
          )}
        </div>
      )}
    </BottomSheet>
  )
}
