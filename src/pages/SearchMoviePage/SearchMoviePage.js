import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import Searchbar from '../../components/Searchbar';
import MovieList from '../../components/MovieList';
import { searchMovie } from '../../services/API';

function SearchMoviePage() {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);

  const getSearch = search => {
    setSearch(search.toLowerCase());
  };

  useEffect(() => {
    if (search === '') {
      return;
    }
    setMovies([]);

    searchMovie(search).then(movies => {
      if (movies.results.length === 0) {
        toast.error('Sorry, nothing was found', {
          duration: 3000,
          style: {
            borderRadius: '10px',
            background: 'white',
            color: 'black',
            padding: '10px',
            textAlign: 'center',
          },
        });
      }
      setMovies(movies.results);
    });
  }, [search]);

  return (
    <>
      <Searchbar onSubmit={getSearch} />
      {movies && <MovieList movies={movies} />}
    </>
  );
}

export default SearchMoviePage;
