import { cn } from '@shared/utils/cn'

import poster from '../../assets/chiikawa-poster.png'

interface ShowtimeInfoProps {
  onClose?: () => void
  className?: string
}

export const ShowtimeInfo = ({ onClose, className }: ShowtimeInfoProps) => (
  <div
    className={cn(
      'flex items-center gap-4 rounded-[16px_16px_0_0] bg-gray-050 px-5 py-2.5',
      className,
    )}>
    <img src={poster} alt='' className='h-[62px] w-[44px] shrink-0 rounded object-cover' />

    <div className='flex min-w-0 flex-1 flex-col gap-0.5'>
      <h2 className='truncate typo-b2-m text-gray-1000'>극장판 치이카와: 인어섬의 비밀(2D)</h2>
      <p className='typo-c2-m text-gray-700'>26. 10.27(화) · 14:25 ~ 16:14 (109분)</p>
      <p className='typo-c2-m text-gray-700'>용산 · 4관 리클라이너(4층)</p>
    </div>

    {onClose && (
      <button
        type='button'
        onClick={onClose}
        className='inline-flex shrink-0 items-center justify-center rounded-full border border-gray-900 px-3 py-1.5 typo-c2-m text-gray-900'>
        닫기
      </button>
    )}
  </div>
)
