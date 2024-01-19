import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMovieReviews(movieId)
      .then(setMovieReviews)
      .catch(error => setError(error.message));
  }, [movieId]);

  if (error) {
    return <Navigate to="/movies" />;
  }

  if (!movieReviews) {
    return <h1>Loading ...</h1>;
  }

  console.log(movieReviews);

  return (
    <div>
      <h1>MovieReviews</h1>
      <ul>
        {movieReviews.map(review => (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
