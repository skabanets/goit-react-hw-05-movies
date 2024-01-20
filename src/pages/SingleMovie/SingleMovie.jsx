import { Section } from 'components/Section/Section';
import { useState, useEffect } from 'react';
import { Navigate, Outlet, useParams } from 'react-router-dom';
import { getMovieById } from 'services/api';
import {
  AdditionalInfoLink,
  AdditionalInfolinks,
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

const SingleMovie = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMovieById(movieId)
      .then(setMovie)
      .catch(error => setError(error.message));
  }, [movieId]);

  if (error) {
    return <Navigate to="/movies" />;
  }

  if (!movie) {
    return <h1>Loading ...</h1>;
  }

  const defaultImg =
    'https://img.freepik.com/free-photo/top-view-cinema-lettering-yellow-background-with-copy-space_23-2148425109.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1705017600&semt=ais';
  const imgSrc = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : defaultImg;

  const movieYear = movie.release_date.substr(0, 4) || '';
  const movieTitle = movie.name || movie.title;

  const movieRating = movie.vote_average.toFixed(1);

  const ratingColor = rating => {
    if (rating >= 7) {
      return '#778D45';
    }

    if (rating >= 5 && rating < 7) {
      return '#ffa902 ';
    }

    return '#c41e3a';
  };

  return (
    <Section title={`${movieTitle} (${movieYear})`}>
      <MovieContent>
        <MovieMainContent>
          <MovieImg src={imgSrc} alt={movie.name || movie.title} />
          <MovieInfo>
            <MovieInfoItem>
              <h3>Rating:</h3>
              <Rating $bg={ratingColor(+movieRating)}>
                {movieRating} / 10
              </Rating>
            </MovieInfoItem>
            {movieYear && (
              <MovieInfoItem>
                <h3>Year:</h3>
                <p>{movieYear}</p>
              </MovieInfoItem>
            )}
            <div>
              <h3>Overview</h3>
              <OverviewText>{movie?.overview}</OverviewText>
            </div>
            <MovieInfoItem>
              <h3>Genres:</h3>
              <GenresList>
                {movie.genres.map(genre => (
                  <Genr key={genre.id}>{genre.name}</Genr>
                ))}
              </GenresList>
            </MovieInfoItem>
            {movie.runtime !== 0 && (
              <MovieInfoItem>
                <h3>Duration:</h3>
                <p>{movie.runtime} minutes</p>
              </MovieInfoItem>
            )}
            <MovieInfoItem>
              <h3>Additional information:</h3>
              <AdditionalInfolinks>
                <AdditionalInfoLink to="cast">Cast</AdditionalInfoLink>
                <AdditionalInfoLink to="reviews">Reviews</AdditionalInfoLink>
              </AdditionalInfolinks>
            </MovieInfoItem>
          </MovieInfo>
        </MovieMainContent>
        <Outlet />
      </MovieContent>
    </Section>
  );
};

export default SingleMovie;
