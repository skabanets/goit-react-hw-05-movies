import { SearchMovieForm } from 'components/SearchMovieForm/SearchMovieForm';
import { Section } from 'components/Section/Section';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { getMoviesByName } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import { Navigate, useLocation } from 'react-router-dom';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.search) {
      setQuery(location.search.slice(7));
    }

    if (!query) return;

    getMoviesByName(query)
      .then(setMovies)
      .catch(error => setError(error.message));
  }, [query, location]);

  const handleSubmit = query => {
    setQuery(query);
    location.search = `?query=${query}`;
  };

  if (error) {
    return <Navigate to="/*" />;
  }

  if (query && !movies) {
    return <Loader />;
  }

  return (
    <div>
      <Section title={'Movies'}>
        <SearchMovieForm onSubmit={handleSubmit} />
        {movies && <MoviesList movies={movies} />}
        {query && !movies.length && <h2>No films found for this request.</h2>}
      </Section>
    </div>
  );
};

export default Movies;
