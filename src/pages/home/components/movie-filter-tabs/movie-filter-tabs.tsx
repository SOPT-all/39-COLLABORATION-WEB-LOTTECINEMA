import { Fragment } from 'react'

import { cn } from '@shared/utils/cn'

interface MovieFilterTabsProps<T extends string> {
  tabs: readonly T[]
  selectedTab: T
  onTabChange: (tab: T) => void
}

export const MovieFilterTabs = <T extends string>({
  tabs,
  selectedTab,
  onTabChange,
}: MovieFilterTabsProps<T>) => {
  return (
    <div className='flex items-center'>
      {tabs.map((tab, index) => (
        <Fragment key={tab}>
          <button
            type='button'
            aria-pressed={selectedTab === tab}
            className={cn(
              'p-2',
              'typo-c3-m',
              selectedTab === tab ? 'text-gray-1000' : 'text-gray-700',
            )}
            onClick={() => onTabChange(tab)}>
            {tab}
          </button>

          {index < tabs.length - 1 && (
            <div aria-hidden='true' className='h-[7px] w-px shrink-0 rounded-[1px] bg-gray-600' />
          )}
        </Fragment>
      ))}
    </div>
  )
}
