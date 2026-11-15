import { MinusIcon, PlusIcon } from '@shared/icons'
import { cn } from '@shared/utils/cn'

interface CountStepperProps {
  label: string
  min?: number
  max?: number
  onChange: (value: number) => void
  count: number
  className?: string
}

const buttonStyle = 'flex items-center rounded-full size-[23px] justify-center bg-gray-000'

export const CountStepper = ({
  label,
  min = 0,
  max = Infinity,
  onChange,
  count,
  className,
}: CountStepperProps) => {
  const isMin = count <= min
  const isMax = count >= max

  return (
    <div className={cn('flex items-center justify-between', className)}>
      <span className='flex typo-b1-r text-gray-1000'>{label}</span>

      <div className='flex items-center gap-[13px] rounded-full bg-gray-100 p-[9px]'>
        <button
          type='button'
          onClick={() => onChange(count - 1)}
          className={buttonStyle}
          disabled={isMin}
          aria-label={`${label} 인원 줄이기`}>
          <MinusIcon aria-hidden className='h-px w-[9px]' />
        </button>
        <span className='self-start typo-b2-m text-gray-1000' aria-live='polite'>
          {count}
        </span>

        <button
          type='button'
          onClick={() => onChange(count + 1)}
          className={buttonStyle}
          disabled={isMax}
          aria-label={`${label} 인원 늘리기`}>
          <PlusIcon aria-hidden className='size-[9px]' />
        </button>
      </div>
    </div>
  )
}
