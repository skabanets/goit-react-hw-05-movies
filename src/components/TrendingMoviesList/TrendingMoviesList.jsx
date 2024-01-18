export const TrendingMoviesList = ({ trandingMovies }) => {
  return (
    <ul>
      {trandingMovies?.map(movie => (
        <TrendingMoviesList key={movie.id} movieInfo={movie} />
      ))}
    </ul>
  );
};
