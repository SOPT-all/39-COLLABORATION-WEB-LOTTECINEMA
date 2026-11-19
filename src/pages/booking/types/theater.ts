export interface Cinema {
  cinemaId: number
  cinemaName: string
  hasShowtimes?: boolean
}

export interface BookingRegion {
  regionId: number
  regionName: string
  cinemas: Cinema[]
  cinemaCount?: number
}

export const MY_CINEMA_REGION_ID = 0
