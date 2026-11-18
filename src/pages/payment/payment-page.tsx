import { useState } from 'react'

import { Header } from '@shared/components/header/header'

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

// TODO: 좌석 예매 POST 연결 후 응답의 data.totalAmount로 교체
const MOCK_TICKET_AMOUNT = 30000
const LPOINT_DISCOUNT_AMOUNT = 1000

export const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(null)
  const [isResetDisabled, setIsResetDisabled] = useState(true)
  const [discountAmount, setDiscountAmount] = useState(0)

  return (
    <div className='flex min-h-dvh flex-col bg-gray-000 pb-[65px]'>
      <Header variant='sub' title='주문/결제' className='h-[50px]' />

      <div aria-hidden='true' className='h-[5px] bg-gray-100' />
      <BookingSummaryCard />
      <div aria-hidden='true' className='h-[5px] bg-gray-050' />

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
        onLPointLookup={() => {
          setDiscountAmount(LPOINT_DISCOUNT_AMOUNT)
          setIsResetDisabled(false)
        }}
        onReset={() => {
          setDiscountAmount(0)
          setIsResetDisabled(true)
        }}
      />

      <div aria-hidden='true' className='h-[5px] bg-gray-050' />

      <section aria-label='결제 수단' className='px-4.5 py-5'>
        <PaymentMethodGroup value={paymentMethod} onChange={setPaymentMethod} />
      </section>

      <PaymentSummaryBar
        ticketAmount={MOCK_TICKET_AMOUNT}
        discountAmount={discountAmount}
        finalAmount={MOCK_TICKET_AMOUNT - discountAmount}
        className='fixed bottom-0 left-1/2 z-20 h-[65px] w-[375px] -translate-x-1/2'
      />
    </div>
  )
}
