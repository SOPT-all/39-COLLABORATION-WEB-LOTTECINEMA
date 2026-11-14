import type { ReactNode } from 'react'

import type { PaymentMethod } from '@pages/payment/types/payment-method'

import {
  CardMeans1Icon,
  CardMeans2Icon,
  CardMeans3Icon,
  CardMeans4Icon,
  CardMeans5Icon,
  TossLogo,
} from '@shared/icons'
import { cn } from '@shared/utils/cn'

interface PaymentMethodOption {
  id: PaymentMethod
  label: string
  icon: ReactNode
  isLabelHidden?: boolean
}

interface PaymentMethodGroupProps {
  value: PaymentMethod | null
  onChange: (value: PaymentMethod) => void
}

const PAYMENT_METHOD_OPTIONS: PaymentMethodOption[] = [
  { id: 'card', label: '신용카드', icon: <CardMeans1Icon /> },
  { id: 'lpay', label: '엘페이', icon: <CardMeans2Icon /> },
  { id: 'easy-pay', label: '간편결제', icon: <CardMeans3Icon /> },
  { id: 'toss', label: '토스', icon: <TossLogo />, isLabelHidden: true },
  { id: 'mobile', label: '휴대폰', icon: <CardMeans4Icon /> },
  { id: 'bank-transfer', label: '내통장결제', icon: <CardMeans5Icon /> },
]

export const PaymentMethodGroup = ({ value, onChange }: PaymentMethodGroupProps) => {
  return (
    <fieldset>
      <legend className='mb-3 typo-b2-m'>최종 결제수단</legend>

      <div className='grid grid-cols-3 gap-2.5'>
        {PAYMENT_METHOD_OPTIONS.map(({ id, label, icon, isLabelHidden }) => (
          <label
            key={id}
            className={cn(
              'flex cursor-pointer flex-col items-center justify-center gap-1 rounded-sm border border-gray-100 py-3',
              'has-[:checked]:border-gray-1000',
              'has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-current',
            )}>
            <input
              className='sr-only'
              type='radio'
              name='payment-method'
              value={id}
              checked={value === id}
              onChange={() => onChange(id)}
            />
            {icon}
            <span className={cn('typo-c2-m', isLabelHidden && 'sr-only')}>{label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}
