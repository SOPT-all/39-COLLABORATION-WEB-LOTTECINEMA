import type { ExclusiveMovie } from '@pages/home/types/exclusive-movie'
import type { PopularMovie } from '@pages/home/types/popular-movie'

const homeMoviesResponse = {
  status: 200,
  message: 'OK',
  data: {
    popularMovies: [
      {
        movieId: 1,
        title: '극장판 치이카와: 인어 섬의 비밀',
        posterUrl: 'https://cf.lottecinema.co.kr//Media/MovieFile/MovieImg/202609/24708_201_1.jpg',
        ageRating: '전체',
        popularityRank: 1,
        bookingRate: 20,
        movieRating: 9.3,
        dDay: null,
      },
      {
        movieId: 2,
        title: '하트 오브 비스트',
        posterUrl: 'https://cf.lottecinema.co.kr//Media/MovieFile/MovieImg/202610/24867_201_1.jpg',
        ageRating: '12세',
        popularityRank: 2,
        bookingRate: 30,
        movieRating: null,
        dDay: 1,
      },
      {
        movieId: 3,
        title: '최종면접',
        posterUrl: 'https://cf.lottecinema.co.kr//Media/MovieFile/MovieImg/202611/24998_201_1.jpg',
        ageRating: '15세',
        popularityRank: 3,
        bookingRate: 25,
        movieRating: null,
        dDay: 8,
      },
      {
        movieId: 4,
        title: '극장판 마법소녀 마도카 마기카 <발푸르기스의 회천>',
        posterUrl:
          'https://i.namu.wiki/i/7d4ylf5q7ylWeKbAKTdReQVVXWag9trHw-nm8DT5vKzmu0Nc9AGSVCaTl8ZDn46-pEamc1Clmi4c6T5xmTXV3uNhgImg-mm1XkwkzPZCA6B_kUzf3BTbITmfWXwf3HvT5VxhWch6DHeaxNSG6HivuQ.webp',
        ageRating: '15세',
        popularityRank: 4,
        bookingRate: 17,
        movieRating: null,
        dDay: 8,
      },
      {
        movieId: 5,
        title: '수능, 출제의 비밀',
        posterUrl: 'https://cf.lottecinema.co.kr//Media/MovieFile/MovieImg/202610/24869_201_1.jpg',
        ageRating: '12세',
        popularityRank: 5,
        bookingRate: 11,
        movieRating: null,
        dDay: 1,
      },
      {
        movieId: 6,
        title: '그대, 별처럼',
        posterUrl: 'https://cf.lottecinema.co.kr//Media/MovieFile/MovieImg/202610/25018_201_1.jpg',
        ageRating: '15세',
        popularityRank: 6,
        bookingRate: 7,
        movieRating: null,
        dDay: 1,
      },
    ],
    lotsiPickMovies: [
      {
        movieId: 4,
        title: '극장판 마법소녀 마도카 마기카 <발푸르기스의 회천>',
        posterUrl:
          'https://i.namu.wiki/i/7d4ylf5q7ylWeKbAKTdReQVVXWag9trHw-nm8DT5vKzmu0Nc9AGSVCaTl8ZDn46-pEamc1Clmi4c6T5xmTXV3uNhgImg-mm1XkwkzPZCA6B_kUzf3BTbITmfWXwf3HvT5VxhWch6DHeaxNSG6HivuQ.webp',
        ageRating: '15세',
      },
      {
        movieId: 6,
        title: '그대, 별처럼',
        posterUrl: 'https://cf.lottecinema.co.kr//Media/MovieFile/MovieImg/202610/25018_201_1.jpg',
        ageRating: '15세',
      },
      {
        movieId: 7,
        title: '숀 더 쉽: 공포의 털보 괴물',
        posterUrl: 'https://cf.lottecinema.co.kr//Media/MovieFile/MovieImg/202610/25075_201_1.jpg',
        ageRating: '전체',
      },
      {
        movieId: 8,
        title: '변이',
        posterUrl: 'https://cf.lottecinema.co.kr//Media/MovieFile/MovieImg/202611/25023_201_1.jpg',
        ageRating: '청불',
      },
    ],
    lotsiPlayMovies: [
      {
        movieId: 9,
        title: '엔하이픈 브이알콘서트 : 데스티니',
        posterUrl: 'https://cf.lottecinema.co.kr//Media/MovieFile/MovieImg/202609/24971_201_1.jpg',
        ageRating: '전체',
      },
      {
        movieId: 10,
        title: 'Stray Kids World Tour<RUN IT>LIVE VIEWING',
        posterUrl: 'https://cf.lottecinema.co.kr//Media/MovieFile/MovieImg/202611/25106_201_1.jpg',
        ageRating: '전체',
      },
      {
        movieId: 11,
        title: "BTS WORLD TOUR 'ARIRANG' IN SAO PAULO: LIVE VIEWING",
        posterUrl: 'http://cf.lottecinema.co.kr//Media/MovieFile/MovieImg/202610/24987_201_1.jpg',
        ageRating: '전체',
      },
    ],
  },
} as const

export const homePopularMovies: PopularMovie[] = homeMoviesResponse.data.popularMovies.map(
  (movie, index) => ({
    id: movie.movieId,
    rank: movie.popularityRank ?? index + 1,
    title: movie.title,
    posterUrl: movie.posterUrl,
    ageRating: movie.ageRating,
    rating: movie.movieRating ?? undefined,
    bookingRate: movie.bookingRate ?? undefined,
    releaseDday: movie.dDay ?? undefined,
  }),
)

export const homeExclusiveMovies: ExclusiveMovie[] = [
  ...homeMoviesResponse.data.lotsiPickMovies.map((movie) => ({
    id: movie.movieId,
    title: movie.title,
    posterUrl: movie.posterUrl,
    ageRating: movie.ageRating,
    category: '롯시픽' as const,
  })),
  ...homeMoviesResponse.data.lotsiPlayMovies.map((movie) => ({
    id: movie.movieId,
    title: movie.title,
    posterUrl: movie.posterUrl,
    ageRating: movie.ageRating,
    category: '롯시플' as const,
  })),
]
