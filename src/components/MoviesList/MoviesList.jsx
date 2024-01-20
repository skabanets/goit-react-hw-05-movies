import { MoviesItem } from 'components/MoviesListItem/MoviesListItem';
import { StyledMoviesList } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  return (
    <StyledMoviesList>
      {movies?.map(movie => (
        <MoviesItem key={movie.id} movieInfo={movie} />
      ))}
    </StyledMoviesList>
  );
};
