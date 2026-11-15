import { CurationHelp } from '@pages/home/components/curation-help/curation-help'

import { ShowcaseSection } from './showcase-section'

export const HomeShowcase = () => (
  <ShowcaseSection title='Home'>
    <div className='col-span-2 mx-auto flex min-h-[180px] w-[375px]'>
      <CurationHelp />
    </div>
  </ShowcaseSection>
)
