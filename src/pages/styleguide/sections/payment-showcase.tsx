import { useState } from 'react'

import { PaymentMethodGroup } from '@pages/payment/components/payment-method-group/payment-method-group'
import { ResetButton } from '@pages/payment/components/reset-button/reset-button'
import type { PaymentMethod } from '@pages/payment/types/payment-method'

import { ShowcaseSection } from './showcase-section'

export const PaymentShowcase = () => {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(null)

  return (
    <ShowcaseSection title='Payment'>
      {/* ResetButton의 기본 상태와 비활성 상태 */}
      <div role='group' aria-label='초기화 버튼 예시' className='col-span-2 flex gap-6'>
        {[false, true].map((disabled) => (
          <div key={String(disabled)} className='flex flex-col items-center gap-3'>
            <ResetButton disabled={disabled} />
            <span className='text-center typo-c1-r text-gray-700'>
              {disabled ? 'Disabled' : 'Default'}
            </span>
          </div>
        ))}
      </div>

      {/* payment method group */}
      <div className='col-span-2 flex flex-col gap-3'>
        <h4 className='m-0 typo-c2-m text-gray-1000'>LPoint 버튼</h4>
        <PaymentMethodGroup value={paymentMethod} onChange={setPaymentMethod} />
      </div>
    </ShowcaseSection>
  )
}
