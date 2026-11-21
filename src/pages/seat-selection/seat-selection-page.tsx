import { useQuery } from '@tanstack/react-query'
import { useNavigate, useSearchParams } from 'react-router'

import { ROUTE_PATH } from '@app/router/path'

import { showtimeSeatsQueryOptions } from '@shared/api/showtime-seats-query'
import { Header } from '@shared/components/header/header'
import { ShowtimeInfo } from '@shared/components/showtime-info/showtime-info'
import { cn } from '@shared/utils/cn'

import { HeadcountSheet } from './components/headcount-sheet/headcount-sheet'
import { SeatLegend } from './components/seat-legend/seat-legend'
import { SeatMap } from './components/seat-map/seat-map'
import { SeatSummarySection } from './components/seat-summary-section/seat-summary-section'
import { useReservationMutation } from './hooks/use-reservation-mutation'
import { useSeatSelection } from './hooks/use-seat-selection'
import { calcTotalPrice } from './utils/calc-total-price'

export const SeatSelectionPage = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const showtimeId = Number(searchParams.get('showtimeId'))

  const { data, isPending, isError } = useQuery(showtimeSeatsQueryOptions(showtimeId))
  const {
    headcount,
    setHeadcount,
    selectedSeatCodes,
    isHeadcountSheetOpen,
    isSelectionFull,
    handleSeatClick,
    handleHeadcountConfirm,
    handleHeadcountReset,
  } = useSeatSelection()

  const { mutate, isPending: isReserving } = useReservationMutation(showtimeId)

  if (isPending) return <p>로딩 중입니다...</p>

  if (isError) return <p>불러올 수 없습니다...</p>

  const SEAT_TYPE_LABELS = {
    STANDARD: '일반',
    RECLINER: '리클라이너',
  } as const

  const screenInfo = `${data.cinema?.name} · ${data.screen?.name} ${SEAT_TYPE_LABELS[data.screen.seatType]}`
  const totalPrice = calcTotalPrice(headcount, data.ticketPrices)

  const handlePay = () => {
    if (isReserving) return

    mutate(
      {
        requestId: crypto.randomUUID(),
        ticketCounts: headcount,
        seatCodes: selectedSeatCodes,
        expectedTotalAmount: totalPrice,
      },
      {
        onSuccess: (reservation) => {
          navigate(ROUTE_PATH.PAYMENT, { state: reservation })
        },
        onError: () => {
          alert('예약에 실패했습니다. 다시 시도해 주세요.')
        },
      },
    )
  }

  return (
    <div className='flex h-dvh flex-col bg-gray-950'>
      <Header variant='sub' title='인원 / 좌석선택' />
      <ShowtimeInfo
        variant='headcount'
        className={cn('p-5', !isHeadcountSheetOpen && 'invisible')}
      />
      <SeatMap
        className='mt-10 min-h-0 flex-1'
        seats={data.seats}
        selectedSeatCodes={selectedSeatCodes}
        isSelectionFull={isSelectionFull}
        onSeatClick={handleSeatClick}
      />
      {!isHeadcountSheetOpen && (
        <div className='flex flex-col'>
          <SeatLegend />
          <SeatSummarySection
            movieTitle={data.movie?.title}
            formatType={data.formatType}
            selectedSeatCodes={selectedSeatCodes}
            headcount={headcount}
            totalPrice={totalPrice}
            isComplete={isSelectionFull}
            onHeadcountChange={handleHeadcountReset}
            onPay={handlePay}
          />
        </div>
      )}
      <HeadcountSheet
        isOpen={isHeadcountSheetOpen}
        screenInfo={screenInfo}
        headcount={headcount}
        onHeadcountChange={setHeadcount}
        onConfirm={handleHeadcountConfirm}
        ageRating={data.movie.ageRating}
      />
    </div>
  )
}
