import type { Movie } from '../../types/movie'
import { MovieBanner } from '../movie-banner/movie-banner'
import { MovieDropdown } from '../movie-dropdown/movie-dropdown'

interface MovieBannerSectionProps {
  movies: Movie[]
}

export const MovieBannerSection = ({ movies }: MovieBannerSectionProps) => (
  <MovieBanner action={<MovieDropdown movies={movies} />} />
)
