import { useState } from 'react'

import { Navigate, useLocation } from 'react-router'

import { ROUTE_PATH } from '@app/router/path'

import { Header } from '@shared/components/header/header'
import type { ReservationResponse } from '@shared/types/__generated__/data-contracts'
import { cn } from '@shared/utils/cn'

import paymentBenefit from './assets/payment-benefit.png'
import photoCardGuide from './assets/photo-card-guide.png'
import { BookingSummaryCard } from './components/booking-summary-card/booking-summary-card'
import { DiscountPointSection } from './components/discount-point-section/discount-point-section'
import { PaymentMethodGroup } from './components/payment-method-group/payment-method-group'
import { PaymentSummaryBar } from './components/payment-summary-bar/payment-summary-bar'
import type { DiscountOption } from './types/discount-option'
import type { PaymentMethod } from './types/payment-method'

const DISCOUNT_OPTIONS: DiscountOption[] = [
  { id: 'vip', label: 'VIP', count: 0, disabled: true },
  { id: 'ticket', label: '관람권', count: 0, disabled: true },
  { id: 'coupon', label: '할인권', count: 0, disabled: true },
  { id: 'partner', label: '제휴포인트/할인', disabled: true },
]

const LPOINT_DISCOUNT_AMOUNT = 1000

const Divider = ({ className }: { className?: string }) => (
  <div aria-hidden='true' className={cn('h-[5px] bg-gray-050', className)} />
)

export const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(null)
  const [discountAmount, setDiscountAmount] = useState(0)

  const location = useLocation()
  const reservation = location.state as ReservationResponse | null

  if (!reservation) {
    return <Navigate to={ROUTE_PATH.BOOKING} replace />
  }

  const isResetDisabled = discountAmount === 0

  return (
    <div className='flex min-h-dvh flex-col bg-gray-000 pb-18'>
      <Header variant='sub' title='주문/결제' />

      <Divider className='bg-gray-100' />
      <BookingSummaryCard headcount={reservation.ticketCounts} />
      <Divider />

      <img
        src={photoCardGuide}
        alt='포토카드 구매 방법 안내'
        width={375}
        height={167}
        className='block h-[167px] w-full'
      />

      <DiscountPointSection
        options={DISCOUNT_OPTIONS}
        isResetDisabled={isResetDisabled}
        onLPointLookup={() => setDiscountAmount(LPOINT_DISCOUNT_AMOUNT)}
        onReset={() => setDiscountAmount(0)}
      />

      <Divider />

      <section aria-label='결제 수단' className='px-4.5 py-5'>
        <PaymentMethodGroup value={paymentMethod} onChange={setPaymentMethod} />
      </section>

      <Divider />

      <img
        src={paymentBenefit}
        alt='결제수단 혜택 안내'
        width={375}
        height={113}
        className='block h-[113px] w-full'
      />

      <PaymentSummaryBar
        ticketAmount={reservation.totalAmount}
        discountAmount={discountAmount}
        finalAmount={reservation.totalAmount - discountAmount}
        className='fixed bottom-0 left-1/2 z-20 w-[375px] -translate-x-1/2'
      />
    </div>
  )
}
