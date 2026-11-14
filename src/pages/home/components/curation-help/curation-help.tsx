import { useEffect, useId, useRef, useState } from 'react'

import { BadgeLottePickIcon, BadgeLottePlIcon, TooltipIcon } from '@shared/icons'

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

export const CurationHelp = () => {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const tooltipId = useId()

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const handleOutside = (event: Event) => {
      if (event.target instanceof Node && !containerRef.current?.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('pointerdown', handleOutside)
    document.addEventListener('focusin', handleOutside)

    return () => {
      document.removeEventListener('pointerdown', handleOutside)
      document.removeEventListener('focusin', handleOutside)
    }
  }, [isOpen])

  return (
    <div ref={containerRef} className='relative inline-flex h-fit'>
      <button
        type='button'
        aria-label='큐레이션 안내 보기'
        aria-expanded={isOpen}
        aria-controls={isOpen ? tooltipId : undefined}
        onClick={() => setIsOpen((open) => !open)}
        className='focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'>
        <TooltipIcon aria-hidden='true' />
      </button>

      {isOpen && (
        <div
          id={tooltipId}
          className='absolute top-full right-0 z-30 mt-2 flex w-max max-w-[min(262px,calc(100vw-32px))] flex-col gap-2.5 rounded-xl bg-gray-000 p-3'>
          {CURATION_ITEMS.map(({ id, Icon, sentences }) => (
            <section key={id} className='flex flex-col items-start gap-1'>
              <span className='flex h-5 w-9 items-center justify-center rounded-[4px] border-[0.5px] border-gray-100'>
                <Icon aria-hidden='true' />
              </span>
              <div className='typo-c1-r break-keep text-gray-700'>
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
