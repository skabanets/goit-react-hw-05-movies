import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';
import { Line } from './MovieCast.styled';
import { ReviewText, ReviewsList } from './MovieReviews.styled';
import { useHhttp } from 'hooks/useHhttp';
import { Loader } from 'components/Loader/Loader';
import { toast } from 'react-toastify';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [movieReviews, , error] = useHhttp(getMovieReviews, movieId);

  if (error) {
    toast.error(
      `The request failed! Please reload the page or try again later.`
    );
    return <></>;
  }

  if (!movieReviews) return <Loader />;

  return (
    <div>
      <Line />
      {movieReviews.length ? (
        <ReviewsList>
          {movieReviews.map((review, index) => (
            <li key={index}>
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
