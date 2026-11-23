import { cn } from '@shared/utils/cn'

interface TheaterItemProps {
  name: string
  onClick: () => void
  className?: string
  disabled?: boolean
}

export const TheaterItem = ({ name, onClick, className, disabled }: TheaterItemProps) => {
  return (
    <button
      type='button'
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'flex h-12 w-full items-center border-b border-gray-200 bg-gray-100 px-[18px] text-left',
        className,
      )}>
      <span className={cn('typo-b1-r text-gray-1000', disabled && 'text-gray-300')}>{name}</span>
    </button>
  )
}
