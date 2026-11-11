import type { ReactNode } from 'react'

import { cn } from '@shared/utils/cn'

interface BottomSheetProps {
  isOpen: boolean
  onClose: () => void
  header?: ReactNode
  children: ReactNode
  footer?: ReactNode
  className?: string
}

export const BottomSheet = ({
  isOpen,
  onClose,
  header,
  children,
  footer,
  className,
}: BottomSheetProps) => {
  if (!isOpen) {
    return null
  }

  return (
    <div className='fixed inset-0 z-50 mx-auto flex w-[375px] flex-col justify-end'>
      <button
        type='button'
        aria-label='바텀시트 닫기'
        className='absolute inset-0 bg-gray-1000/60'
        onClick={onClose}
      />
      <div
        role='dialog'
        aria-modal='true'
        className={cn('relative w-full overflow-hidden rounded-t-2xl bg-gray-000', className)}>
        {header}
        {children}
        {footer}
      </div>
    </div>
  )
}
