import { isAgeRating } from '@shared/constants/age-rating'
import type { AgeRating } from '@shared/constants/age-rating'
import type { MovieListResponse } from '@shared/types/__generated__/data-contracts'

import type { ExclusiveMovie } from '../types/exclusive-movie'
import type { PopularMovie } from '../types/popular-movie'

const toAgeRating = (ageRating: string): AgeRating | undefined =>
  isAgeRating(ageRating) ? ageRating : undefined

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
