import PropTypes from 'prop-types';

function MovieList({ movies }) {
  return (
    <ul>
      {movies.map(({ id, title }) => {
        return <li key={id}>{title}</li>;
      })}
    </ul>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
};

export default MovieList;
