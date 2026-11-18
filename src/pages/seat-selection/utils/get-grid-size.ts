import type { SeatInfo } from '@shared/types/__generated__/data-contracts'

// 좌석 배열을 배치할 격자의 행/열 개수
export const getGridSize = (seats: SeatInfo[]) => {
  if (seats.length === 0) return { rows: 0, columns: 0 }

  const rowIndexes = seats.map((seat) => seat.rowIndex ?? 0)
  const maxRow = Math.max(...rowIndexes)

  const columnIndexes = seats.map((seat) => seat.columnIndex ?? 0)
  const maxColumn = Math.max(...columnIndexes)

  const rows = maxRow + 1
  const columns = maxColumn + 1

  return { rows, columns }
}
