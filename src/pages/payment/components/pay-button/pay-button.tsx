import type { ComponentProps } from 'react'

type PayButtonProps = ComponentProps<'button'>

export const PayButton = (props: PayButtonProps) => {
  return (
    <button
      type='button'
      className='flex h-16 w-[140px] items-center justify-center bg-primary typo-b2-m text-gray-000'
      {...props}>
      결제하기
    </button>
  )
}
