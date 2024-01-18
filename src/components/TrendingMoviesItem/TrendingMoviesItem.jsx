import { Link } from 'react-router-dom';

export const TrendingMoviesItem = ({ movieInfo }) => {
  const { id, poster_path, name, title } = movieInfo;

  return (
    <li>
      <Link to={id.toString()}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={name || title}
        />
        <h3>{name || title}</h3>
      </Link>
    </li>
  );
};
