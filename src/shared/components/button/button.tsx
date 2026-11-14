import type { ComponentPropsWithRef, ReactNode } from 'react'

import { cn } from '@shared/utils/cn'

type ButtonVariant = 'primary' | 'secondary' | 'dark' | 'cta'
type ButtonSize = 'small' | 'medium'

interface ButtonProps extends ComponentPropsWithRef<'button'> {
  children: ReactNode
  variant: ButtonVariant
  size?: ButtonSize
}

const baseStyles = 'inline-flex items-center justify-center'

const variantStyles = {
  primary: 'bg-gray-000 text-primary border border-primary',
  secondary: 'bg-gray-000 text-gray-600 border border-gray-600',
  dark: 'bg-gray-600 text-gray-000 border border-gray-600',
  cta: 'bg-primary text-gray-000 w-full h-[47px] rounded typo-b2-m',
}

const sizeStyles = {
  small: 'h-9 min-w-[74px] px-2 rounded-lg typo-c3-m',
  medium: 'h-[42px] min-w-[156px] px-3 rounded-lg typo-c3-m',
}

export const Button = ({
  children,
  variant,
  size = 'medium',
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
        variant === 'cta' ? '' : sizeStyles[size],
        className,
      )}>
      {children}
    </button>
  )
}
