import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'cda8f90653439e85d58cd639fc9f9823',
    language: 'en-US',
  },
});

export const getTrendingsMovies = async () => {
  const { data } = await instance.get('/trending/all/day');
  return data.results;
};

export const getMoviesByName = async query => {
  const { data } = await instance.get(`/search/movie?query=${query}`);
  return data.results;
};

export const getMovieById = async movie_id => {
  const { data } = await instance.get(`/movie/${movie_id}`);
  return data;
};

export const getMovieCredits = async movie_id => {
  const { data } = await instance.get(`movie/${movie_id}/credits`);
  return data.cast;
};

export const getMovieReviews = async movie_id => {
  const { data } = await instance.get(`movie/${movie_id}/reviews`);
  return data.results;
};
