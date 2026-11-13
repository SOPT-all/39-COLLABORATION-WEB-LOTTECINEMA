import { useId, useState } from 'react'

import { ArrowDownIcon } from '@shared/icons'
import { cn } from '@shared/utils/cn'

interface Movie {
  movieId: number
  title: string
}

interface MovieDropdownProps {
  movies: Movie[]
  className?: string
}

export const MovieDropdown = ({ movies, className }: MovieDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const listId = useId()

  return (
    <div className={cn('relative', className)}>
      <button
        type='button'
        aria-expanded={isOpen}
        aria-controls={listId}
        onClick={() => setIsOpen((prev) => !prev)}
        className='flex h-9 w-[99px] items-center justify-center gap-1.5 rounded-[8px] border-[1.5px] border-gray-600 bg-gray-1000/60 px-3 py-2 typo-c3-m text-gray-000'>
        영화 변경
        <ArrowDownIcon
          aria-hidden='true'
          className={cn('size-4 transition-transform duration-300 ease-in', isOpen && 'rotate-180')}
        />
      </button>

      {isOpen && (
        <ul
          id={listId}
          className='absolute top-10 right-0 z-10 max-h-[99px] w-[165px] overflow-y-auto rounded-[10px] bg-gray-1000/60 shadow-[0_0_4px_rgba(0,0,0,0.25)]'>
          {movies.map(({ movieId, title }) => (
            <li
              key={movieId}
              className='flex h-[33px] items-center px-[15px] typo-b1-r text-gray-000'>
              {title}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
