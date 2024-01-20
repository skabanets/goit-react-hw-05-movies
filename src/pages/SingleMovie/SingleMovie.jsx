import { Section } from 'components/Section/Section';
import { useState, useEffect } from 'react';
import { Navigate, Outlet, useParams } from 'react-router-dom';
import { getMovieById } from 'services/api';
import {
  AdditionalInfoLink,
  AdditionalInfoLinks,
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

const SingleMovie = () => {
  const { movieId } = useParams();
  const [movie, , error] = useHhttp(getMovieById, movieId);

  if (error) {
    return <Navigate to="*" />;
  }

  if (!movie) {
    return <h1>Loading ...</h1>;
  }

  const defaultMoviePoster =
    'https://www.thetechedvocate.org/wp-content/uploads/2023/11/30-5.jpg';
  const moviePoster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : defaultMoviePoster;

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
    <Section
      title={movieYear ? `${movieTitle} (${movieYear})` : `${movieTitle}`}
    >
      <MovieContent>
        <MovieMainContent>
          <MovieImg src={moviePoster} alt={movie.name || movie.title} />
          <MovieInfo>
            {movieRating !== '0.0' && (
              <MovieInfoItem>
                <h3>Rating:</h3>
                <Rating $bg={ratingColor(+movieRating)}>
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
        <Outlet />
      </MovieContent>
    </Section>
  );
};

export default SingleMovie;
