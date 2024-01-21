import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
// import Home from 'pages/Home/Home';
// import Movies from 'pages/Movies/Movies';
// import SingleMovie from 'pages/SingleMovie/SingleMovie';
// import MovieCast from './NestedRoutes/MovieCast';
// import MovieReviews from './NestedRoutes/MovieReviews ';
// import NotFound from 'pages/NotFound/NotFound';
import { lazy } from 'react';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const SingleMovie = lazy(() => import('pages/SingleMovie/SingleMovie'));
const MovieCast = lazy(() => import('./NestedRoutes/MovieCast'));
const MovieReviews = lazy(() => import('./NestedRoutes/MovieReviews '));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="movies" element={<Movies />} />

          <Route path="movies/:movieId" element={<SingleMovie />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
