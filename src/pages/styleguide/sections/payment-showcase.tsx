import { PriceSummaryCard } from '@pages/payment/components/price-summary-card/price-summary-card'

import { ShowcaseSection } from './showcase-section'

export const PaymentShowcase = () => (
  <ShowcaseSection title='Payment'>
    <div className='col-span-2'>
      <PriceSummaryCard ticketAmount={30000} discountAmount={0} finalAmount={30000} />
    </div>
  </ShowcaseSection>
)
