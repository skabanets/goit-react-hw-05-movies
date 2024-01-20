import { Navigate, useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';
import { Line } from './MovieCast.styled';
import { ReviewText, ReviewsList } from './MovieReviews.styled';
import { useHhttp } from 'hooks/useHhttp';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [movieReviews, , error] = useHhttp(getMovieReviews, movieId);

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
