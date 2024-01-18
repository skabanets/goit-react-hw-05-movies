import { TrendingsMoviesItem } from 'components/TrendingsMoviesItem/TrendingsMoviesItem';

export const TrendingsMoviesList = ({ trandingMovies }) => {
  return (
    <ul>
      {trandingMovies.map(movie => (
        <TrendingsMoviesItem key={movie.id} movieInfo={movie} />
      ))}
    </ul>
  );
};
