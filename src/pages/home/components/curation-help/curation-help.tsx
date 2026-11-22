import { useId, useRef, useState } from 'react'

import { useClickOutside } from '@shared/hooks/use-click-outside'
import { BadgeLottePickIcon, BadgeLottePlIcon, TooltipIcon } from '@shared/icons'
import { cn } from '@shared/utils/cn'

const CURATION_ITEMS = [
  {
    id: 'lotte-pick',
    Icon: BadgeLottePickIcon,
    sentences: [
      '롯데시네마가 엄선한 단독 개봉작 라인업입니다.',
      '재개봉 영화, 애니메이션, 숏드라마 등을 단독 상영합니다.',
    ],
  },
  {
    id: 'lotte-pl',
    Icon: BadgeLottePlIcon,
    sentences: [
      '공연 실황, VR 콘서트, 팬미팅, 라이브 중계 등 일반적인 영화 외에 플레이 콘텐츠를 제공하는 라인업입니다.',
    ],
  },
]

interface CurationHelpProps {
  placement?: 'default' | 'exclusive'
}

export const CurationHelp = ({ placement = 'default' }: CurationHelpProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const tooltipId = useId()

  useClickOutside(containerRef, () => setIsOpen(false), isOpen)

  return (
    <div ref={containerRef} className='relative inline-flex h-fit shrink-0'>
      <button
        type='button'
        aria-label='큐레이션 안내 보기'
        aria-expanded={isOpen}
        aria-controls={isOpen ? tooltipId : undefined}
        onClick={() => setIsOpen((open) => !open)}
        className='flex h-5 w-5 items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'>
        <TooltipIcon aria-hidden='true' className='h-5 w-5' />
      </button>

      {isOpen && (
        <div
          id={tooltipId}
          className={cn(
            'absolute top-full z-30 flex w-[272px] flex-col gap-2 rounded-lg bg-gray-000 p-3 shadow-[0_0_8px_0_rgba(0,0,0,0.12)]',
            placement === 'exclusive' ? 'right-[-4px] mt-[11px]' : 'right-0 mt-2',
          )}>
          {CURATION_ITEMS.map(({ id, Icon, sentences }) => (
            <section key={id} className='flex flex-col items-start gap-1'>
              <span className='flex h-5 w-9 items-center justify-center rounded-[4px] border-[0.5px] border-gray-100'>
                <Icon aria-hidden='true' />
              </span>

              <div className='typo-c3-m break-keep text-gray-700'>
                {sentences.map((sentence) => (
                  <p key={sentence}>{sentence}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  )
}
