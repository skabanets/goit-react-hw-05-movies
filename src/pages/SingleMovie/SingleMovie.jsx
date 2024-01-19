import { Container } from 'components/Container/Container.styled';
import { useState, useEffect } from 'react';
import { Link, Navigate, Outlet, useParams } from 'react-router-dom';
import { getMovieById } from 'services/api';

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

  return (
    <Container>
      <div>
        <div>
          <img src={imgSrc} alt={movie.name || movie.title} />
          <h2>{movie.name || movie.title}</h2>
          <p>Rating: {movie.vote_average.toFixed(1)}/10</p>
          <h3>Overview</h3>
          <p>{movie?.overview}</p>
          <h3>Genres</h3>
          <ul>
            {movie.genres.map(genr => (
              <li key={genr.id}>{genr.name}</li>
            ))}
          </ul>
        </div>
        <hr />
        <Link to="credits">Credits</Link>
        <Link to="reviews">Reviews</Link>
        <Outlet />
      </div>
    </Container>
  );
};

export default SingleMovie;
