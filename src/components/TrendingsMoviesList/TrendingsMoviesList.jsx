import { TrendingsMoviesItem } from 'components/TrendingsMoviesItem/TrendingsMoviesItem';
import { StyledTrendingsMovies } from './TrendingsMoviesList.styled';

export const TrendingsMoviesList = ({ trandingMovies }) => {
  return (
    <StyledTrendingsMovies>
      {trandingMovies?.map(movie => (
        <TrendingsMoviesItem key={movie.id} movieInfo={movie} />
      ))}
    </StyledTrendingsMovies>
  );
};
