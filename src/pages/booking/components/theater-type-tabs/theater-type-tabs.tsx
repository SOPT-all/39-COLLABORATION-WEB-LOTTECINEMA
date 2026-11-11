import { useState } from 'react'

import { cn } from '@shared/utils/cn'

type TheaterType = 'all' | 'special'

const theaterTypes: { id: TheaterType; label: string }[] = [
  { id: 'all', label: '전체' },
  { id: 'special', label: '스페셜관' },
]

export const TheaterTypeTabs = () => {
  const [selectedType, setSelectedType] = useState<TheaterType>('all')

  return (
    <div role='group' aria-label='영화관 유형' className='inline-flex'>
      {theaterTypes.map(({ id, label }) => {
        const isSelected = selectedType === id

        return (
          <button
            key={id}
            type='button'
            aria-pressed={isSelected}
            onClick={() => setSelectedType(id)}
            className={cn(
              'border-b-[1.5px] border-solid p-2 text-center typo-c3-m transition-colors',
              isSelected ? 'border-gray-900 text-gray-1000' : 'border-gray-300 text-gray-300',
            )}>
            {label}
          </button>
        )
      })}
    </div>
  )
}
