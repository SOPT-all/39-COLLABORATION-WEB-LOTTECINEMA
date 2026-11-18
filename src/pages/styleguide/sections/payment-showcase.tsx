import { useState } from 'react'

import { BookingSummaryCard } from '@pages/payment/components/booking-summary-card/booking-summary-card'
import { DiscountButton } from '@pages/payment/components/discount-button/discount-button'
import { DiscountPointSection } from '@pages/payment/components/discount-point-section/discount-point-section'
import { LPointButtonGroup } from '@pages/payment/components/lpoint-button-group/lpoint-button-group'
import { PayButton } from '@pages/payment/components/pay-button/pay-button'
import { PaymentMethodGroup } from '@pages/payment/components/payment-method-group/payment-method-group'
import { PaymentSummaryBar } from '@pages/payment/components/payment-summary-bar/payment-summary-bar'
import { ResetButton } from '@pages/payment/components/reset-button/reset-button'
import type { DiscountOption } from '@pages/payment/types/discount-option'
import type { PaymentMethod } from '@pages/payment/types/payment-method'

import { ShowcaseSection } from './showcase-section'

const DISCOUNT_OPTIONS: DiscountOption[] = [
  { id: 'vip', label: 'VIP', count: 0, disabled: true },
  { id: 'ticket', label: '관람권', count: 1, disabled: true },
  { id: 'coupon', label: '할인권', count: 0, disabled: true },
  { id: 'partner', label: '제휴포인트/할인', disabled: true },
]

export const PaymentShowcase = () => {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(null)
  const [isResetDisabled, setIsResetDisabled] = useState(true)

  return (
    <ShowcaseSection title='Payment'>
      {/* 하단 가격 요약 바 */}
      <div className='col-span-2 flex flex-col gap-3'>
        <h4 className='m-0 typo-c2-m text-gray-1000'>결제 요약 바</h4>
        <div className='mx-auto w-[375px] max-w-sm'>
          <PaymentSummaryBar ticketAmount={30000} discountAmount={0} finalAmount={30000} />
        </div>
      </div>

      {/* ResetButton의 기본 상태와 비활성 상태 */}
      <div className='col-span-2 flex flex-col gap-3'>
        <h4 className='m-0 typo-c2-m text-gray-1000'>초기화 버튼</h4>
        <div role='group' aria-label='초기화 버튼 예시' className='flex gap-6'>
          {[false, true].map((disabled) => (
            <div key={String(disabled)} className='flex flex-col items-center gap-3'>
              <ResetButton disabled={disabled} />
              <span className='text-center typo-c1-r text-gray-700'>
                {disabled ? 'Disabled' : 'Default'}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 결제 수단 버튼 그룹 */}
      <div className='col-span-2 flex flex-col gap-3'>
        <h4 className='m-0 typo-c2-m text-gray-1000'>결제 수단 버튼</h4>
        <PaymentMethodGroup value={paymentMethod} onChange={setPaymentMethod} />
      </div>

      {/* 개별 할인/포인트 컴포넌트 */}
      <div className='col-span-2 flex flex-col gap-3'>
        <h4 className='m-0 typo-c2-m text-gray-1000'>할인 버튼</h4>
        <div role='group' aria-label='할인 버튼 예시' className='flex gap-3'>
          <DiscountButton label='VIP' count={0} disabled />
          <DiscountButton label='관람권' count={1} disabled />
          <DiscountButton label='할인권' count={0} disabled />
        </div>
      </div>

      <div className='col-span-2 flex flex-col gap-3'>
        <h4 className='m-0 typo-c2-m text-gray-1000'>LPoint 버튼</h4>
        <div className='w-[375px]'>
          <LPointButtonGroup />
        </div>
      </div>

      <div className='col-span-2 flex flex-col gap-3'>
        <h4 className='m-0 typo-c2-m text-gray-1000'>결제하기 버튼</h4>
        <PayButton />
      </div>

      {/* 할인/포인트 섹션: 조회 및 초기화 상태 확인용 */}
      <div className='col-span-2 flex flex-col gap-3'>
        <h4 className='m-0 typo-c2-m text-gray-1000'>할인/포인트 섹션</h4>
        <div className='w-[375px]'>
          <DiscountPointSection
            options={DISCOUNT_OPTIONS}
            isResetDisabled={isResetDisabled}
            onLPointLookup={() => setIsResetDisabled(false)}
            onReset={() => setIsResetDisabled(true)}
          />
        </div>
      </div>

      <div className='col-span-2 flex flex-col gap-3'>
        <h4 className='m-0 typo-c2-m text-gray-1000'>예매 정보 카드</h4>
        <BookingSummaryCard />
      </div>
    </ShowcaseSection>
  )
}
