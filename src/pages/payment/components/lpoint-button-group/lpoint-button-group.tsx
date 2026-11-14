import { cn } from '@shared/utils/cn'

interface LPointButtonGroupProps {
  onLookupClick?: () => void
  onCardNumberClick?: () => void
  className?: string
}

const buttonStyle = 'flex flex-1 items-center justify-center gap-1 py-3'

export const LPointButtonGroup = ({
  onLookupClick,
  onCardNumberClick,
  className,
}: LPointButtonGroupProps) => {
  return (
    <div className={cn('flex w-full rounded-sm border border-gray-1000 typo-b1-r', className)}>
      <button className={buttonStyle} type='button' onClick={onLookupClick}>
        <span>L.POINT</span>
        <span className='text-text-link'>조회</span>
      </button>

      <button
        className={cn(buttonStyle, 'border-l border-gray-200')}
        type='button'
        onClick={onCardNumberClick}>
        <span>L.POINT</span>
        <span>카드번호</span>
      </button>
    </div>
  )
}
