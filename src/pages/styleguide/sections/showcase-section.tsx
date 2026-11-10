import type { ReactNode } from 'react'

interface ShowcaseSectionProps {
  title: string
  children?: ReactNode
}

export const ShowcaseSection = ({ title, children }: ShowcaseSectionProps) => (
  <section className='rounded-lg border border-gray-100 p-4'>
    <h3 className='m-0 typo-b2-b'>{title}</h3>
    {children && <div className='mt-4 grid grid-cols-2 gap-3'>{children}</div>}
  </section>
)
