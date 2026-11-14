import { cn } from '@shared/utils/cn'

interface RegionItemProps {
  name: string
  theaterCount: number
  isSelected: boolean
  onClick: () => void
  className?: string
}

export const RegionItem = ({
  name,
  theaterCount,
  isSelected,
  onClick,
  className,
}: RegionItemProps) => {
  return (
    <button
      type='button'
      aria-pressed={isSelected}
      onClick={onClick}
      className={cn(
        'flex h-12 w-full items-center gap-1 border-y border-gray-200 px-[18px] py-4 text-left active:bg-gray-300',
        isSelected ? 'bg-gray-100' : 'bg-gray-000',
        className,
      )}>
      <span className={isSelected ? 'typo-b1-m text-gray-1000' : 'typo-b1-r text-gray-1000'}>
        {name}
      </span>
      <span className='typo-c1-r text-gray-600'>({theaterCount})</span>
    </button>
  )
}
