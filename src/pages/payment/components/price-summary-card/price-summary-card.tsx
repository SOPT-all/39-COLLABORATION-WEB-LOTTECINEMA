import { cn } from '@shared/utils/cn'

interface PriceSummaryCardProps {
  /** 예매 API의 data.totalAmount를 할인 전 상품 금액으로 표시 */
  ticketAmount: number
  discountAmount: number
  finalAmount: number
  className?: string
}

const formatAmount = (amount: number) => amount.toLocaleString('ko-KR')

export const PriceSummaryCard = ({
  ticketAmount,
  discountAmount,
  finalAmount,
  className,
}: PriceSummaryCardProps) => {
  return (
    <div className={cn('flex w-fit flex-col gap-2 bg-gray-000 px-[18px] pt-2 pb-3', className)}>
      <div className='flex items-center gap-1'>
        <div className='flex items-end gap-0.5 whitespace-nowrap'>
          <span className='typo-c2-m text-gray-700'>상품금액</span>
          <span className='typo-c3-m text-gray-1000'>{formatAmount(ticketAmount)}원</span>
        </div>

        <span aria-hidden='true' className='h-px w-[3px] shrink-0 bg-gray-1000' />

        <div className='flex items-end gap-0.5 whitespace-nowrap'>
          <span className='typo-c2-m text-gray-700'>할인금액</span>
          <span className='typo-c3-m text-gray-1000'>
            {formatAmount(discountAmount)}
            <span className='typo-c2-m text-gray-700'>원</span>
          </span>
        </div>
      </div>

      <div className='flex items-center gap-3 whitespace-nowrap'>
        <span className='typo-c2-m text-gray-1000'>총 합계</span>
        <span className='typo-b2-b text-primary'>{formatAmount(finalAmount)}원</span>
      </div>
    </div>
  )
}
