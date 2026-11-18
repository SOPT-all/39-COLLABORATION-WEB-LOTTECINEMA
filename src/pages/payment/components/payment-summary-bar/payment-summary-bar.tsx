import type { ComponentProps } from 'react'

import { cn } from '@shared/utils/cn'

import { PayButton } from '../pay-button/pay-button'
import { PriceSummaryCard } from '../price-summary-card/price-summary-card'

interface PaymentSummaryBarProps {
  ticketAmount: number
  discountAmount: number
  finalAmount: number
  onPayClick?: ComponentProps<'button'>['onClick']
  className?: string
}

export const PaymentSummaryBar = ({
  ticketAmount,
  discountAmount,
  finalAmount,
  onPayClick,
  className,
}: PaymentSummaryBarProps) => {
  return (
    <div
      role='group'
      aria-label='결제 금액 요약 및 결제'
      className={cn(
        'flex w-full items-center',
        'shadow-[0_-4px_12px_0_rgba(0,0,0,0.10)]',
        className,
      )}>
      <PriceSummaryCard
        ticketAmount={ticketAmount}
        discountAmount={discountAmount}
        finalAmount={finalAmount}
        className='min-w-0 flex-1'
      />
      <PayButton onClick={onPayClick} className='shrink-0' />
    </div>
  )
}
