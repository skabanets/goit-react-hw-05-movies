import { Link } from 'react-router-dom';
import {
  MoviePoster,
  StyledTrendingsMovie,
} from './TrendingsMoviesItem.styles';

export const TrendingsMoviesItem = ({ movieInfo }) => {
  const { id, poster_path, name, title } = movieInfo;

  return (
    <StyledTrendingsMovie>
      <Link to={id.toString()}>
        <MoviePoster
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={name || title}
        />
        <h3>{name || title}</h3>
      </Link>
    </StyledTrendingsMovie>
  );
};
