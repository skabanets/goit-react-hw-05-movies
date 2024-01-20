import { Section } from 'components/Section/Section';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useHhttp } from 'hooks/useHhttp';
import { getTrendingsMovies } from 'services/api';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [movies] = useHhttp(getTrendingsMovies);

  if (!movies) {
    return <Loader />;
  }

  return (
    <Section title={'Trending today'}>
      <MoviesList movies={movies} />
    </Section>
  );
};

export default Home;
