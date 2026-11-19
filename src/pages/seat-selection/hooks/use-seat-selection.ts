import { useState } from 'react'

import type { Headcount } from '@shared/types/headcount'

import { getTotalHeadcount } from '../utils/get-total-headcount'

const INITIAL_HEADCOUNT: Headcount = { adult: 0, teen: 0, senior: 0, disabled: 0 }
const compareSeatCode = (a: string, b: string) => a.localeCompare(b, undefined, { numeric: true })
export const useSeatSelection = () => {
  const [headcount, setHeadcount] = useState(INITIAL_HEADCOUNT)
  const [selectedSeatCodes, setSelectedSeatCodes] = useState<string[]>([])
  const [isHeadcountSheetOpen, setIsHeadcountSheetOpen] = useState(true)

  const totalHeadcount = getTotalHeadcount(headcount)
  const isSelectionFull = totalHeadcount > 0 && selectedSeatCodes.length === totalHeadcount

  const handleSeatClick = (seatCode: string) => {
    const isSelected = selectedSeatCodes.includes(seatCode)

    if (isSelectionFull && isSelected) {
      setSelectedSeatCodes([]) // 초기화
      return
    }

    if (isSelected) {
      setSelectedSeatCodes(selectedSeatCodes.filter((code) => code !== seatCode))
      return
    }
    setSelectedSeatCodes([...selectedSeatCodes, seatCode].sort(compareSeatCode))
  }

  const handleHeadcountConfirm = () => {
    setIsHeadcountSheetOpen(false)
  }

  const handleHeadcountReset = () => {
    setHeadcount(INITIAL_HEADCOUNT)
    setSelectedSeatCodes([])
    setIsHeadcountSheetOpen(true)
  }

  return {
    headcount,
    setHeadcount,
    selectedSeatCodes,
    isHeadcountSheetOpen,
    isSelectionFull,
    handleSeatClick,
    handleHeadcountConfirm,
    handleHeadcountReset,
  }
}
