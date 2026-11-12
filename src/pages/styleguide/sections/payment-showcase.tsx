import { PayButton } from '@pages/payment/components/pay-button/pay-button'

import { ShowcaseSection } from './showcase-section'

export const PaymentShowcase = () => (
  <ShowcaseSection title='Payment'>
    <div className='col-span-2'>
      <PayButton />
    </div>
  </ShowcaseSection>
)
