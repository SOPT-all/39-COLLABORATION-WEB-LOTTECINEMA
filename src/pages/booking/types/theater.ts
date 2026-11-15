export interface Cinema {
  cinemaId: number
  cinemaName: string
}

export interface BookingRegion {
  regionId: number
  regionName: string
  cinemas: Cinema[]
}
