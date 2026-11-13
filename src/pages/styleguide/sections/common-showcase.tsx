import { Button } from '@shared/components/button/button'

import { ShowcaseSection } from './showcase-section'

export const CommonShowcase = () => (
  <ShowcaseSection title='Common'>
    <Button variant='primary'>Primary</Button>
    <Button variant='secondary'>Secondary</Button>
    <Button variant='dark'>Dark</Button>
    <Button variant='primary' size='small'>
      Small
    </Button>
    <Button variant='cta'>CTA</Button>
  </ShowcaseSection>
)
