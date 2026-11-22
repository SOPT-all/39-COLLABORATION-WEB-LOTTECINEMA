import { useMutation } from '@tanstack/react-query'

import type { CreateReservationRequest } from '@shared/types/__generated__/data-contracts'

import { postReservation } from '../api/post-reservation'

export const useReservationMutation = (showtimeId: number) =>
  useMutation({
    mutationFn: (body: CreateReservationRequest) => {
      return postReservation(showtimeId, body)
    },
  })
