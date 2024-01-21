import { Section } from 'components/Section/Section';
import {
  Navigate,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { getMovieById } from 'services/api';
import {
  AdditionalInfoLink,
  AdditionalInfoLinks,
  ButtonGoBack,
  Genr,
  GenresList,
  MovieContent,
  MovieImg,
  MovieInfo,
  MovieInfoItem,
  MovieMainContent,
  OverviewText,
  Rating,
} from './SIngleMovie.styled';
import { useHhttp } from 'hooks/useHhttp';
import { Loader } from 'components/Loader/Loader';
import { IoChevronBackCircleOutline } from 'react-icons/io5';
import { Suspense, useRef } from 'react';
import { getRatingColor } from 'helpers/getRatingColor';
import { toast } from 'react-toastify';

const SingleMovie = () => {
  const { movieId } = useParams();
  const [movie, , error] = useHhttp(getMovieById, movieId);
  const navigate = useNavigate();
  const location = useLocation();
  const goBackLink = useRef(location.state?.from || '/');

  const handleBackButtonClick = () => {
    navigate(goBackLink.current);
  };

  if (error) {
    toast.error(`Movie not found! Please reload the page or try again later.`);
    return <Navigate to="/" />;
  }

  if (!movie) return <Loader />;

  const defaultMoviePoster =
    'https://www.thetechedvocate.org/wp-content/uploads/2023/11/30-5.jpg';
  const moviePoster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : defaultMoviePoster;

  const movieYear = movie.release_date.substr(0, 4) || '';
  const movieTitle = movie.name || movie.title;
  const movieRating = movie.vote_average.toFixed(1);

  return (
    <Section
      title={movieYear ? `${movieTitle} (${movieYear})` : `${movieTitle}`}
    >
      <MovieContent>
        <ButtonGoBack onClick={handleBackButtonClick}>
          <IoChevronBackCircleOutline /> Go back
        </ButtonGoBack>
        <MovieMainContent>
          <MovieImg src={moviePoster} alt={movie.name || movie.title} />
          <MovieInfo>
            {movieRating !== '0.0' && (
              <MovieInfoItem>
                <h3>Rating:</h3>
                <Rating $bg={() => getRatingColor(+movieRating)}>
                  {movieRating} / 10
                </Rating>
              </MovieInfoItem>
            )}
            {movieYear && (
              <MovieInfoItem>
                <h3>Year:</h3>
                <p>{movieYear}</p>
              </MovieInfoItem>
            )}
            {movie.overview && (
              <div>
                <h3>Overview</h3>
                <OverviewText>{movie.overview}</OverviewText>
              </div>
            )}
            {movie.genres.length !== 0 && (
              <MovieInfoItem>
                <h3>Genres:</h3>
                <GenresList>
                  {movie.genres.map(genre => (
                    <Genr key={genre.id}>{genre.name}</Genr>
                  ))}
                </GenresList>
              </MovieInfoItem>
            )}
            {movie.runtime !== 0 && (
              <MovieInfoItem>
                <h3>Duration:</h3>
                <p>{movie.runtime} minutes</p>
              </MovieInfoItem>
            )}
            <MovieInfoItem>
              <h3>Additional information:</h3>
              <AdditionalInfoLinks>
                <AdditionalInfoLink to="cast">Cast</AdditionalInfoLink>
                <AdditionalInfoLink to="reviews">Reviews</AdditionalInfoLink>
              </AdditionalInfoLinks>
            </MovieInfoItem>
          </MovieInfo>
        </MovieMainContent>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </MovieContent>
    </Section>
  );
};

export default SingleMovie;
