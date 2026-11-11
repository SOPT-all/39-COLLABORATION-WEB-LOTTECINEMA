import { TheaterTypeTabs } from '@pages/booking/components/theater-type-tabs/theater-type-tabs'

import { ShowcaseSection } from './showcase-section'

export const BookingShowcase = () => (
  <ShowcaseSection title='Booking'>
    <div className='col-span-2'>
      <TheaterTypeTabs />
      <p className='mt-3 typo-c2-m text-gray-700'>
        선택 상태만 변경됩니다. 실제 영화관 목록 필터링은 동작하지 않습니다.
      </p>
    </div>
  </ShowcaseSection>
)
