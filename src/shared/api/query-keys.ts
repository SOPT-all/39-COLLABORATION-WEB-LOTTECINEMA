export const showtimeQueryKeys = {
  all: ['showtimes'] as const,
  byId: (showtimeId: number) => [...showtimeQueryKeys.all, showtimeId] as const,
  seats: (showtimeId: number) => [...showtimeQueryKeys.byId(showtimeId), 'seats'] as const,
}

export const movieQueryKeys = {
  all: ['movies'] as const,
  byId: (movieId: number) => [...movieQueryKeys.all, movieId] as const,
  cinemas: (movieId: number) => [...movieQueryKeys.byId(movieId), 'cinemas'] as const,
}
