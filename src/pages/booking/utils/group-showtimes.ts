import type { ShowtimeResponse } from '@shared/types/__generated__/data-contracts'

import type { ShowtimeGroupData } from '../types/showtime'

const LANGUAGE_LABELS: Record<ShowtimeResponse['languageType'], string | undefined> = {
  DUBBED: '더빙',
  SUBTITLED: '자막',
  NONE: undefined,
}

const SEAT_TYPE_LABELS: Record<ShowtimeResponse['seatType'], string> = {
  STANDARD: '일반석',
  RECLINER: '리클라이너',
}

const RECLINER_DESCRIPTION = '팔과 다리를 쭈~욱 펴고 힐링하면서 영화보면 즐거움이 두배!'

export const groupShowtimes = (showtimes: ShowtimeResponse[]): ShowtimeGroupData[] => {
  const groups = new Map<string, ShowtimeGroupData>()

  for (const showtime of showtimes) {
    const { formatType, languageType, seatType } = showtime
    const key = `${formatType}-${languageType}-${seatType}`

    let group = groups.get(key)

    if (!group) {
      const languageLabel = LANGUAGE_LABELS[languageType]

      group = {
        key,
        labels: [formatType, ...(languageLabel ? [languageLabel] : []), SEAT_TYPE_LABELS[seatType]],
        description: seatType === 'RECLINER' ? RECLINER_DESCRIPTION : undefined,
        showtimes: [],
      }
      groups.set(key, group)
    }

    group.showtimes.push(showtime)
  }

  return [...groups.values()]
}
