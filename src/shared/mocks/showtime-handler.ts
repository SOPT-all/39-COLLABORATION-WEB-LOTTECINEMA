import { HttpResponse, http } from 'msw'

import { API_ENDPOINTS } from '@shared/api/endpoints'
import type { SuccessResponseShowtimeSeatResponse } from '@shared/types/__generated__/data-contracts'

import { showtimeSeatsMock } from './data/showtime-seats'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const showtimeHandlers = [
  // 좌석 조회
  http.get(`${BASE_URL}${API_ENDPOINTS.showtimes.seats(':showtimeId')}`, () => {
    return HttpResponse.json<SuccessResponseShowtimeSeatResponse>({
      status: 200,
      message: 'OK',
      data: showtimeSeatsMock,
    })
  }),
]
