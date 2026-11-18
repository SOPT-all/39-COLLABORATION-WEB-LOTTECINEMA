export const showtimeQueryKeys = {
  all: ['showtimes'] as const,
  byId: (showtimeId: number) => [...showtimeQueryKeys.all, showtimeId] as const,
  seats: (showtimeId: number) => [...showtimeQueryKeys.byId(showtimeId), 'seats'] as const,
}
