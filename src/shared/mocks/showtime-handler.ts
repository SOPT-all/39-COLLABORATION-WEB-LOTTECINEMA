import { HttpResponse, http } from 'msw'

import { API_ENDPOINTS } from '@shared/api/endpoints'
import {
  type CreateReservationRequest,
  type SuccessResponseReservationResponse,
  type SuccessResponseShowtimeListResponse,
  type SuccessResponseShowtimeSeatResponse,
} from '@shared/types/__generated__/data-contracts'

import { showtimeSeatsMock } from './data/showtime-seats'
import { showtimesMock } from './data/showtimes'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const showtimeHandlers = [
  // 상영 시간표 조회
  http.get(`${BASE_URL}${API_ENDPOINTS.showtimes.list}`, () => {
    return HttpResponse.json<SuccessResponseShowtimeListResponse>({
      status: 200,
      message: 'OK',
      data: showtimesMock,
    })
  }),

  // 좌석 조회
  http.get(`${BASE_URL}${API_ENDPOINTS.showtimes.seats(':showtimeId')}`, () => {
    return HttpResponse.json<SuccessResponseShowtimeSeatResponse>({
      status: 200,
      message: 'OK',
      data: showtimeSeatsMock,
    })
  }),

  // 예약 확정
  http.post(
    `${BASE_URL}${API_ENDPOINTS.showtimes.reservations(':showtimeId')}`,
    async ({ request, params }) => {
      const body = (await request.json()) as CreateReservationRequest

      return HttpResponse.json<SuccessResponseReservationResponse>(
        {
          status: 201,
          message: 'Created',
          data: {
            reservationId: 1,
            showtimeId: Number(params.showtimeId),
            seatCodes: body.seatCodes,
            ticketCounts: body.ticketCounts,
            totalAmount: body.expectedTotalAmount,
            createdAt: new Date().toISOString(),
          },
        },
        { status: 201 },
      )
    },
  ),
]
