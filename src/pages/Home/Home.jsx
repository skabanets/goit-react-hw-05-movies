import { Section } from 'components/Section/Section';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useHhttp } from 'hooks/useHhttp';
import { getTrendingsMovies } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import { toast } from 'react-toastify';

const Home = () => {
  const [movies, , error] = useHhttp(getTrendingsMovies);

  if (error) {
    toast.error(`The request failed! Reload the page or try again later.`);
    return <Loader />;
  }

  if (!movies) return <Loader />;

  return (
    <Section title={'Trending today'}>
      <MoviesList movies={movies} />
    </Section>
  );
};

export default Home;
