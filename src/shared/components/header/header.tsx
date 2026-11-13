import { Link, useNavigate } from 'react-router'

import { ROUTE_PATH } from '@app/router/path'

import { BackIcon, HomeIcon, LotteCinemaLogo, MyPageIcon, TicketIcon } from '@shared/icons'
import { cn } from '@shared/utils/cn'

// variant가 main인 경우 or title 들어간 sub인 경우
type HeaderProps = { className?: string } & (
  { variant: 'main' } | { variant: 'sub'; title: string }
)

const FOCUS_STYLE =
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current'

const MAIN_ICON_BUTTON_STYLE = cn('p-[5px]', FOCUS_STYLE)
const SUB_ICON_BUTTON_STYLE = cn('p-2', FOCUS_STYLE)

export const Header = (props: HeaderProps) => {
  return (
    <header
      className={cn(
        'sticky top-0 z-10 w-full text-gray-1000',
        // main은 배경 없이, sub는 흰 배경
        props.variant === 'sub' && 'bg-gray-000',
        props.className,
      )}>
      {props.variant === 'main' ? <MainHeaderContent /> : <SubHeaderContent title={props.title} />}
    </header>
  )
}

const MainHeaderContent = () => {
  return (
    <div className='flex h-full items-center justify-between px-5'>
      <div className='flex pt-1'>
        <Link to={ROUTE_PATH.HOME} aria-label='롯데시네마 홈으로 이동' className={FOCUS_STYLE}>
          <LotteCinemaLogo aria-hidden />
        </Link>
      </div>

      <div className='flex items-center gap-0.5 pt-[10.5px] pb-[5.5px]'>
        <button type='button' aria-label='티켓' className={MAIN_ICON_BUTTON_STYLE}>
          <TicketIcon className='size-6' aria-hidden />
        </button>
        <button type='button' aria-label='마이페이지' className={MAIN_ICON_BUTTON_STYLE}>
          <MyPageIcon className='size-6' aria-hidden />
        </button>
      </div>
    </div>
  )
}

const SubHeaderContent = ({ title }: { title: string }) => {
  const navigate = useNavigate()

  return (
    // 좌우 열을 1fr로 맞춰 타이틀이 항상 정중앙에 오도록 한다
    <div className='grid h-full grid-cols-[1fr_auto_1fr] items-center px-1 py-[5px]'>
      <button
        type='button'
        aria-label='뒤로 가기'
        onClick={() => navigate(-1)}
        className={cn('justify-self-start', SUB_ICON_BUTTON_STYLE)}>
        <BackIcon className='size-6' aria-hidden />
      </button>
      <h1 className='m-0 truncate typo-t1-r'>{title}</h1>
      <Link
        to={ROUTE_PATH.HOME}
        aria-label='홈으로 이동'
        className={cn('justify-self-end', SUB_ICON_BUTTON_STYLE)}>
        <HomeIcon className='size-6' aria-hidden />
      </Link>
    </div>
  )
}
