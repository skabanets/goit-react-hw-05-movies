import { Link, useLocation } from 'react-router-dom';
import {
  MoviePoster,
  MovieSubtitle,
  StyledMovie,
} from './MoviesListItem.styles';

export const MoviesItem = ({ movieInfo }) => {
  const { id, poster_path, name, title } = movieInfo;
  const location = useLocation();

  const defaultMoviePoster =
    'https://www.thetechedvocate.org/wp-content/uploads/2023/11/30-5.jpg';
  const moviePoster = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : defaultMoviePoster;

  return (
    <StyledMovie>
      <Link state={{ from: location }} to={`/movies/${id}`}>
        <MoviePoster src={moviePoster} alt={name || title} />
        <MovieSubtitle>{name || title}</MovieSubtitle>
      </Link>
    </StyledMovie>
  );
};
