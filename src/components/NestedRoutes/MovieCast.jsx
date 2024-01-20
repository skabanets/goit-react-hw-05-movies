import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/api';
import { Line, MovieCastList } from './MovieCast.styled';
import { ActorCard } from 'components/ActorCard/ActorCard';

const MovieCredits = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMovieCredits(movieId)
      .then(setMovieCast)
      .catch(error => setError(error.message));
  }, [movieId]);

  if (error) {
    return <Navigate to="/movies" />;
  }

  if (!movieCast) {
    return <h1>Loading ...</h1>;
  }

  return (
    <div>
      <Line />
      {movieCast.length ? (
        <MovieCastList>
          {movieCast.map(cast => (
            <ActorCard key={cast.id} cast={cast} />
          ))}
        </MovieCastList>
      ) : (
        <h2>We don't know any actors of this movie.</h2>
      )}
    </div>
  );
};

export default MovieCredits;
