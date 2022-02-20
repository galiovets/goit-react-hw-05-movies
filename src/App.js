import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './App.css';
import Container from './components/Container';
import Loader from './components/Loader';
import Navigation from './components/Navigation';

const HomePage = lazy(() => import('./pages/HomePage'));
const SearchMoviePage = lazy(() => import('./pages/SearchMoviePage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'));
const Cast = lazy(() => import('./components/Cast'));
const Reviews = lazy(() => import('./components/Reviews'));

function App() {
  return (
    <Container>
      <Navigation />
      <Toaster position="top-center" />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<SearchMoviePage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </Suspense>
    </Container>
  );
}

export default App;
