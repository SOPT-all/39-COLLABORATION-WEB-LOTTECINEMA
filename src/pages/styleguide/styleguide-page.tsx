import { ColorSection } from './foundations/color-section'
import { TypographySection } from './foundations/typography-section'
import { BookingShowcase } from './sections/booking-showcase'
import { CommonShowcase } from './sections/common-showcase'
import { HomeShowcase } from './sections/home-showcase'
import { PaymentShowcase } from './sections/payment-showcase'
import { SeatSelectionShowcase } from './sections/seat-selection-showcase'

export const StyleguidePage = () => (
  <main className='fixed inset-0 z-50 overflow-auto bg-gray-050 text-gray-1000'>
    <div className='mx-auto max-w-6xl px-4 py-8'>
      <header className='mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-4'>
        <h1 className='m-0 typo-t2-b'>Design System</h1>
        <nav className='flex gap-4 typo-b1-m' aria-label='스타일 가이드 목차'>
          <a href='#colors'>Colors</a>
          <a href='#typography'>Typography</a>
          <a href='#components'>Components</a>
        </nav>
      </header>

      <div className='space-y-10'>
        <ColorSection />
        <TypographySection />
        <section id='components' className='scroll-mt-6'>
          <h2 className='m-0 typo-t2-b'>Components</h2>
          <div className='mt-10 space-y-8'>
            <CommonShowcase />
            <BookingShowcase />
            <SeatSelectionShowcase />
            <PaymentShowcase />
            <HomeShowcase />
          </div>
        </section>
      </div>
    </div>
  </main>
)
