import { Section } from 'components/Section/Section';
import { TrendingsMoviesList } from 'components/TrendingsMoviesList/TrendingsMoviesList';
import { useState, useEffect } from 'react';
import { getTrendingsMovies } from 'services/api';

const Home = () => {
  const [trandingMovies, setTrandingMovies] = useState([]);

  useEffect(() => {
    getTrendingsMovies().then(setTrandingMovies);
  }, []);

  return (
    <Section title={'Trending today'}>
      <TrendingsMoviesList trandingMovies={trandingMovies} />
    </Section>
  );
};

export default Home;
