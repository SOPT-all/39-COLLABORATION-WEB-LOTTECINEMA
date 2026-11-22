import { API_ENDPOINTS } from '@shared/api/endpoints'
import { http } from '@shared/api/ky-instance'
import type {
  CreateReservationRequest,
  ReservationResponse,
} from '@shared/types/__generated__/data-contracts'

export const postReservation = (showtimeId: number, body: CreateReservationRequest) =>
  http.post<ReservationResponse, CreateReservationRequest>(
    API_ENDPOINTS.showtimes.reservations(showtimeId),
    body,
  )
