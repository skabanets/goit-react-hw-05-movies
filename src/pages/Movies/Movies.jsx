import { SearchMovieForm } from 'components/SearchMovieForm/SearchMovieForm';
import { Section } from 'components/Section/Section';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { getMoviesByName } from 'services/api';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    if (!query) return;

    getMoviesByName(query)
      .then(res => setMovies(res))
      .catch(error => console.log(error.message));
  }, [query]);

  const handleSubmit = query => {
    setQuery(query);
  };

  if (query && !movies) {
    return <h1>Loading ...</h1>;
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
