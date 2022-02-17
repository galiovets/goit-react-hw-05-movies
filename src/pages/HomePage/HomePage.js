import { useState, useEffect } from 'react';
import Container from '../../components/Container';
import { Title } from './HomePage.styled';
import { getTrending } from '../../services/API';
import MovieList from '../../components/MovieList';

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrending().then(data => setMovies(data.results));
  }, []);

  return (
    <>
      <Title>Trending Today</Title>
      <MovieList movies={movies} />
    </>
  );
}

export default HomePage;
