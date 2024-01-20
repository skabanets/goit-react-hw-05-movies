import { SearchMovieForm } from 'components/SearchMovieForm/SearchMovieForm';
import { Section } from 'components/Section/Section';
import { TrendingsMoviesList } from 'components/TrendingsMoviesList/TrendingsMoviesList';
import { useEffect, useState } from 'react';
import { getMoviesByName } from 'services/api';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getMoviesByName(query).then(setMovies);
  }, [query]);

  const handleSubmit = query => {
    setQuery(query);
  };

  if (!movies) {
    return <h1>Loading ...</h1>;
  }

  console.log(query);
  console.log('hiih');
  if (query) {
    console.log(true);
  }

  return (
    <div>
      <Section title={'Movies'}>
        <SearchMovieForm onSubmit={handleSubmit} />
        {query && movies.length === 0 ? (
          <h2>No films found for this request.</h2>
        ) : (
          <TrendingsMoviesList trandingMovies={movies} />
        )}
      </Section>
    </div>
  );
};

export default Movies;
