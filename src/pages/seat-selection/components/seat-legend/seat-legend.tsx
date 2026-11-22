import {
  LegendAccessibleIcon,
  LegendDoorIcon,
  LegendReclinerIcon,
  SeatArrowBgIcon,
} from '@shared/icons'
import { cn } from '@shared/utils/cn'

const LEGEND_ITEMS = [
  { Icon: LegendReclinerIcon, label: '리클라이너' },
  { Icon: LegendAccessibleIcon, label: '장애인석' },
  { Icon: LegendDoorIcon, label: '출입문' },
]

interface SeatLegendProps {
  className?: string
}

export const SeatLegend = ({ className }: SeatLegendProps) => {
  return (
    <div
      className={cn(
        'flex h-[22px] items-center justify-between bg-gray-1000 pl-5.5 typo-c1-r text-gray-000',
        className,
      )}>
      <ul className='flex items-center gap-1'>
        {LEGEND_ITEMS.map(({ Icon, label }) => (
          <li key={label} className='flex items-center gap-1'>
            <Icon aria-hidden className='shrink-0' />
            {label}
          </li>
        ))}
      </ul>

      <button type='button' aria-label='좌석 범례 더보기'>
        <SeatArrowBgIcon aria-hidden />
      </button>
    </div>
  )
}
