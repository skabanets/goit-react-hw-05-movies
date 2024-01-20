import { Section } from 'components/Section/Section';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useHhttp } from 'hooks/useHhttp';
import { getTrendingsMovies } from 'services/api';

const Home = () => {
  const [movies] = useHhttp(getTrendingsMovies);

  return (
    <Section title={'Trending today'}>
      <MoviesList movies={movies} />
    </Section>
  );
};

export default Home;
