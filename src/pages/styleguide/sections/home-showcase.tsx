import { BottomNavBar } from '@pages/home/components/bottom-nav-bar/bottom-nav-bar'

import { ShowcaseSection } from './showcase-section'

export const HomeShowcase = () => (
  <ShowcaseSection title='Home'>
    <div className='col-span-2 max-w-[375px]'>
      <BottomNavBar />
    </div>
  </ShowcaseSection>
)
