import type { ComponentProps } from 'react'

type PayButtonProps = ComponentProps<'button'>

export const PayButton = (props: PayButtonProps) => {
  return (
    <button
      type='button'
      className='inline-flex h-16 items-center justify-center bg-primary px-[42px] typo-b2-m text-gray-000'
      {...props}>
      결제하기
    </button>
  )
}
