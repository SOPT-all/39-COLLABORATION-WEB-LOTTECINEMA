import { useEffect, useId, useRef, useState } from 'react'

import { ArrowDownIcon } from '@shared/icons'
import { cn } from '@shared/utils/cn'

import type { BookingRegion } from '../../types/theater'

type DropdownState =
  { step: 'closed' } | { step: 'regions' } | { step: 'theaters'; regionId: number }

interface TheaterDropdownProps {
  regions: BookingRegion[]
  className?: string
}

const CLOSED_STATE: DropdownState = { step: 'closed' }
const PANEL_CLASS =
  'pointer-events-auto w-[166px] [scrollbar-width:none] overflow-x-hidden overflow-y-auto rounded-[10px] bg-gray-000 shadow-[0_0_4px_rgba(0,0,0,0.25)] [&::-webkit-scrollbar]:hidden'

interface DropdownItemProps {
  children: string
  onClick: () => void
  selected?: boolean
}

const DropdownItem = ({ children, onClick, selected = false }: DropdownItemProps) => (
  <li>
    <button
      type='button'
      aria-current={selected ? 'true' : undefined}
      onClick={onClick}
      className={cn(
        'flex min-h-[33px] w-full items-center px-4 py-2 typo-b1-r text-gray-700',
        selected ? 'bg-gray-100' : 'bg-gray-000 active:bg-gray-100',
      )}>
      <span className='truncate'>{children}</span>
    </button>
  </li>
)

export const TheaterDropdown = ({ regions, className }: TheaterDropdownProps) => {
  const [dropdown, setDropdown] = useState<DropdownState>(CLOSED_STATE)
  const rootRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const dropdownId = useId()
  const isOpen = dropdown.step !== 'closed'
  const selectedRegionId = dropdown.step === 'theaters' ? dropdown.regionId : undefined
  const activeRegion = regions.find(({ regionId }) => regionId === selectedRegionId)

  useEffect(() => {
    if (!isOpen) return

    const handleOutside = (event: Event) => {
      if (event.target instanceof Node && !rootRef.current?.contains(event.target)) {
        setDropdown(CLOSED_STATE)
      }
    }

    document.addEventListener('pointerdown', handleOutside)
    document.addEventListener('focusin', handleOutside)

    return () => {
      document.removeEventListener('pointerdown', handleOutside)
      document.removeEventListener('focusin', handleOutside)
    }
  }, [isOpen])

  const handleToggleClick = () => {
    setDropdown((current) => (current.step === 'closed' ? { step: 'regions' } : CLOSED_STATE))
  }

  return (
    <div ref={rootRef} className={cn('relative inline-flex', className)}>
      <button
        ref={triggerRef}
        type='button'
        aria-expanded={isOpen}
        aria-controls={isOpen ? dropdownId : undefined}
        onClick={handleToggleClick}
        className='inline-flex items-center justify-center gap-1.5 rounded-lg border-[1.5px] border-gray-200 bg-gray-000 px-3 py-2 typo-c3-m text-gray-600'>
        영화관 변경
        <ArrowDownIcon
          aria-hidden='true'
          className={cn('size-4 transition-transform duration-300 ease-in', isOpen && 'rotate-180')}
        />
      </button>

      {isOpen && (
        <div
          id={dropdownId}
          className='pointer-events-none absolute top-full left-0 z-20 mt-1 flex items-start gap-2'>
          <ul aria-label='지역 선택' className={cn(PANEL_CLASS, 'max-h-[320px]')}>
            {regions.map(({ regionId, regionName }) => {
              const isSelected = selectedRegionId === regionId

              return (
                <DropdownItem
                  key={regionId}
                  selected={isSelected}
                  onClick={() => setDropdown({ step: 'theaters', regionId })}>
                  {regionName}
                </DropdownItem>
              )
            })}
          </ul>

          {dropdown.step === 'theaters' && (
            <ul
              aria-label={`${activeRegion?.regionName ?? '선택한 지역'} 영화관`}
              className={cn(PANEL_CLASS, 'max-h-[214px]')}>
              {activeRegion && activeRegion.cinemas.length > 0 ? (
                activeRegion.cinemas.map(({ cinemaId, cinemaName }) => (
                  <DropdownItem
                    key={cinemaId}
                    onClick={() => {
                      triggerRef.current?.focus()
                      setDropdown(CLOSED_STATE)
                    }}>
                    {cinemaName}
                  </DropdownItem>
                ))
              ) : (
                <li className='px-4 py-3 typo-b1-r text-gray-600'>해당 지역의 영화관이 없습니다</li>
              )}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}
