import type { ComponentPropsWithRef, ReactNode } from 'react'

import { cn } from '@shared/utils/cn'

type ButtonSize = 'small' | 'medium'

type ButtonProps = ComponentPropsWithRef<'button'> & {
  children: ReactNode
} & (
    | { variant: 'cta'; size?: never }
    | { variant: 'primary' | 'secondary' | 'dark'; size?: ButtonSize }
  )

const baseStyles = 'inline-flex items-center justify-center'

const variantStyles = {
  primary: 'border border-primary bg-gray-000 text-primary',
  secondary: 'border border-gray-600 bg-gray-000 text-gray-600',
  dark: 'border-[1.5px] border-gray-600 bg-gray-1000/60 text-gray-000',
  cta: 'h-[47px] w-full rounded bg-primary typo-b2-m text-gray-000 disabled:bg-[#FF7787] disabled:text-[#FFF0F0]',
}

const sizeStyles = {
  small: 'h-9 min-w-[74px] rounded-lg px-3 typo-c3-m',
  medium: 'h-[43px] min-w-[156px] rounded-lg px-3 typo-c3-m',
}

export const Button = ({
  children,
  variant,
  size,
  className,
  type = 'button',
  ...rest
}: ButtonProps) => {
  return (
    <button
      type={type}
      {...rest}
      className={cn(
        baseStyles,
        variantStyles[variant],
        variant !== 'cta' && sizeStyles[size ?? 'medium'],
        className,
      )}>
      {children}
    </button>
  )
}
