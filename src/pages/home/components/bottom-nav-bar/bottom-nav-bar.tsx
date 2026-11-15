import { EventIcon, MenuIcon, MyIcon, ShowtimeIcon } from '@shared/icons'

interface NavItemConfig {
  label: string
  Icon?: typeof EventIcon
  featured?: boolean
}

const navItems: NavItemConfig[] = [
  { label: '이벤트', Icon: EventIcon },
  { label: '상영시간표', Icon: ShowtimeIcon },
  { label: '예매', featured: true },
  { label: '마이', Icon: MyIcon },
  { label: '메뉴', Icon: MenuIcon },
]

const navItemClassName = 'flex min-w-0 flex-1 flex-col items-center py-2 text-gray-900'
const featuredClassName = 'flex shrink-0 items-center justify-center px-1'

const NavItem = ({ label, Icon, featured = false }: NavItemConfig) => (
  <button type='button' disabled className={featured ? featuredClassName : navItemClassName}>
    {featured ? (
      <span className='flex size-12 items-center justify-center rounded-full bg-primary typo-t1-b text-gray-000 shadow-[0_3px_2.5px_rgba(255,36,62,0.2),inset_0_4px_4px_rgba(0,0,0,0.12)]'>
        {label}
      </span>
    ) : (
      <>
        {Icon && <Icon aria-hidden='true' />}
        <span className='typo-c2-m whitespace-nowrap'>{label}</span>
      </>
    )}
  </button>
)

export const BottomNavBar = () => (
  <nav
    aria-label='홈 메뉴'
    className='flex w-full items-center gap-1.5 bg-gray-000 px-5 pt-2 pb-3 shadow-[0_-2px_4px_rgba(0,0,0,0.05)]'>
    {navItems.map((item) => (
      <NavItem key={item.label} {...item} />
    ))}
  </nav>
)
