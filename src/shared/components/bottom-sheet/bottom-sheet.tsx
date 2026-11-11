import type { ReactNode } from 'react'

import { cn } from '@shared/utils/cn'

interface BottomSheetProps {
  isOpen: boolean
  onClose: () => void
  header?: ReactNode
  children: ReactNode
  footer?: ReactNode
  isBackdropClosable?: boolean
  className?: string
}

export const BottomSheet = ({
  isOpen,
  onClose,
  header,
  children,
  footer,
  isBackdropClosable = true,
  className,
}: BottomSheetProps) => {
  if (!isOpen) {
    return null
  }

  return (
    <div className='fixed inset-0 z-50 mx-auto flex w-[375px] flex-col justify-end'>
      {isBackdropClosable ? (
        <button
          type='button'
          aria-label='바텀시트 닫기'
          className='absolute inset-0 bg-gray-1000/60'
          onClick={onClose}
        />
      ) : (
        <div aria-hidden='true' className='absolute inset-0 bg-gray-1000/60' />
      )}
      <div
        role='dialog'
        aria-modal='true'
        className={cn(
          'relative flex max-h-[90dvh] w-full flex-col overflow-hidden rounded-t-2xl bg-gray-000',
          className,
        )}>
        {header}
        <div className='min-h-0 flex-1 overflow-y-auto'>{children}</div>
        {footer}
      </div>
    </div>
  )
}
