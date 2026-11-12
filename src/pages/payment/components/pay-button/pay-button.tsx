import type { ComponentProps } from 'react'

type PayButtonProps = ComponentProps<'button'>

export const PayButton = (props: PayButtonProps) => {
  return (
    <button
      type='button'
      className='w-fit bg-primary px-[41.5px] py-[22.5px] typo-b2-m text-gray-000'
      {...props}>
      결제하기
    </button>
  )
}
