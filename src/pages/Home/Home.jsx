import { Section } from 'components/Section/Section';
import { TrendingsMoviesList } from 'components/TrendingsMoviesList/TrendingsMoviesList';
import { useHhttp } from 'hooks/useHhttp';
import { getTrendingsMovies } from 'services/api';

const Home = () => {
  const [trandingMovies] = useHhttp(getTrendingsMovies);

  return (
    <Section title={'Trending today'}>
      <TrendingsMoviesList trandingMovies={trandingMovies} />
    </Section>
  );
};

export default Home;
