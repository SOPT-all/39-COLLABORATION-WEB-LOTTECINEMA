export interface Cinema {
  cinemaId: number
  cinemaName: string
  hasShowtimes: boolean
}

export interface BookingRegion {
  regionId: number
  regionName: string
  cinemas: Cinema[]
}
