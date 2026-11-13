import { cn } from '@shared/utils/cn'

interface TheaterItemProps {
  name: string
  onClick: () => void
  className?: string
}

export const TheaterItem = ({ name, onClick, className }: TheaterItemProps) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className={cn(
        'flex h-12 w-full items-center border-y border-gray-200 bg-gray-100 px-[18px] py-4 text-left active:bg-gray-300',
        className,
      )}>
      <span className='typo-b1-r text-gray-1000'>{name}</span>
    </button>
  )
}
