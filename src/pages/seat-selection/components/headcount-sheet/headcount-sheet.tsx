import { BottomSheet } from '@shared/components/bottom-sheet/bottom-sheet'
import { Button } from '@shared/components/button/button'
import type { Headcount } from '@shared/types/headcount'

import { getTotalHeadcount } from '../../utils/get-total-headcount'
import { HeadcountSelector } from '../headcount-selector/headcount-selector'

interface HeadcountSheetProps {
  isOpen: boolean
  screenInfo: string
  headcount: Headcount
  onHeadcountChange: (headcount: Headcount) => void
  onConfirm: () => void
}

// 인원 선택 모달. 인원을 1명 이상 골라야 '좌석선택'으로 진행할 수 있다.
export const HeadcountSheet = ({
  isOpen,
  screenInfo,
  headcount,
  onHeadcountChange,
  onConfirm,
}: HeadcountSheetProps) => {
  const totalHeadcount = getTotalHeadcount(headcount)

  return (
    <BottomSheet
      isOpen={isOpen}
      onClose={() => {}}
      // 배경으로 닫지 않으므로(isBackdropClosable=false) 호출되지 않는다
      isBackdropClosable={false}
      ariaLabel='인원 선택'
      header={
        <h2 className='border-b border-gray-100 px-5.5 py-2.5 typo-b2-m text-gray-1000'>
          {screenInfo}
        </h2>
      }
      footer={
        <Button variant='cta' disabled={totalHeadcount === 0} onClick={onConfirm}>
          좌석선택
        </Button>
      }>
      <HeadcountSelector value={headcount} onChange={onHeadcountChange} />
    </BottomSheet>
  )
}
