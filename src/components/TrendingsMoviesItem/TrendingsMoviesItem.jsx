import { Link } from 'react-router-dom';
import {
  MoviePoster,
  MovieSubtitle,
  StyledTrendingsMovie,
} from './TrendingsMoviesItem.styles';

export const TrendingsMoviesItem = ({ movieInfo }) => {
  const { id, poster_path, name, title } = movieInfo;

  return (
    <StyledTrendingsMovie>
      <Link to={`movies/${id}`}>
        <MoviePoster
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={name || title}
        />
        <MovieSubtitle>{name || title}</MovieSubtitle>
      </Link>
    </StyledTrendingsMovie>
  );
};
