import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router'

import { showtimeSeatsQueryOptions } from '@shared/api/showtime-seats-query'
import { Header } from '@shared/components/header/header'

import { HeadcountSheet } from './components/headcount-sheet/headcount-sheet'
import { SeatLegend } from './components/seat-legend/seat-legend'
import { SeatMap } from './components/seat-map/seat-map'
import { SeatSummarySection } from './components/seat-summary-section/seat-summary-section'
import { useSeatSelection } from './hooks/use-seat-selection'
import { calcTotalPrice } from './utils/calc-total-price'

export const SeatSelectionPage = () => {
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

  if (isPending) return <p>로딩 중입니다...</p>

  if (isError) return <p>불러올 수 없습니다...</p>

  const screenInfo = `${data.cinema?.name ?? ''} · ${data.screen?.name ?? ''}`
  const totalPrice = data.ticketPrices ? calcTotalPrice(headcount, data.ticketPrices) : 0
  return (
    <div className='flex min-h-dvh flex-col bg-gray-950'>
      <Header variant='sub' title='인원 / 좌석선택' />
      {/* TODO: ShowtimeInfo (#130) */}
      {/* TODO: 임시 크기 박스 */}
      <div className='h-[82px]' />
      <SeatMap
        // 값 정확하게 모르겟음
        className='mt-10 flex-1'
        seats={data.seats ?? []}
        selectedSeatCodes={selectedSeatCodes}
        isSelectionFull={isSelectionFull}
        onSeatClick={handleSeatClick}
      />
      {!isHeadcountSheetOpen && (
        <div className='flex flex-col'>
          <SeatLegend />
          <SeatSummarySection
            movieTitle={data.movie?.title ?? ''}
            formatType={data.formatType ?? ''}
            selectedSeatCodes={selectedSeatCodes}
            headcount={headcount}
            totalPrice={totalPrice}
            isComplete={isSelectionFull}
            onHeadcountChange={handleHeadcountReset}
            onPay={() => {}} // 결제 페이지 연결
          />
        </div>
      )}
      <HeadcountSheet
        isOpen={isHeadcountSheetOpen}
        screenInfo={screenInfo}
        headcount={headcount}
        onHeadcountChange={setHeadcount}
        onConfirm={handleHeadcountConfirm}
        ageRating={data.movie?.ageRating}
      />
    </div>
  )
}
