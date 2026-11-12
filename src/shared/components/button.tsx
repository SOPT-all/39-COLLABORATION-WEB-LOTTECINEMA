import type { ComponentPropsWithRef, ReactNode } from 'react'

import { cn } from '@shared/utils/cn'

type ButtonVariant = 'primary' | 'secondary' | 'dark' | 'cta'
type ButtonSize = 'small' | 'medium'

interface ButtonProps extends ComponentPropsWithRef<'button'> {
  children: ReactNode
  variant: ButtonVariant
  size?: ButtonSize
}

const variantStyles = {
  primary: 'bg-gray-000 text-primary border border-primary',
  secondary: 'bg-gray-000 text-gray-600 border border-gray-600',
  dark: 'bg-gray-600 text-gray-000 border border-gray-600',
  cta: 'bg-primary text-gray-000 w-[331px] h-[47px] rounded',
}

const sizeStyles = {
  small: 'w-[74px] h-[36px] rounded-lg',
  medium: 'w-[156px] h-[42px] rounded-lg',
}

function Button({
  children,
  variant,
  size = 'medium',
  className,
  type = 'button',
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      {...rest}
      className={cn(variantStyles[variant], variant === 'cta' ? '' : sizeStyles[size], className)}>
      {children}
    </button>
  )
}

export default Button
