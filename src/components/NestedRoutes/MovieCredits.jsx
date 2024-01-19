import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/api';

const MovieCredits = () => {
  const { movieId } = useParams();
  const [movieCredits, setMovieCredits] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMovieCredits(movieId)
      .then(setMovieCredits)
      .catch(error => setError(error.message));
  }, [movieId]);

  if (error) {
    return <Navigate to="/movies" />;
  }

  if (!movieCredits) {
    return <h1>Loading ...</h1>;
  }

  return (
    <div>
      <ul>
        {movieCredits.map(cast => (
          <li key={cast.id}>
            {cast.profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                alt={cast.name}
              />
            )}
            <h3>{cast.name}</h3>
            <p>Character: {cast.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCredits;
