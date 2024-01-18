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
      {/* <ul>
        {trandingMovies.map(({ id, poster_path, name, title }) => (
          <li key={id}>
            <Link to={id.toString()}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={name || title}
              />
              <h3>{name || title}</h3>
            </Link>
          </li>
        ))}
      </ul> */}
    </Section>
  );
};

export default Home;
