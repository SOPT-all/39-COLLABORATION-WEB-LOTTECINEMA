import { useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router'

import { ROUTE_PATH } from '@app/router/path'

import { showtimeSeatsQueryOptions } from '@pages/seat-selection/api/showtime-seats-query'
import { SeatOverview } from '@pages/seat-selection/components/seat-overview/seat-overview'

import { BottomSheet } from '@shared/components/bottom-sheet/bottom-sheet'
import { Button } from '@shared/components/button/button'
import { BadgeAge12Icon, BadgeAge15Icon, BadgeAge19Icon, BadgeAgeAllIcon } from '@shared/icons'

// TODO: #119 머지 후 @shared/constants/age-rating의 AGE_RATINGS로 교체
const AGE_RATING_NOTICES = {
  전체: { Icon: BadgeAgeAllIcon, label: '전체 관람가' },
  '12세': { Icon: BadgeAge12Icon, label: '12세 이상 관람가' },
  '15세': { Icon: BadgeAge15Icon, label: '15세 이상 관람가' },
  청불: { Icon: BadgeAge19Icon, label: '청소년 관람불가' },
} as const

// API의 ageRating(string)이 위 매핑에 있는 키인지 확인하는 타입 가드
const isKnownAgeRating = (value?: string): value is keyof typeof AGE_RATING_NOTICES =>
  value !== undefined && value in AGE_RATING_NOTICES

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
  const ageNotice = isKnownAgeRating(ageRating) ? AGE_RATING_NOTICES[ageRating] : null

  const handleSelectSeat = () => {
    if (showtimeId === null) return

    navigate(`${ROUTE_PATH.SEAT_SELECTION}?showtimeId=${showtimeId}`)
  }

  return (
    <BottomSheet
      isOpen={showtimeId !== null}
      onClose={onClose}
      ariaLabel='상영 정보'
      header={
        <div className='flex items-start justify-between gap-3 px-5.5 pt-5'>
          {/* TODO: ShowtimeInfo 작업 후 교체 */}
          <div className='min-w-0 flex-1 typo-b1-r text-gray-600'>ShowtimeInfo 자리</div>
          <button
            type='button'
            onClick={onClose}
            className='shrink-0 rounded-full border border-gray-900 px-3 py-1 typo-c3-m text-gray-1000'>
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
            seats={data.seats ?? []}
            availableSeatCount={data.availableSeatCount ?? 0}
            totalSeatCount={data.totalSeatCount ?? 0}
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
