import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';
import { Line } from './MovieCast.styled';
import { ReviewText, ReviewsList } from './MovieReviews.styled';

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

  return (
    <div>
      <Line />
      {movieReviews.length ? (
        <ReviewsList>
          {movieReviews.map(review => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <ReviewText>{review.content}</ReviewText>
            </li>
          ))}
        </ReviewsList>
      ) : (
        <h2>We don't have any reviews for this movie.</h2>
      )}
    </div>
  );
};

export default MovieReviews;
