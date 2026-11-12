import { PayButton } from '@pages/payment/components/pay-button/pay-button'
import { ResetButton } from '@pages/payment/components/reset-button/reset-button'

import { ShowcaseSection } from './showcase-section'

export const PaymentShowcase = () => (
  <ShowcaseSection title='Payment'>
    <div className='col-span-2'>
      <PayButton />
    </div>
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
  </ShowcaseSection>
)
