import { Fragment } from 'react'

import { cn } from '@shared/utils/cn'

type PopularTabs = '전체' | '상영중' | '개봉예정'
type OnlyLotteTabs = '롯시픽' | '롯시플'

interface MovieFilterTabsProps<T extends PopularTabs | OnlyLotteTabs> {
  tabs: T[]
  selectedTab: T
  onTabChange: (tab: T) => void
}

const MovieFilterTabs = <T extends PopularTabs | OnlyLotteTabs>({
  tabs,
  selectedTab,
  onTabChange,
}: MovieFilterTabsProps<T>) => {
  return (
    <div className='flex items-center gap-1'>
      {tabs.map((tab, index) => (
        <Fragment key={tab}>
          <button
            type='button'
            className={cn('typo-c3-m', selectedTab === tab ? 'text-gray-1000' : 'text-gray-700')}
            onClick={() => onTabChange(tab)}>
            {tab}
          </button>

          {index < tabs.length - 1 && (
            <div className='h-[7px] w-px shrink-0 rounded-[1px] bg-gray-600' />
          )}
        </Fragment>
      ))}
    </div>
  )
}

export default MovieFilterTabs
