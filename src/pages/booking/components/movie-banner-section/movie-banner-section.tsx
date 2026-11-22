import type { Movie } from '../../types/movie'
import { MovieBanner } from '../movie-banner/movie-banner'
import { MovieDropdown } from '../movie-dropdown/movie-dropdown'

interface MovieBannerSectionProps {
  movies: Movie[]
  isLoading?: boolean
  hasError?: boolean
}

export const MovieBannerSection = ({ movies, isLoading, hasError }: MovieBannerSectionProps) => (
  <MovieBanner
    action={<MovieDropdown movies={movies} isLoading={isLoading} hasError={hasError} />}
  />
)
