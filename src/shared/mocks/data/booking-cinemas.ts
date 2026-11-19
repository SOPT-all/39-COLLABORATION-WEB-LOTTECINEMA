import type { Movie } from '@pages/booking/types/movie'
import type { BookingRegion, Cinema } from '@pages/booking/types/theater'

const REGION_CINEMA_COUNTS: Record<number, number> = {
  1: 21,
  2: 40,
  3: 12,
  4: 11,
  5: 13,
  6: 21,
  7: 6,
  8: 2,
}

export const bookingCinemaResponse = {
  status: 200,
  message: 'OK',
  data: {
    myCinemas: [{ cinemaId: 21, cinemaName: '홍대입구역' }],
    regions: [
      {
        regionId: 1,
        regionName: '서울',
        cinemas: [
          { cinemaId: 1, cinemaName: '가산디지털', hasShowtimes: false },
          { cinemaId: 2, cinemaName: '가양', hasShowtimes: false },
          { cinemaId: 3, cinemaName: '강동', hasShowtimes: false },
          { cinemaId: 4, cinemaName: '건대입구', hasShowtimes: false },
          { cinemaId: 5, cinemaName: '김포공항', hasShowtimes: false },
          { cinemaId: 6, cinemaName: '노원', hasShowtimes: false },
          { cinemaId: 7, cinemaName: '도곡', hasShowtimes: false },
          { cinemaId: 8, cinemaName: '독산', hasShowtimes: false },
          { cinemaId: 9, cinemaName: '서울대입구', hasShowtimes: false },
          { cinemaId: 10, cinemaName: '수락산', hasShowtimes: false },
          { cinemaId: 11, cinemaName: '수유', hasShowtimes: false },
          { cinemaId: 12, cinemaName: '신대방(구로디지털역)', hasShowtimes: false },
          { cinemaId: 13, cinemaName: '신도림', hasShowtimes: false },
          { cinemaId: 14, cinemaName: '신림', hasShowtimes: false },
          { cinemaId: 15, cinemaName: '영등포', hasShowtimes: false },
          { cinemaId: 16, cinemaName: '용산', hasShowtimes: true },
          { cinemaId: 17, cinemaName: '월드타워', hasShowtimes: false },
          { cinemaId: 18, cinemaName: '은평(롯데몰)', hasShowtimes: false },
          { cinemaId: 19, cinemaName: '청량리', hasShowtimes: false },
          { cinemaId: 20, cinemaName: '합정', hasShowtimes: false },
          { cinemaId: 21, cinemaName: '홍대입구', hasShowtimes: false },
        ],
      },
      { regionId: 2, regionName: '경기/인천', cinemas: [] },
      { regionId: 3, regionName: '충청/대전', cinemas: [] },
      { regionId: 4, regionName: '전라/광주', cinemas: [] },
      { regionId: 5, regionName: '경북/대구', cinemas: [] },
      { regionId: 6, regionName: '경남/부산/울산', cinemas: [] },
      { regionId: 7, regionName: '강원', cinemas: [] },
      { regionId: 8, regionName: '제주', cinemas: [] },
    ],
  },
} as const

export const bookingCinemaData: {
  myCinemas: Cinema[]
  regions: BookingRegion[]
} = {
  myCinemas: bookingCinemaResponse.data.myCinemas.map((cinema) => ({ ...cinema })),
  regions: bookingCinemaResponse.data.regions.map((region) => ({
    ...region,
    cinemas: region.cinemas.map((cinema) => ({ ...cinema })),
    cinemaCount: REGION_CINEMA_COUNTS[region.regionId] ?? region.cinemas.length,
  })),
}

export const bookingMovieOptions: Movie[] = [
  { movieId: 1, title: '극장판 치이카와: 인어 섬의 비밀' },
  { movieId: 2, title: '하트 오브 비스트' },
  { movieId: 3, title: '최종면접' },
  { movieId: 4, title: '극장판 마법소녀 마도카 마기카' },
]
