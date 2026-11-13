import { useEffect, useRef } from 'react'
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
  ariaLabel: string
}

export const BottomSheet = ({
  isOpen,
  onClose,
  header,
  children,
  footer,
  isBackdropClosable = true,
  className,
  ariaLabel,
}: BottomSheetProps) => {
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const previousFocusedElement =
      document.activeElement instanceof HTMLElement ? document.activeElement : null

    dialogRef.current?.focus()

    return () => {
      previousFocusedElement?.focus()
    }
  }, [isOpen])

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
        ref={dialogRef}
        role='dialog'
        aria-modal='true'
        aria-label={ariaLabel}
        tabIndex={-1}
        className={cn(
          'relative flex max-h-[90dvh] w-full flex-col overflow-hidden rounded-t-2xl bg-gray-000 outline-none',
          className,
        )}>
        {header}
        <div className='min-h-0 flex-1 overflow-y-auto'>{children}</div>
        {footer && <div className='shrink-0 px-[22px] pt-4 pb-5'>{footer}</div>}
      </div>
    </div>
  )
}
