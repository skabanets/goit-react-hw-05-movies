import { Section } from 'components/Section/Section';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingsMovies } from 'services/api';

const Home = () => {
  const [trandingMovies, setTrandingMovies] = useState([]);

  useEffect(() => {
    getTrendingsMovies().then(setTrandingMovies);
  }, []);

  return (
    <Section title={'Trending today'}>
      <ul>
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
      </ul>
    </Section>
  );
};

export default Home;
