import { Navigate, useParams } from 'react-router-dom';
import { getMovieCast } from 'services/api';
import { Line, MovieCastList } from './MovieCast.styled';
import { ActorCard } from 'components/ActorCard/ActorCard';
import { useHhttp } from 'hooks/useHhttp';
import { Loader } from 'components/Loader/Loader';

const MovieCredits = () => {
  const { movieId } = useParams();
  const [movieCast, , error] = useHhttp(getMovieCast, movieId);

  if (error) {
    return <Navigate to="/movies" />;
  }

  if (!movieCast) {
    return <Loader />;
  }

  return (
    <div>
      <Line />
      {movieCast.length ? (
        <MovieCastList>
          {movieCast.map((cast, index) => (
            <ActorCard key={index} cast={cast} />
          ))}
        </MovieCastList>
      ) : (
        <h2>We don't know any actors of this movie.</h2>
      )}
    </div>
  );
};

export default MovieCredits;
