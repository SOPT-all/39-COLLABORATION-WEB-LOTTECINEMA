export const API_ENDPOINTS = {
  movies: {
    list: '/api/v1/movies',
    cinemas: (movieId: number | ':movieId') => `/api/v1/movies/${movieId}/cinemas`,
  },
  showtimes: {
    list: '/api/v1/showtimes',
    seats: (showtimeId: number | ':showtimeId') => `/api/v1/showtimes/${showtimeId}/seats`,
    reservations: (showtimeId: number | ':showtimeId') =>
      `/api/v1/showtimes/${showtimeId}/reservations`,
  },
} as const
