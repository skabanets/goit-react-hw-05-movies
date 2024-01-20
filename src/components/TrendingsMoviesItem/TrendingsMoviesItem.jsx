import { Link } from 'react-router-dom';
import {
  MoviePoster,
  MovieSubtitle,
  StyledTrendingsMovie,
} from './TrendingsMoviesItem.styles';

export const TrendingsMoviesItem = ({ movieInfo }) => {
  const { id, poster_path, name, title } = movieInfo;

  const defaultMoviePoster =
    'https://www.thetechedvocate.org/wp-content/uploads/2023/11/30-5.jpg';
  const moviePoster = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : defaultMoviePoster;

  return (
    <StyledTrendingsMovie>
      <Link to={`/movies/${id}`}>
        <MoviePoster src={moviePoster} alt={name || title} />
        <MovieSubtitle>{name || title}</MovieSubtitle>
      </Link>
    </StyledTrendingsMovie>
  );
};
