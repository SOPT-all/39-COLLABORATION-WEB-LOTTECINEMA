import type { MovieListResponse } from '@shared/types/__generated__/data-contracts'

import type { ExclusiveMovie } from '../types/exclusive-movie'
import type { AgeRating, PopularMovie } from '../types/popular-movie'

const toAgeRating = (ageRating: string): AgeRating => {
  if (
    ageRating === '전체' ||
    ageRating === '12세' ||
    ageRating === '15세' ||
    ageRating === '청불'
  ) {
    return ageRating
  }

  return '전체'
}

export const toPopularMovies = (movies: MovieListResponse[]): PopularMovie[] =>
  movies.map((movie, index) => ({
    id: movie.movieId,
    rank: movie.popularityRank ?? index + 1,
    title: movie.title,
    posterUrl: movie.posterUrl ?? '',
    ageRating: toAgeRating(movie.ageRating),
    rating: movie.movieRating ?? undefined,
    bookingRate: movie.bookingRate ?? undefined,
    releaseDday: movie.dDay ?? undefined,
  }))

export const toExclusiveMovies = (
  movies: MovieListResponse[],
  category: ExclusiveMovie['category'],
): ExclusiveMovie[] =>
  movies.map((movie) => ({
    id: movie.movieId,
    title: movie.title,
    posterUrl: movie.posterUrl ?? '',
    ageRating: toAgeRating(movie.ageRating),
    category,
  }))
