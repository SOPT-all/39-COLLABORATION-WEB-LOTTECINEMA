import { LPointButtonGroup } from '@pages/payment/components/lpoint-button-group/lpoint-button-group'
import { ResetButton } from '@pages/payment/components/reset-button/reset-button'

import { ShowcaseSection } from './showcase-section'

export const PaymentShowcase = () => (
  <ShowcaseSection title='Payment'>
    {/* ResetButton의 기본 상태와 비활성 상태 */}
    <div className='col-span-2 flex flex-col gap-3'>
      <h4 className='m-0 typo-c2-m text-gray-1000'>초기화 버튼</h4>
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
    </div>

    {/* L.point 버튼 그룹 */}
    <div className='col-span-2 flex flex-col gap-3'>
      <h4 className='m-0 typo-c2-m text-gray-1000'>LPoint 버튼</h4>
      <LPointButtonGroup />
    </div>
  </ShowcaseSection>
)
